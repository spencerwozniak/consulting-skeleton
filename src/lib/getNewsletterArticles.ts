// server-only
// lib/getNewsletterArticles.ts

import { google } from 'googleapis';
import { load } from 'cheerio';
import path from 'path';
import fs from 'fs/promises';
import fetch from 'node-fetch';

export type Article = {
  id: string;
  title: string;
  date: string;
  name: string;
  contents: string;
  topic?: string;
  image: [string, string];
  keywords?: string[];
};

const FOLDER_ID = process.env.NEWSLETTER_PARENT_FOLDER_ID!;
const PUBLIC_CACHE_DIR = path.join(process.cwd(), 'public/newsletter-cache');

export async function getNewsletterArticles(): Promise<Article[]> {
  // Authenticate
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/drive'],
  });
  const drive = google.drive({ version: 'v3', auth });

  // Ensure cache directory exists
  await fs.mkdir(PUBLIC_CACHE_DIR, { recursive: true });

  // Get all Google Docs in folder
  const { data } = await drive.files.list({
    q: `'${FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.document' and trashed=false`,
    fields: 'files(id, name, createdTime, modifiedTime, owners(displayName), description)',
    pageSize: 100,
    supportsAllDrives: true,
    includeItemsFromAllDrives: true,
  });

  if (!data.files) throw new Error('No files found');

  const articles: Article[] = await Promise.all(
    data.files.map(async (file) => {
      const htmlRes = await drive.files.export(
        { fileId: file.id!, mimeType: 'text/html' },
        { responseType: 'text' }
      );

      const $ = load(htmlRes.data);
      $('style, head').remove();

      $('[style]').each((_, el) => {
        const allowed = ['font-weight', 'font-style', 'text-decoration', 'font-size', 'color'];
        const styleAttr = $(el).attr('style') || '';
        const filtered = styleAttr
          .split(';')
          .map(s => s.trim())
          .filter(s => allowed.some(a => s.startsWith(a)))
          .join('; ');
        if (filtered) {
          $(el).attr('style', filtered);
        } else {
          $(el).removeAttr('style');
        }
      });

      // Extract and download first image if needed
      const firstImg = $('img').first();
      let localImagePath = '';
      let headerImageAlt = '';

      if (firstImg.length) {
        const imgSrc = firstImg.attr('src') || '';
        headerImageAlt = firstImg.attr('alt') || '';
        firstImg.remove();

        const ext = imgSrc.includes('image/jpeg') ? 'jpg' :
                    imgSrc.includes('image/png') ? 'png' : 'jpg';

        const imageFilename = `${file.id}-0.${ext}`;
        const localPath = path.join(PUBLIC_CACHE_DIR, imageFilename);
        localImagePath = `/newsletter-cache/${imageFilename}`;

        try {
          await fs.access(localPath);
        } catch {
          const imageRes = await fetch(imgSrc);
          const buffer = await imageRes.buffer();
          await fs.writeFile(localPath, buffer);
        }
      }

      // Clean and extract text
      $('br').replaceWith('\n');
      $('p, h1, h2, h3, h4, h5, h6, li, div').each((_, el) => {
        const current = $(el).html();
        if (current && !current.endsWith(' ')) {
          $(el).append(' ');
        }
      });

      const rawText = $('body').text();
      const cleanedText = rawText
        .replace(/\u00A0/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/ ([.,!?;:])/g, '$1')
        .trim();

      return {
        id: file.id,
        title: file.name,
        topic: file.description || '',
        date: new Date(file.modifiedTime || file.createdTime).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        name: file.owners?.[0]?.displayName || 'Emmanuel Fombu, MD, MBA',
        contents: cleanedText,
        image: [localImagePath, headerImageAlt],
        keywords: [],
      };
    })
  );

  return articles;
}
