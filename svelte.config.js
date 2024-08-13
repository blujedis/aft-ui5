import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// adapters: https://kit.svelte.dev/docs/adapters
// preprocessors: https://kit.svelte.dev/docs/integrations#preprocessors

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			'$components': 'src/components',
			'$components/*': 'src/components/*'
		}
	}
};

export default config;