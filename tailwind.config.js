// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // add this if you use /pages
  ],
  theme: {
    extend: {
      typography: {
        // optional: custom prose styles
        DEFAULT: {
          css: {
            p: {
              fontWeight: '400',        // normal
              marginBottom: '1rem',     // consistent spacing
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      addUtilities(
        {
          '.before\\:content': {
            content: '""',
          },
        },
        ['before']
      );
    }),
  ],
};
