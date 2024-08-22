import type { Page } from '@sveltejs/kit';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

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

/**
 * Combines class names then processes for duplicates with Tailwind merge util.
 * 
 * @param args class values to be processed
 */
export function clsxm(...args: ClassValue[]) {
  const classes = clsx(...args);
  return twMerge(classes);
}