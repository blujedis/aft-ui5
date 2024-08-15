<script context="module" lang="ts">
	import type { HTMLTag } from '$lib/types.js';
	import type { Snippet } from 'svelte';
	import { type ButtonProps } from './Button.svelte';
	import { ensureArray } from '$lib/utils/array.js';

	export type ButtonGroupProps<Tag extends HTMLTag> = Omit<
		ButtonProps<Tag>,
		'selectable' | 'variant' | 'children' | 'selected'
	> & {
		multiple?: boolean;
		selected?: any;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined' | 'text';
		children: Snippet<[Omit<ButtonProps<Tag>, 'children'>, any[]]>;
	}; //& ElementProps<Tag>;
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	let { multiple, selected: initSelected, children, ...rest }: ButtonGroupProps<Tag> = $props();
	let selected = $state(ensureArray(initSelected)) as any[];
	function handleSelect(e: Event & { target: HTMLElement & { value: any } }) {
		const value = e.target.value;
		if (multiple) {
			if (!selected.includes(value)) selected.push(value);
			else selected.splice(selected.indexOf(value), 1);
		} else {
			if (!selected.includes(value)) selected = [value];
			else selected = [];
		}
	}
</script>

<div class="flex -ml-1 divide-x divide-frame-300 dark:divide-frame-950">
	{@render children(
		{
			...rest,
			selectable: true,
			onclick: handleSelect
		} as unknown as ButtonProps<Tag>,
		selected
	)}
</div>
