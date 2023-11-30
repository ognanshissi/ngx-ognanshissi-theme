const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--ab-primary-color)' 
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
        '3xl': '1280px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
