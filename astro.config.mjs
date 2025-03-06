// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://aruator.github.io',
	base: 'aruator-web',
	integrations: [mdx(), sitemap()],
});
