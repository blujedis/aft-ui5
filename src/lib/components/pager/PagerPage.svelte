<script module lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { type PagerContext, type PagerVariant } from './Pager.svelte';
	import { type ElementProps, type HTMLTag } from '$lib/types.js';
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
	import type { IconifyIcon } from '@iconify/svelte';
	import { FieldFontSize } from '$lib/theme/constants.js';
	import type {
		HTMLAnchorAttributes,
		HTMLBaseAttributes,
		HTMLButtonAttributes
	} from 'svelte/elements';

	export interface PagerPageProps {
		current?: boolean;
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		next?: boolean | string | IconifyIcon;
		previous?: boolean | string | IconifyIcon;
		rounded?: RoundedSize;
		size?: Size;
		theme?: ThemeColor;
		value?: string | number;
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
		next,
		previous,
		rounded = context?.rounded,
		size = context?.size,
		theme = context?.theme,
		value,
		variant = context?.variant,
		onclick,
		children,
		...rest
	}: PagerPageProps &
		Omit<HTMLAnchorAttributes, 'value'> &
		Omit<HTMLButtonAttributes, 'value'> &
		Omit<HTMLBaseAttributes, 'value'> = $props();

	const isCurrent = $derived.by(() => {
		if (typeof current !== 'undefined') return current;
		if (!(next || previous)) return context.getCurrent() == value;
		return false;
	});

	const isDisabled = $derived.by(() => {
		if (typeof disabled !== 'undefined') return disabled;
		if (previous) return context.isFirst();
		if (next) return context.isLast();
		return false;
	});

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
					isCurrent &&
					'aria-[current="page"]:bg-frame-200 dark:aria-[current="page"]:bg-frame-700',

				variant === 'soft' && theme && BgColorSoftCurrent[theme],
				variant === 'soft' && theme && ForeColorSoft[theme],
				variant === 'soft' && theme && ForeColorSoftHover[theme],

				variant === 'flushed' && theme && ForeColorCurrent[theme],
				variant === 'flushed' && !isCurrent && 'hover:border-frame-300 dark:hover:border-frame-600',

				previous && 'rounded-r-none px-2',
				next && 'rounded-l-none px-2',
				isCurrent && 'pointer-events-none',

				t.options.transition,

				rest.class
			],
			disabled: isDisabled,
			focusTheme: focusTheme || theme,
			focusType,
			focusOffset,
			rounded: previous || next ? rounded : undefined
		})
	);

	function createClick(value?: string | number) {
		return (e: Event) => {
			if (next || previous) {
				if (next) return context.setCurrent(context.getNext());
				else if (previous) return context.setCurrent(context.getPrevious());
			} else if (typeof value !== 'undefined') {
				context?.setCurrent(value);
			}
		};
	}
</script>

<!-- svelte-ignore a11y_role_supports_aria_props_implicit -->
<svelte:element
	this={href ? 'a' : 'button'}
	tabindex="-1"
	role={href ? 'link' : 'button'}
	{...rest}
	{href}
	disabled={isDisabled}
	aria-current={context.isCurrent(value) ? 'page' : undefined}
	aria-disabled={isDisabled}
	class={classes}
	onclick={!onclick ? createClick(value) : onclick}
>
	{@render children()}
</svelte:element>
