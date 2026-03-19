// scripts/get-refresh-token.js

require('dotenv').config(); // Loads variables from .env (optional if using shell env)

const { google } = require('googleapis');
const readline = require('readline');

console.log(process.env.GMAIL_CLIENT_ID); // Should print your client ID

const { google } = require('googleapis');
const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URI || 'http://localhost:3000/oauth2callback'
);

const SCOPES = ['https://mail.google.com/'];

function getAccessToken() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });
  console.log('Authorize this app by visiting this url:\n', authUrl);

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.question('\nEnter the code from that page here: ', (code) => {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      console.log('\nYour refresh token is:\n');
      console.log(token.refresh_token);
      rl.close();
    });
  });
}

getAccessToken();
