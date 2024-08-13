import { error } from '@sveltejs/kit';

export async function load({ params: { component } }) {
  try {
    const name = component.charAt(0).toUpperCase() + component.slice(1);
    const module = await import(`../../lib/components/${component}/${name}Example.svelte`);
    return {
      content: module.default,
    }
  } catch (e) {
    console.log(e);
    error(404, `Could not find ${component}`);
  }
}