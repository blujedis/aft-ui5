/* eslint-disable @typescript-eslint/no-require-imports */

import { aft, defaultTheme } from '@aft/config';

const themes = {
  default: {
    ...defaultTheme
  }
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    aft(themes)
  ],
}

