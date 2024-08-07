import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveldoc from './sveldoc.js';

// adapters: https://kit.svelte.dev/docs/adapters
// preprocessors: https://kit.svelte.dev/docs/integrations#preprocessors

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [sveldoc(), vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			'$components': 'src/components',
			'$components/*': 'src/components/*'
		}
	}
};

export default config;


// import adapter from '@sveltejs/adapter-auto'
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
// import preproc from './preprocessor.js'

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', '.md'],
// 	preprocess: [preproc(), vitePreprocess()],
// 	kit: {
// 		adapter: adapter()
// 	}
// }

// export default config