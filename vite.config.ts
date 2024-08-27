import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { buildTokens } from './genTokens.js';
import { resolve } from 'path';
import { type HmrContext, type Plugin } from 'vite';

function reloadTokens(): Plugin {
	return {
		name: 'custom-hmr',
		enforce: 'post',
		handleHotUpdate({ file, server }: HmrContext) {
			if (file.endsWith('tokens.json')) {
				buildTokens();
				// server.restart();
				server.ws.send({
					type: 'full-reload',
					path: '*'
				});
			}
		},
	};
}


export default defineConfig({
	plugins: [
		{
			name: 'prebuild-commands',
			enforce: 'pre',
			apply: 'serve',
			// handleHotUpdate: () => buildTokens(),
			buildStart: () => buildTokens()
		},
		reloadTokens(),
		sveltekit()
	],
	server: {
		fs: {
			allow: ['..']
		},
		port: 5174,
		watch: {
			ignored: [
				'./static/**',
				'./node_modules/**',
				'./dist/**',
				'./coverage/**',
				'./test/**',
				'./.tmp/**',
			]
		}
	},
	clearScreen: false,
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

