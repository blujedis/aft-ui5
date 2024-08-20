import type { Component, Snippet } from 'svelte';

export function isComponent(value: Component | Snippet): value is Component {
  return value.length === 2;
}


export function isSnippet(value: Component | Snippet): value is Snippet {
  return value.length === 1;
}
