/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Component, Snippet } from 'svelte';

export function isComponent(value: Component<any> | Snippet<any>): value is Component {
  return value.length === 2;
}


export function isSnippet(value: Component<any> | Snippet<any>): value is Snippet {
  return value.length === 1;
}
