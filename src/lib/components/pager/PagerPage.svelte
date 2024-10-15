<script module lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { type PagerContext, type PagerVariant } from './Pager.svelte';
	import {
		BgColorCurrent,
		BgColorSoftCurrent,
		ForeColorCurrent,
		ForeColorFilled,
		ForeColorFilledHover,
		ForeColorSoft,
		ForeColorSoftHover,
		type FocusType,
		type RoundedSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import { FieldFontSize, RoundedFirstLast } from '$lib/theme/constants.js';
	import type { HTMLAnchorAttributes, HTMLBaseAttributes } from 'svelte/elements';

	export interface PagerPageProps {
		current?: boolean;
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		rounded?: RoundedSize;
		size?: Size;
		theme?: ThemeColor;
		variant?: PagerVariant;
		children: Snippet;
	}

	const PagerGroupedPadding = {
		unstyled: '',
		xs: 'px-2.5 p-0.5',
		sm: 'px-3.5 py-1',
		md: 'px-4 py-1.5',
		lg: 'px-5 py-2',
		xl: 'px-6 py-2.5',
		xl2: 'px-7 py-3'
	};

	export const PagerFlushedPadding = {
		unstyled: '',
		xs: 'px-2.5 pt-2',
		sm: 'px-3.5 pt-2.5',
		md: 'px-4 pt-3',
		lg: 'px-5 pt-3.5',
		xl: 'px-6 pt-4',
		xl2: 'px-7 pt-5'
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { buildClass } from '$lib/theme/build.svelte.js';

	const context = getContext('Pager') as PagerContext;

	let {
		current,
		disabled,
		focusType = 'visible',
		focusTheme,
		focusOffset,
		href,
		rounded = context?.rounded,
		size = context?.size,
		theme = context?.theme,
		variant = context?.variant,
		children,
		...rest
	}: PagerPageProps & HTMLAnchorAttributes & HTMLBaseAttributes = $props();

	const classes = $derived(
		buildClass({
			prepend: [`pager pager-${variant || 'default'} pager-${theme || 'default'}`],

			classes: [
				variant !== 'flushed' &&
					'relative inline-flex items-center justify-center font-semibold focus:z-20 ring-1 ring-inset ring-frame-200 dark:ring-frame-600',
				variant !== 'flushed' && current && 'z-10',

				variant === 'flushed' &&
					'inline-flex items-center border-t-2 border-transparent font-medium border-x-0 border-b-0',

				variant !== 'flushed' && size && PagerGroupedPadding[size],
				variant === 'flushed' && size && PagerFlushedPadding[size],

				size && FieldFontSize[size],

				variant === 'filled' && theme && BgColorCurrent[theme],
				variant === 'filled' && theme && ForeColorFilled[theme],
				variant === 'filled' && theme && ForeColorFilledHover[theme],
				(!variant || variant === 'filled') &&
					!theme &&
					'bg-white dark:bg-frame-800 hover:bg-frame-200 dark:hover:bg-frame-700',
				(!variant || variant === 'filled') &&
					!theme &&
					current &&
					'aria-[current="page"]:bg-frame-200 dark:aria-[current="page"]:bg-frame-700',

				variant === 'soft' && theme && BgColorSoftCurrent[theme],
				variant === 'soft' && theme && ForeColorSoft[theme],
				variant === 'soft' && theme && ForeColorSoftHover[theme],

				variant === 'flushed' && theme && ForeColorCurrent[theme],
				variant === 'flushed' && !current && 'hover:border-frame-300 dark:hover:border-frame-600',

				current && 'pointer-events-none',

				rounded && RoundedFirstLast[size],
				'first:rounded-r-none last:rounded-l-none',

				!href && 'pointer-events-none',

				t.options.transition,

				rest.class
			],
			disabled,
			focusTheme: focusTheme || theme,
			focusType,
			focusOffset
		})
	);
</script>

<a
	{...rest}
	{href}
	aria-current={current ? 'page' : undefined}
	aria-disabled={disabled}
	class={classes}
>
	{@render children()}
</a>
