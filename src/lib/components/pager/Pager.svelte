<script module lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import {
		BorderColor,
		RingColor,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import { Rounded, Shadow } from '$lib/theme/constants.js';
	// import { type Paginator } from './paginator.svelte.js';

	export type PagerVariant = 'unstyled' | 'filled' | 'soft' | 'flushed';

	export interface PagerContext {
		rounded: RoundedSize;
		size: Size;
		theme: ThemeColor;
		variant: PagerVariant;
	}

	export type PagerProps = {
		// pager?: Paginator;
		// baseref?: string;
		// param?: string;
		rounded?: RoundedSize;
		shadow?: ShadowSize;
		size?: Size;
		theme?: ThemeColor;
		variant?: PagerVariant;
		previous?: boolean | Snippet;
		children?: Snippet;
		next?: boolean | Snippet;
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	// import { page } from '$app/stores';
	// import PagerPage from './PagerPage.svelte';
	// import { getParam, getUrl } from './utils.js';
	// import { paginator } from './paginator.svelte.js';

	let {
		// pager = $bindable(),
		// baseref = $page.url.href,
		// param = 'page',
		rounded,
		shadow,
		size = 'md',
		theme,
		variant,
		previous,
		children,
		next,
		...rest
	}: PagerProps & ElementProps<'nav'> = $props();

	// const url = $derived.by(() => new URL(baseref || $page.url.href));
	// const current = $derived.by(() => getParam(url.searchParams, param));
	// const { pages, firstPage, lastPage, totalPages, nextPage, prevPage } = $derived.by(() =>
	// 	paginator({
	// 		rows: 10,
	// 		displayed: 5,
	// 		buttons: 10,
	// 		ellipsis: true,
	// 		current
	// 	})
	// );

	setContext('Pager', {
		rounded,
		size,
		theme,
		variant
	} as PagerContext);

	const classes = $derived(
		clsxm(
			`pager pager-variant-${variant || 'default'} pager-theme-${theme || 'default'}`,
			variant !== 'flushed' && 'inline-flex items-center isolate -space-x-px',

			(['filled', 'soft'].includes(variant || '') || !variant) && theme && RingColor[theme],
			(['filled', 'soft'].includes(variant || '') || !variant) && t.options.divide,

			variant === 'flushed' && 'border-t isolate inline-flex',
			variant === 'flushed' && theme && BorderColor[theme],
			variant === 'flushed' && theme && BorderColor[theme],
			variant === 'flushed' && !theme && 'border-frame-300',

			size && rounded && Rounded[size],
			size && shadow && Shadow[size],
			t.options.transition,

			rest.class
		)
	);
</script>

<nav aria-label="pagination" {...rest} class={classes}>
	{#if children}
		{@render children()}
	{/if}

	<!-- {#if typeof previous === 'boolean'}
		<PagerPage href={getUrl(url.href, prevPage, param)} disabled={current === 1}>Previous</PagerPage
		>
	{:else if typeof previous === 'function'}
		{@render previous()}
	{/if}

	{#if children}
		{@render children()}
	{:else}
		{#each pages as pg}
			<PagerPage
				current={current === pg}
				pointerless={pg === '...'}
				href={getUrl(url.href, pg, param)}
			>
				{pg}
			</PagerPage>
		{/each}
	{/if}

	{#if typeof next === 'boolean'}
		<PagerPage href={getUrl(url.href, nextPage, param)} disabled={totalPages === current}
			>Next</PagerPage
		>
	{:else if typeof next === 'function'}
		{@render next()}
	{/if} -->
</nav>
