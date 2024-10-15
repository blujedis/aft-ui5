/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SvelteHTMLElements } from 'svelte/elements';
import type { TransitionConfig } from 'svelte/transition';

export type HTMLTag = keyof SvelteHTMLElements
export type ElementProps<K extends HTMLTag> = Omit<SvelteHTMLElements[K], 'children' | 'size' | 'as'>;
export type TransitionFn = (node: HTMLElement, params: Record<string, unknown>) => TransitionConfig;
export type UseFn = (node: HTMLElement, params: any) => any;
export type TypeOrValue<Keys extends string | number | symbol> = Keys | (string & { value?: any });
export type KeysOf<T> = { [K in keyof T]: K extends number ? `${K}` : K }[keyof T];
export type KeysOfSource<T> = keyof T | KeysOf<T>;