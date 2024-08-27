<script context="module" lang="ts">
	import { DivideAfterColor, DivideBeforeColor, type ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { Snippet } from 'svelte';

	export interface DividerProps {
		vertical?: boolean;
		position?: 'start' | 'end' | 'center';
		theme?: ThemeColor;
		children: Snippet;
	}
</script>

<script lang="ts">
	let {
		vertical,
		position = 'center',
		theme,
		children,
		...rest
	}: DividerProps & ElementProps<'div'> = $props();

	const beforeHClasses = `before:h-px before:w-full before:flex-1 before:content-['']`;
	const afterHClasses = `after:h-px after:w-full after:flex-1 after:content-['']`;
	const beforeVClasses = `before:h-full before:w-px before:content-[''] before:flex-1`;
	const afterVClasses = `after:h-full after:w-px after:content-[''] after:flex-1 `;

	const dividerClasses = $derived(
		clsxm(
			'flex items-center self-stretch whitespace-nowrap',
			!vertical && `flex-row my-y h-4  [&:not(:empty)]:gap-4`,
			vertical && `flex-col h-full mx-4 my-0 [&:not(:empty)]:gap-3`,
			position.startsWith('c') && !vertical && beforeHClasses + ' ' + afterHClasses,
			position.startsWith('c') && vertical && beforeVClasses + ' ' + afterVClasses,
			position.startsWith('s') && !vertical && afterHClasses,
			position.startsWith('e') && !vertical && beforeHClasses,
			position.startsWith('s') && vertical && afterVClasses + ' [&:not(:empty)]:gap-0 after:mt-3',
			position.startsWith('e') && vertical && beforeVClasses + ' [&:not(:empty)]:gap-0 before:mb-3',
			DivideBeforeColor[theme || 'unstyled'],
			DivideAfterColor[theme || 'unstyled'],
			!theme &&
				`before:bg-frame-200 dark:before:bg-frame-600 after:bg-frame-200 dark:after:bg-frame-600`,
			vertical && 'min-h-max w-auto',
			rest.class
		)
	);
</script>

<div {...rest} class={dividerClasses}>
	<div class="mb-1">
		{@render children()}
	</div>
</div>
