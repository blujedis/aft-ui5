import { error } from '@sveltejs/kit';

// cheeesy override for some paths.
// should improve at some point.
const map = {
  Selectlist: 'SelectList'
};

export async function load({ params: { component } }) {
  try {
    const segments = component.split('-').map(v => (v.charAt(0).toUpperCase() + v.slice(1)));
    let name = segments.join('');
    name = map[name as keyof typeof map] || name;
    const module = await import(`../../lib/components/${segments[0].toLowerCase()}/${name}Example.svelte`);
    return {
      content: module.default,
    }
  } catch (e) {
    console.log(e);
    error(404, `Could not find ${component}`);
  }
}