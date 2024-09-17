/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Component, Snippet } from 'svelte';

export function isComponent(value: Component<any> | Snippet<any>): value is Component {
  return value.length === 2;
}


export function isSnippet(value: Component<any> | Snippet<any>): value is Snippet {
  return value.length === 1;
}


export function optevent<E extends Event, R = any>(predicate: boolean | (() => boolean), fn: (e: E) => R) {
  predicate = typeof predicate === 'function' ? predicate() : predicate;
  return predicate ? fn : () => undefined;
}