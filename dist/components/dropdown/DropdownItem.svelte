<script module lang="ts">
	import { buildClass } from '../../theme/build.svelte.js';
	import { FieldPaddingX, FieldPaddingY } from '../../theme/constants.js';
	import {
		BgColorDropSelected,
		BgColorSoftDropSelected,
		type Size,
		type ThemeColor
	} from '../../theme/types.js';
	import { type ElementProps } from '../../types.js';
	import { getBrowser } from '../../utils/dom.js';
	import { getContext, onMount, type Snippet } from 'svelte';
	import type { DropdownContext, DropdownProps } from './Dropdown.svelte';

	export interface DropdownItemProps {
		disabled?: boolean;
		href?: string;
		selected?: boolean;
		size?: Size;
		theme?: ThemeColor;
		value?: any;
		variant?: DropdownProps['variant'];
		children: Snippet;
	}
</script>

<script lang="ts">
	import t from '../../theme/theme.svelte.js';
	import { optevent } from '../../utils/helpers.js';

	const context = getContext('Dropdown') as DropdownContext;

	let {
		disabled,
		href,
		selected = $bindable(),
		size = context?.size,
		theme = $bindable(context?.theme),
		value,
		variant = context?.variant,
		children,
		...rest
	}: DropdownItemProps & ElementProps<'button' & 'a'> = $props();

	let el: HTMLAnchorElement | HTMLButtonElement | undefined;
	let parent = $state(false);
	const isSafari = $derived(getBrowser() === 'safari');

	const classes = $derived(
		buildClass({
			prepend: [
				`dropdown-item dropdown-item-${theme || 'default'}`,
				selected && 'dropdown-item-selected'
			],
			classes: [
				`flex items-center w-full space-x-3 text-left outline-none
				focus:[&:not(.dropdown-item-selected)]:bg-frame-200 
				dark:focus:[&:not(.dropdown-item-selected)]:bg-frame-800
				hover:bg-frame-200 dark:hover:bg-frame-800
				`,
				// href && 'block',
				// !href && 'flex items-center space-x-3',
				size && FieldPaddingX[size],
				size && FieldPaddingY[size],
				(variant === 'filled' || typeof variant === 'undefined') &&
					theme &&
					BgColorDropSelected[theme],
				variant === 'soft' && theme && BgColorSoftDropSelected[theme],
				!variant && !theme && 'aria-selected:bg-frame-300 dark:aria-selected:bg-frame-800',
				variant !== 'soft' &&
					theme &&
					theme !== 'light' &&
					theme !== 'unstyled' &&
					'aria-selected:text-light',
				'focus:aria-selected:brightness-105',
				disabled && t.options.disabled,
				rest.class
			]
		})
	);

	function clickFocus(e: Event & { target?: EventTarget | null }) {
		const target = e.target as HTMLElement;
		target?.focus();
	}

	function handleClick(e: Event) {
		if (context?.selectable) {
			context?.setSelected(value);
			context?.setFocus();
		}
	}

	onMount(() => {
		if (!href && isSafari) el?.addEventListener('click', clickFocus);
		setTimeout(() => {
			parent = el?.classList.contains('popover-trigger') || false;
			// Parent elements cannot be selectable
			if (parent && selected) {
				console.warn(
					`Dropdown Item cannot be both selectable and a parent. Selected has been set to false`
				);
				selected = false;
			}
		});
		return () => {
			if (!href && isSafari) !href && isSafari && el?.removeEventListener('click', clickFocus);
		};
	});
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	role="option"
	tabindex="-1"
	{...rest}
	type={!href ? 'button' : undefined}
	bind:this={el}
	{href}
	class={classes}
	aria-selected={selected}
	{disabled}
	aria-disabled={disabled}
	onclick={optevent(!href, handleClick)}
>
	{@render children()}
</svelte:element>
