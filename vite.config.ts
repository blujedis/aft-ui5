import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { buildTokens } from './genTokens.js';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		{
			name: 'prebuild-commands',
			enforce: 'pre',
			apply: 'serve',
			// handleHotUpdate: () => buildTokens(),
			buildStart: () => buildTokens()
		},
		sveltekit()
	],
	server: {
		fs: {
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			$components: resolve('src/components'),
			$lib: resolve('src/lib'),
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
