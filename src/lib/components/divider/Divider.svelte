<script context="module" lang="ts">
	import {
		BgColor,
		DivideAfterColor,
		DivideBeforeColor,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { Snippet } from 'svelte';

	export interface DividerProps {
		vertical?: boolean;
		content?: 'start' | 'end' | 'center' | 'none';
		theme?: ThemeColor;
		children?: Snippet;
	}
</script>

<script lang="ts">
	let {
		vertical,
		content = 'none',
		theme = $bindable(),
		children,
		...rest
	}: DividerProps & ElementProps<'div'> = $props();

	const beforeHClasses = `before:h-[0.01em] before:w-full before:flex-1 before:content-['']`;
	const afterHClasses = `after:h-[0.01em] after:w-full after:flex-1 after:content-['']`;
	const beforeVClasses = `before:h-full before:w-[0.01em] before:content-[''] before:flex-1`;
	const afterVClasses = `after:h-full after:w-[0.01em] after:content-[''] after:flex-1 `;

	const dividerClasses = $derived(
		clsxm(
			'flex items-center self-stretch whitespace-nowrap',
			!content.startsWith('n') && !vertical && `flex-row my-y h-4 [&:not(:empty)]:gap-4`,
			!content.startsWith('n') && vertical && `flex-col h-full mx-4 my-0 [&:not(:empty)]:gap-3`,
			!content.startsWith('n') && !vertical && beforeHClasses + ' ' + afterHClasses,
			!content.startsWith('n') && vertical && beforeVClasses + ' ' + afterVClasses,

			content.startsWith('n') &&
				!vertical &&
				`my-0 flex-row h-[0.01em] bg-frame-200 dark:bg-frame-600`,

			content.startsWith('n') &&
				vertical &&
				'flex-col h-full mx-4 my-0 w-[0.01em] bg-frame-200 dark:bg-frame-600',

			content.startsWith('s') && !vertical && afterHClasses,
			content.startsWith('e') && !vertical && beforeHClasses,
			content.startsWith('s') && vertical && afterVClasses + ' [&:not(:empty)]:gap-0 after:mt-3',
			content.startsWith('e') && vertical && beforeVClasses + ' [&:not(:empty)]:gap-0 before:mb-3',
			!content.startsWith('n') && theme && DivideBeforeColor[theme],
			!content.startsWith('n') && theme && DivideAfterColor[theme],
			content.startsWith('n') && theme && BgColor[theme],
			!theme &&
				!content.startsWith('n') &&
				`before:bg-frame-200 dark:before:bg-frame-600 after:bg-frame-200 dark:after:bg-frame-600`,
			vertical && 'min-h-max',
			rest.class
		)
	);
</script>

<div {...rest} class={dividerClasses}>
	{#if children && content !== 'none'}
		<div class="mb-1">
			{@render children()}
		</div>
	{/if}
</div>
