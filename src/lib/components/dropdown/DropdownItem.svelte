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
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		href?: string;
		selected?: boolean;
		selectedTheme?: ThemeColor;
		size?: Size;
		theme?: ThemeColor;
		children: Snippet;
	}
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	const context = getContext('Dropdown') as {
		focusType: FocusType;
		focusTheme: ThemeColor;
		size: Size;
		theme: ThemeColor;
	};

	let {
		disabled,
		focusType = context.focusType,
		focusTheme = context.focusTheme,
		href,
		selected = $bindable(),
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
				`pointer-events-auto flex items-center w-full justify-between text-left outline-none`,
				'hover:bg-frame-200 dark:hover:bg-frame-800',
				href && 'block',
				!href && 'flex items-center justify-between',
				size && FieldPaddingX[size],
				size && FieldPaddingY[size],
				theme && BgColorDropSelected[selectedTheme || theme],
				disabled && t.options.disabled,
				'aria-selected:text-light aria-selected:pointer-events-none',
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
		return () => {
			if (!href && isSafari) !href && isSafari && el?.removeEventListener('click', clickFocus);
		};
	});
</script>

<li class="pointer-events-none outline-none">
	<svelte:element
		this={href ? 'a' : 'button'}
		tabindex="-1"
		{...rest}
		bind:this={el}
		class={classes}
		aria-selected={selected}
		{disabled}
		aria-disabled={disabled}
	>
		{@render children()}
	</svelte:element>
</li>
