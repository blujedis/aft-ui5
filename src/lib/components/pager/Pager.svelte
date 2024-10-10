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

	export type PagerVariant = 'unstyled' | 'filled' | 'soft' | 'flushed';

	export interface PagerContext {
		rounded: RoundedSize;
		size: Size;
		theme: ThemeColor;
		variant: PagerVariant;
	}

	export type PagerProps = {
		// items?: number;
		// buttons?: number;
		// ellipsis?: boolean;
		// displayed?: number;
		// baseref?: string;
		// current?: number; // string | number | null;
		// pages?: (string | number)[];
		// param?: string;
		// nextPage?: number;
		// prevPage?: number;
		// totalPages?: number;

		pager?: {
			baseref?: string;
			param?: string;
			current?: number;
			items?: number;
			buttons?: number;
			displayed?: number;
		};

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
	import { page, page as pageStore } from '$app/stores';
	import PagerPage from './PagerPage.svelte';
	import { getParam, getUrl } from './utils.js';
	import { paginator } from '$lib/hooks/paginator.js';

	let {
		pager = $bindable({
			baseref: $page.url.href,
			current: getParam($page.url.searchParams, 'page'),
			items: 10,
			buttons: 5,
			displayed: 10,
			ellipsis: true
		}),
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

	const current = $derived.by(() => getParam($pageStore.url.searchParams, pager?.param));

	const { pages, firstPage, lastPage, totalPages, nextPage, prevPage } = $derived.by(() =>
		paginator({
			current: getParam($page.url.searchParams, pager?.param || 'page'),
			...pager
		})
	);

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
	<!-- {#if children}
		{@render children({ displayed: [], next: 1, previous: 1 })}
	{/if} -->
	{#if typeof previous === 'boolean'}
		<PagerPage href={getUrl($pageStore.url.href, prevPage, pager?.param)} disabled={current === 1}
			>Previous</PagerPage
		>
	{:else if typeof previous === 'function'}
		{@render previous()}
	{/if}

	{#if children}
		{@render children()}
	{:else}
		{#each pages as page}
			<PagerPage
				current={current === page}
				pointerless={page === '...'}
				href={getUrl($pageStore.url.href, page, pager?.param)}
			>
				{page}
			</PagerPage>
		{/each}
	{/if}

	{#if typeof next === 'boolean'}
		<PagerPage
			href={getUrl($pageStore.url.href, nextPage, pager?.param)}
			disabled={totalPages === current}>Next</PagerPage
		>
	{:else if typeof next === 'function'}
		{@render next()}
	{/if}
</nav>
