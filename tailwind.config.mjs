/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;


/*
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
});

*/