<script context="module" lang="ts">
	import type { HTMLTag } from '$lib/types.js';
	import { setContext, type Snippet } from 'svelte';
	import { type ButtonProps } from './Button.svelte';
	import { DivideColor } from '$lib/theme/types.js';
	import { clsxm } from '$lib/utils/string.js';

	export type ButtonGroupProps<Tag extends HTMLTag> = Omit<
		ButtonProps<Tag>,
		'variant' | 'children' | 'selected'
	> & {
		class?: string | null;
		multiple?: boolean;
		selected?: any;
		variant?: 'unstyled' | 'filled' | 'soft' | 'outlined' | 'text';
		children: Snippet<[Omit<ButtonProps<Tag>, 'children'>]>;
	};
</script>

<script lang="ts" generics="Tag extends HTMLTag = 'button'">
	let { multiple, selected = $bindable(), children, ...rest }: ButtonGroupProps<Tag> = $props();

	setContext('ButtonGroup', {
		rest
	});

	const classes = $derived(
		clsxm(
			'flex',
			rest.variant !== 'outlined' && 'divide-x',
			(rest.variant === 'soft' || rest.variant === 'filled' || !rest.variant) &&
				'divide-[color:rgb(var(--bg-light))] dark:divide-[color:rgb(var(--bg-dark))]',
			rest.variant === 'text' && DivideColor[rest.theme || 'unstyled'],
			rest.rounded && '[&>:not(:first-child):not(:last-child)]:rounded-none',
			'focus:z-0'
		)
	);

	function handleSelect(e: Event & { target: HTMLElement & { value: any } }) {
		const value = e.target.value;
		if (multiple) {
			if (!selected.includes(value)) selected = [...selected, value];
			else selected = selected.filter((v: any) => v !== value);
		} else {
			if (!selected.includes(value)) selected = [value];
			else selected = [];
		}
	}

	function setZindex(node: HTMLDivElement) {
		const nodes = [...node.children];
		nodes.forEach((n, i) => {
			const node = n as HTMLElement;
			node.style.zIndex = i + '';
		});
	}
</script>

<div role="radiogroup" use:setZindex class={classes}>
	{@render children({
		...rest,
		onclick: handleSelect
	} as unknown as ButtonProps<Tag>)}
</div>
