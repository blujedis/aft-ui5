<script context="module" lang="ts">
	import type { Snippet } from 'svelte';
	import Popper, { type PopperProps } from '../popper/Popper.svelte';
	import { buildClass, type ConfigProps } from '$lib/theme/build.svelte.js';
	import { Border, FieldFontSize } from '$lib/theme/constants.js';
	import { type Size, type ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';

	export type PopoverProps = Omit<PopperProps, 'children'> & {
		elevation?: ConfigProps['elevation'];
		rounded?: ConfigProps['rounded'];
		size?: Size;
		theme?: ThemeColor;
		title?: string;
		unpadded?: boolean;
		children: Snippet<[{ close: (e?: Event) => any }]>;
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';

	let {
		arrow = true,
		elevation = 'lg',
		event = 'click',
		unpadded,
		rounded,
		size = 'md',
		title,
		visible = $bindable(),
		children,
		...rest
	}: PopoverProps & ElementProps<'div'> = $props();

	const classes = $derived(
		buildClass({
			prepend: [`popover`],
			classes: [
				!unpadded && 'p-4',
				size && FieldFontSize[size],
				t.options.card,
				t.options.border,
				'border z-40 relative',
				rest.class
			],
			rounded,
			elevation
		})
	);

	const titleClasses = $derived(
		clsxm(
			'popover-title',
			'font-medium bg-frame-100 dark:bg-frame-800 text-dark dark:text-light px-4 py-2 rounded-t-lg text-center'
		)
	);

	const arrowClasses = $derived(clsxm('tooltip-arrow', 'border', Border['xs'], rest.arrowClass));

	function handleClose() {
		visible = false;
	}
</script>

<Popper {...rest} {arrow} {event} class={classes} arrowClass={arrowClasses} bind:visible>
	{#if title}
		<div class={titleClasses}>{title}</div>
	{/if}
	{@render children({ close: handleClose })}
</Popper>
