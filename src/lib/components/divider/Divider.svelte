<script context="module" lang="ts">
	import { DivideAfterColor, DivideBeforeColor, type ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';
	import type { Snippet } from 'svelte';

	export interface DividerProps {
		direction?: 'horizontal' | 'vertical';
		position?: 'start' | 'end' | 'center';
		theme?: ThemeColor;
		children: Snippet;
	}
</script>

<script lang="ts">
	let {
		direction = 'horizontal',
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
			direction.startsWith('h') && `flex-row my-y h-4  [&:not(:empty)]:gap-4`,
			direction.startsWith('v') && `flex-col h-full mx-4 my-0 [&:not(:empty)]:gap-3`,
			position.startsWith('c') && direction.startsWith('h') && beforeHClasses + ' ' + afterHClasses,
			position.startsWith('c') && direction.startsWith('v') && beforeVClasses + ' ' + afterVClasses,
			position.startsWith('s') && direction.startsWith('h') && afterHClasses,
			position.startsWith('e') && direction.startsWith('h') && beforeHClasses,
			position.startsWith('s') &&
				direction.startsWith('v') &&
				afterVClasses + ' [&:not(:empty)]:gap-0 after:mt-3',
			position.startsWith('e') &&
				direction.startsWith('v') &&
				beforeVClasses + ' [&:not(:empty)]:gap-0 before:mb-3',
			DivideBeforeColor[theme || 'unstyled'],
			DivideAfterColor[theme || 'unstyled'],
			!theme &&
				`before:bg-frame-200 dark:before:bg-frame-600 after:bg-frame-200 dark:after:bg-frame-600`,
			rest.class
		)
	);
</script>

<div {...rest} class={dividerClasses}>
	<div class="mb-1">
		{@render children()}
	</div>
</div>
