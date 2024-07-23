import type { SvelteHTMLElements } from 'svelte/elements';

export type HTMLTag = keyof SvelteHTMLElements
export type ElementProps<K extends HTMLTag> = SvelteHTMLElements[K];
export type ElementPropsWithType<K extends HTMLTag, T = unknown> = ElementProps<K> & T;
export type PropsWithoutChildren<P extends Record<string, unknown>> = Omit<P, 'children'>;

