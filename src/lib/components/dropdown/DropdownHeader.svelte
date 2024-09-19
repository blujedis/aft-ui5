<script module lang="ts">
	import { FieldPaddingX, FieldPaddingY } from '$lib/theme/constants.js';
	import type { FocusType, Size, ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import { getContext, type Snippet } from 'svelte';
	import type { DropdownContext } from './Dropdown.svelte';

	export interface DropdownSectionProps {
		size?: Size;
		children: Snippet;
	}
</script>

<script lang="ts">
	const context = getContext('Dropdown') as DropdownContext;
	let {
		size = context.size,
		children,
		...rest
	}: DropdownSectionProps & ElementProps<'div'> = $props();

	const classes = $derived(
		clsxm(
			`dropdown-header font-medium flex items-center justify-center`,
			'bg-frame-200 dark:bg-frame-800 shadow-sm dark:shadow-sm',
			size && FieldPaddingX[size],
			size && FieldPaddingY[size],
			rest.class
		)
	);
</script>

<div {...rest} class={classes}>
	{@render children()}
</div>
