/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../features/**/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
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
