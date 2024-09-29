/** @type {import('tailwindcss').Config} */
import path from 'node:path';

export default {
  content: [
    path.join(__dirname, './src/**/*.{astro,html,jsx,md,mdx,svelte,tsx,vue}'),
    path.join(
      __dirname,
      '../../features/**/src/**/*.{astro,html,jsx,md,mdx,svelte,tsx,vue}',
    ),
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        31: 'repeat(31, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
