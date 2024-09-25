<script module lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { paginator, type Paginator } from '$lib/hooks/paginator.js';
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
		pager: Paginator;
		rounded: RoundedSize;
		size: Size;
		theme: ThemeColor;
		variant: PagerVariant;
		getUrl: (value: string | number) => string;
		setCurrent: (value: string | number) => any;
		getCurrent: () => number;
		getNext: () => number;
		getPrevious: () => number;
		isCurrent: (value?: string | number) => boolean;
		isLast: () => boolean;
		isFirst: () => boolean;
	}

	export type PagerProps = {
		items?: number;
		current?: string | number | null;
		buttons?: number;
		count?: number;
		pager?: Paginator;
		rounded?: RoundedSize;
		shadow?: ShadowSize;
		size?: Size;
		theme?: ThemeColor;
		variant?: PagerVariant;
		children: Snippet;
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let {
		items = $bindable(0),
		current = $bindable(),
		buttons = $bindable(5),
		count = $bindable(10),
		pager = $bindable(),
		rounded,
		shadow,
		size = 'md',
		theme,
		variant,
		children,
		...rest
	}: PagerProps & ElementProps<'nav'> = $props();

	setContext('Pager', {
		pager,
		rounded,
		size,
		theme,
		variant,
		getUrl: (value) => getUrl(value),
		getCurrent: () => Number(pager?.current),
		getNext: () => pager?.next,
		getPrevious: () => pager?.previous,
		setCurrent: (value) => {
			current = value;
			goto(getUrl(value));
		},
		isCurrent: (value) => Number(pager?.current) == value,
		isFirst: () => Number(pager?.current) === 1,
		isLast: () => pager?.lastPage === Number(pager?.current)
	} as PagerContext);

	function getUrl(value: string | number) {
		const params = $page.url.searchParams;
		params.set('page', value + '');
		return `?${params.toString()}`;
	}

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

	$effect(() => {
		const pg = $page.url.searchParams.get('page');
		pager = paginator({
			items, // can be count or array
			current: Number(pg || 1),
			buttons,
			count,
			ellipsis: true
		});
	});
</script>

<nav aria-label="pagination" {...rest} class={classes}>
	{@render children()}
</nav>
