const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

// const getColor = (colorVar, { opacityVariable, opacityValue }) => {
//   if (opacityValue !== undefined) {
//     return `rgb(var(${colorVar})/${opacityValue})`;
//   }
//   if (opacityVariable !== undefined) {
//     return `rgb(var(${colorVar})/var(${opacityVariable}, 1))`;
//   }

//   return `rgb(var(${colorVar}))`;
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-primary-color)',
        accent: 'var(--brand-accent-color)',
        warn: 'var(--brand-warn-color)'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
        '3xl': '1280px',
        '4xl': '1280px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: "class"
    }),
  ],
};
