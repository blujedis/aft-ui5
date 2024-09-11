<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { DropdownSectionProps } from './DropdownSection.svelte';
</script>

<script lang="ts">
	import DropdownSection from './DropdownSection.svelte';
	let { ...rest }: DropdownSectionProps & ElementProps<'div'> = $props();
	const classes = $derived(
		clsxm(
			`dropdown-header font-medium`,
			'bg-frame-200 dark:bg-frame-800 border-b border-frame-300 dark:border-frame-600',
			rest.class
		)
	);
</script>

<DropdownSection {...rest} class={classes} />
