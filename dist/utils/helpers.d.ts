import type { Component, Snippet } from 'svelte';
export declare function isComponent(value: Component<any> | Snippet<any>): value is Component;
export declare function isSnippet(value: Component<any> | Snippet<any>): value is Snippet;
export declare function optevent<E extends Event, R = any>(predicate: boolean | (() => boolean), fn: (e: E) => R): ((e: E) => R) | (() => undefined);
