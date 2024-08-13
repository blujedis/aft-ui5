import type { Page } from '@sveltejs/kit';

export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
/**
 * When string match uses index of or includes
 * otherwise use RegExp with .test().
 */
export function pageIsActive(
  page: Page<Record<string, string>, string | null>,
  match: string | RegExp
) {
  if (typeof match === 'string') return page.url.pathname.includes(match);
  return match.test(page.url.pathname);
}