import { error } from '@sveltejs/kit';

export async function load({ params: { component } }) {
  try {
    const segments = component.split('-').map(v => (v.charAt(0).toUpperCase() + v.slice(1)));
    const name = segments.join('');
    const module = await import(`../../lib/components/${segments[0].toLowerCase()}/${name}Example.svelte`);
    return {
      content: module.default,
    }
  } catch (e) {
    console.log(e);
    error(404, `Could not find ${component}`);
  }
}