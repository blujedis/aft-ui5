<script context="module" lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import Popper, { type PopperProps } from '../popper/Popper.svelte';
	import { buildClass, type ConfigProps } from '$lib/theme/build.svelte.js';
	import { FieldFontSize } from '$lib/theme/constants.js';
	import { type FocusType, type Size, type ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';

	export type DropdownProps = Omit<PopperProps, 'children' | 'arrow' | 'arrowClass'> & {
		elevation?: ConfigProps['elevation'];
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		rounded?: ConfigProps['rounded'];
		size?: Size;
		theme?: ThemeColor;
		header?: Snippet<[{ close: (e?: Event) => any }]>;
		children: Snippet<[{ close: (e?: Event) => any }]>;
		footer?: Snippet<[{ close: (e?: Event) => any }]>;
	};
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';

	let p: DropdownProps;

	let {
		elevation = 'lg',
		event = 'focus',
		focusType = 'visible',
		focusTheme,
		offset = 4,
		placement = 'bottom-start',
		rounded,
		size = 'md',
		theme,
		visible = $bindable(),
		header,
		children,
		footer,
		...rest
	}: DropdownProps & ElementProps<'div'> = $props();

	setContext('Dropdown', { focusType, focusTheme, size, theme, rounded });

	const classes = $derived(
		buildClass({
			prepend: [`dropdown dropdown-${theme || 'default'}`],
			classes: [size && FieldFontSize[size], t.options.card, 'z-40 relative', rest.class],
			elevation,
			focusType,
			focusTheme: focusTheme || theme,
			rounded
		})
	);

	function handleClose() {
		visible = false;
	}
</script>

<Popper {...rest} {event} {placement} {offset} class={classes} bind:visible>
	{#if header}
		{@render header({ close: handleClose })}
	{/if}

	<ul class="py-1 overflow-hidden">
		{@render children({ close: handleClose })}
	</ul>

	{#if footer}
		{@render footer({ close: handleClose })}
	{/if}
</Popper>
