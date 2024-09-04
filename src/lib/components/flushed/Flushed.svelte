<script context="module" lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';
	import {
		BorderColor,
		BorderColorGroupHover,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';

	export interface FlushedProps {
		disabled?: boolean;
		focusTheme?: ThemeColor;
		group?: boolean;
		peer?: boolean;
		hoverable?: boolean;
		selected?: boolean;
		theme?: ThemeColor;
		children: Snippet;
	}
</script>

<script lang="ts">
	let { disabled, focusTheme, group, hoverable, peer, selected, theme, children }: FlushedProps =
		$props();

	const classes = $derived(
		buildClass({
			prepend: [`flushed flushed-${theme}`],
			classes: [
				'absolute inset-x-0 bottom-0 border-x-0 border-b-0',
				hoverable && 'group-hover:border',
				peer && 'peer-focus:border-t-2',
				group && 'group-focus-within:border-t-2',
				selected && 'aria-checked:border-t-2 aria-selected:border-t-2 aria-expanded:border-t-2',
				selected !== false && 'border-t',
				theme && BorderColor[theme],
				group && hoverable && theme && BorderColorGroupHover[theme],
				!theme && 'border-frame-200 dark:border-frame-600'
			],
			focusType: peer ? 'peer' : 'group',
			focusTheme: focusTheme || theme
		})
	);
</script>

{#if !disabled}
	<div tabindex="-1" class="flushed-wrapper relative inline-flex group">
		{@render children()}
		<div class={classes} aria-hidden="true"></div>
	</div>
{/if}
