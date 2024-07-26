import type { SvelteHTMLElements } from 'svelte/elements';

export type HTMLTag = keyof SvelteHTMLElements
export type ElementProps<K extends HTMLTag> = SvelteHTMLElements[K];
export type PropsWithoutChildren<P extends Record<string, unknown>> = Omit<P, 'children'>;

