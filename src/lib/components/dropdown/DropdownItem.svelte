<script context="module" lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldPaddingX, FieldPaddingY } from '$lib/theme/constants.js';
	import {
		BgColorDropSelected,
		type FocusType,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import { type ElementProps } from '$lib/types.js';
	import { getBrowser } from '$lib/utils/dom.js';
	import { getContext, onMount, type Snippet } from 'svelte';

	export interface DropdownItemProps {
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		href?: string;
		selected?: boolean;
		selectedTheme?: ThemeColor;
		size?: Size;
		theme?: ThemeColor;
		children: Snippet<[{ selected?: boolean; focus?: boolean }]>;
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
		focusType = context.focusType,
		focusTheme = context.focusTheme,
		href,
		selected,
		selectedTheme,
		size = context.size,
		theme = context.theme,
		children,
		...rest
	}: DropdownItemProps & ElementProps<'button' & 'a'> = $props();

	let el: HTMLAnchorElement | HTMLButtonElement | undefined;

	const isSafari = $derived(getBrowser() === 'safari');

	const classes = $derived(
		buildClass({
			prepend: [`dropdown-item dropdown-item-${theme || 'default'}`],
			classes: [
				`pointer-events-auto w-full text-left outline-none`,
				'hover:bg-frame-200 dark:hover:bg-frame-800',
				href && 'block',
				!href && 'flex items-center justify-between',
				size && FieldPaddingX[size],
				size && FieldPaddingY[size],
				theme && BgColorDropSelected[selectedTheme || theme],
				'aria-selected:text-light',
				rest.class
			],
			focusType,
			focusTheme: focusTheme || theme
		})
	);

	function clickFocus(e: Event & { target?: EventTarget | null }) {
		const target = e.target as HTMLElement;
		target?.focus();
	}

	onMount(() => {
		if (!href && isSafari) el?.addEventListener('click', clickFocus);
		return () => !href && isSafari && el?.removeEventListener('click', clickFocus);
	});
</script>

<li class="pointer-events-none outline-none">
	<svelte:element
		this={href ? 'a' : 'button'}
		{...rest}
		bind:this={el}
		class={classes}
		aria-selected={selected}
	>
		{@render children({ selected, focus: false })}
	</svelte:element>
</li>
