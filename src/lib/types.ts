/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SvelteHTMLElements } from 'svelte/elements';
import type { TransitionConfig } from 'svelte/transition';

export type HTMLTag = keyof SvelteHTMLElements
export type ElementProps<K extends HTMLTag> = Omit<SvelteHTMLElements[K], 'children'>;
export type PropsWithoutChildren<P extends Record<string, unknown>> = Omit<P, 'children'>;
export type TransitionFn = (node: HTMLElement, params: Record<string, unknown>) => TransitionConfig;
export type UseFn = (node: HTMLElement, params: any) => any;

