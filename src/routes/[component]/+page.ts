import { error } from '@sveltejs/kit';

export async function load({ params: { component } }) {
  try {
    const module = await import(`../../../src/lib/components/${component}/${component}.md`);
    return {
      content: module.default,
      meta: module.metadata
    }
  } catch (e) {
    console.log(e);
    error(404, `Could not find ${component}`);
  }
}