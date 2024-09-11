<script context="module" lang="ts">
	import { FieldPaddingX, FieldPaddingY } from '$lib/theme/constants.js';
	import type { FocusType, Size, ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import { getContext, type Snippet } from 'svelte';

	export interface DropdownSectionProps {
		size?: Size;
		children: Snippet;
	}
</script>

<script lang="ts">
	const context = getContext('Dropdown') as {
		focusType: FocusType;
		focusTheme: ThemeColor;
		size: Size;
		theme: ThemeColor;
	};
	let {
		size = context.size,
		children,
		...rest
	}: DropdownSectionProps & ElementProps<'div'> = $props();
	const classes = $derived(
		clsxm(
			`dropdown-section flex items-center justify-center`,
			size && FieldPaddingX[size],
			size && FieldPaddingY[size],
			rest.class
		)
	);
</script>

<div {...rest} class={classes}>
	{@render children()}
</div>
