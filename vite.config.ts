import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { buildTokens } from './genTokens.js';

export default defineConfig({
	plugins: [
		{
			name: 'prebuild-commands',
			enforce: 'pre',
			apply: 'serve',
			// handleHotUpdate: async () => buildTokens(),
			buildStart: () => buildTokens()
		},
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
