// src/app/layout.tsx

import './globals.css';
import { Raleway, Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import Providers from '@/components/Providers';
import ClientLayoutWrapper from './ClientLayoutWrapper';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
  adjustFontFallback: true,     // ↓ mitigates CLS
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata = {
  title: 'Emmanuel Fombu | Author, Speaker, Futurist',
  description:
    'Dr. Emmanuel Fombu is an internationally recognized authority on the convergence of digital technologies and healthcare.',
  icons: {
    icon: '/EF-brand-logo.png',
    shortcut: '/EF-brand-logo.png',
    apple: '/EF-brand-logo.png'
  },
  keywords: [
    'Emmanuel Fombu',
    'Dr. Emmanuel Fombu',
    'Emmanuel Fombu MD MBA',
    'Emmanuel Fombu author',
    'Healthspan Futurist',
    'The Healthspan Futurist',
    'healthcare keynote speaker',
    'digital health thought leader',
    'medical futurist',
    'healthcare innovation',
    'health technology expert',
    'AI in healthcare',
    'artificial intelligence healthcare',
    'machine learning healthcare',
    'healthcare entrepreneurship',
    'healthcare transformation',
    'healthcare podcast',
    'Emmanuel Fombu podcast',
    'healthcare books',
    'healthcare consulting',
    'personalized medicine',
    'disease prevention expert',
    'healthcare industry trends',
    'healthcare speaker',
    'healthcare conferences',
    'global health innovation',
    'healthcare disruption',
    'internet of things healthcare',
    'digital health author',
    'The Future of Healthcare',
    'top digital health books',
    'medical technology visionary',
    'healthcare data expert',
    'physician burnout solutions',
    'drug pricing reform healthcare',
    'healthcare consolidation expert',
    'clinical medicine innovation',
    'healthcare executive speaker',
    'Emmanuel Fombu MIT',
    'healthcare blogs',
    'digital health blog',
    'healthcare AI leader'
  ],
  creator: 'Emmanuel Fombu',
  metadataBase: new URL('https://drfombu.com'),
  openGraph: {
    title: 'Emmanuel Fombu | Author, Speaker, Futurist',
    description:
      'Dr. Emmanuel Fombu is an internationally recognized authority on the convergence of digital technologies and healthcare.',
    url: 'https://drfombu.com',
    siteName: 'Emmanuel Fombu',
    images: [
      {
        url: 'https://drfombu.com/EF-brand-logo.png',
        width: 700,
        height: 700,
        alt: 'Emmanuel Fombu Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Fombu | Author, Speaker, Futurist',
    description:
      'Dr. Emmanuel Fombu is an internationally recognized authority on the convergence of digital technologies and healthcare.',
    site: '@drfombu',
    creator: '@drfombu',
    images: ['https://drfombu.com/EF-brand-logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <head>
        {/* ✅ JSON-LD Structured Data for Local Business */}
        <link rel="canonical" href="https://drfombu.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Preload the hero poster so it can win LCP consistently */}
        <link rel="preload" as="image" href="/placeholder.png" imageSrcSet="/placeholder.png" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://drfombu.com/#org",
                  "name": "Dr. Emmanuel Fombu",
                  "url": "https://drfombu.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://drfombu.com/EF-brand-logo.png",
                    "width": 700,
                    "height": 700
                  },
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://drfombu.com/EF-brand-logo.png",
                    "width": 700,
                    "height": 700
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/emmanuel-f-789a93117/",
                    "https://medium.com/@emmanuel_fombu",
                    "https://www.facebook.com/fombumd/",
                    "https://www.researchgate.net/profile/Emmanuel-Fombu",
                    "https://www.quora.com/profile/Emmanuel-Fombu-MD-MBA",
                    "https://generalassemb.ly/instructors/manny-fombu/28213",
                    "https://www.emedevents.com/speaker-profile/emmanuel-manny-fombu",
                    "https://scholargps.com/scholars/80347086917608/emmanuel-fombu",
                    "https://www.speakerbookingagency.com/talent/dr-emmanuel-fombu",
                    "https://www.businessexpertpress.com/emmanuel-fombu/",
                    "https://emtechmena.com/elementor-popup/emmanuel-fombu/"
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://drfombu.com/#person",
                  "name": "Emmanuel Fombu",
                  "url": "https://drfombu.com",
                  "image": "https://drfombu.com/EF-brand-logo.png",
                  "affiliation": { "@id": "https://drfombu.com/#org" },
                  "sameAs": [
                    "https://www.linkedin.com/in/emmanuel-f-789a93117/",
                    "https://medium.com/@emmanuel_fombu",
                    "https://www.facebook.com/fombumd/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://drfombu.com/#website",
                  "url": "https://drfombu.com",
                  "name": "Emmanuel Fombu",
                  "publisher": { "@id": "https://drfombu.com/#org" },
                  "inLanguage": "en"
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Providers>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-3VSD3Q80Z7" />
    </html>
  );
}
