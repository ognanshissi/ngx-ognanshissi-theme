
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = plugin(function ({ addComponents }) {
    addComponents({
        '.core-button-base': {
            padding: '.5rem .8rem',
            borderRadius: '5rem',
            backgroundColor: 'var(--brand-primary-color)'
        }
    })
})