const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');


const getColor = (colorVar, { opacityVariable, opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgb(var(${colorVar})/${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `rgb(var(${colorVar})/var(${opacityVariable}, 1))`;
  }

  return `rgb(var(${colorVar}))`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: (params) => getColor('--brand-primary-color', params)
        }
      },
      textColor: {
        brand: {
          primary: (params) => getColor('--brand-primary-color', params)
        }
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
    require('@tailwindcss/forms')({
      strategy: "class"
    }),
  ],
};
