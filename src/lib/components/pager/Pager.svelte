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

	export type PagerVariant = 'unstyled' | 'filled' | 'soft' | 'text';

	export interface PagerContext {
		rounded: RoundedSize;
		size: Size;
		theme: ThemeColor;
		variant: PagerVariant;
	}

	export type PagerProps = {
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

	let {
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

	setContext('Pager', {
		rounded,
		size,
		theme,
		variant
	} as PagerContext);

	const classes = $derived(
		clsxm(
			`pager pager-variant-${variant || 'default'} pager-theme-${theme || 'default'}`,
			variant !== 'text' && 'inline-flex items-center isolate -space-x-px',

			(['filled', 'soft'].includes(variant || '') || !variant) && theme && RingColor[theme],
			(['filled', 'soft'].includes(variant || '') || !variant) && t.options.divide,

			variant === 'text' && 'border-t isolate inline-flex',
			variant === 'text' && t.options.border,

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
</nav>
