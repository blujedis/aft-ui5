<script context="module" lang="ts">
	import type { Snippet } from 'svelte';

	export interface SwitchProps {
		checked?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		shadow?: ShadowSize | false;
		size?: Size;
		sronly?: string;
		theme?: ThemeColor;
		children?: Snippet;
	}

	export const SwitchButtonSize = {
		unstyled: '',
		xs: 'h-5 w-[22px]',
		sm: 'h-5 w-[34px]',
		md: 'h-5 w-10',
		lg: 'h-5 w-12',
		xl: 'h-5 w-14',
		xl2: 'h-5 w-16'
	};

	const SwitchSliderSize = {
		unstyled: '',
		xs: 'h-3 w-full',
		sm: 'h-3.5 w-full',
		md: 'h-4 w-full',
		lg: 'h-5 w-full',
		xl: 'h-6 w-full',
		xl2: 'h-7 w-full'
	};

	const SwitchHandleSize = {
		unstyled: '',
		xs: 'h-3 w-3 -translate-x-1 group-aria-checked:translate-x-3.5',
		sm: 'h-4 w-4 translate-x-0 group-aria-checked:translate-x-4',
		md: 'h-5 w-5 translate-x-0 group-aria-checked:translate-x-5',
		lg: 'h-6 w-6 translate-x-0 group-aria-checked:translate-x-6',
		xl: 'h-7 w-7 translate-x-0 group-aria-checked:translate-x-7',
		xl2: 'h-8 w-8 translate-x-0 group-aria-checked:translate-x-8'
	};
</script>

<script lang="ts">
	import { buildClass, type ConfigProps } from '$lib/theme/build.svelte.js';
	import type { ElementProps } from '$lib/types.js';
	import { BgColorChecked, type FocusType, type ShadowSize, type Size, type ThemeColor } from '$lib/theme/types.js';
	import { clsxm } from '$lib/utils/string.js';

	let {
		checked = $bindable(),
		disabled,
		focusOffset,
		focusTheme,
		focusType,
		shadow,
		size = 'sm',
		sronly = 'switch',
		theme = $bindable(),
		children,
		...rest
	}: SwitchProps & Omit<ElementProps<'input'>, 'class'> = $props();

	const labelClasses = $derived(
		buildClass({
			prepend: ['switch-container'],
			classes: [
				'group relative inline-flex flex-shrink-0 cursor-pointer items-center justify-center rounded-full',
				disabled && 'pointer-events-none',
				size && SwitchButtonSize[size]
			],
			disabled,
			focusType,
			focusTheme: focusTheme || theme,
			focusOffset,
			shadow
		})
	);

	const sliderClasses = $derived(
		clsxm(
			'switch-slider pointer-events-none absolute mx-auto rounded-full transition-colors duration-200 ease-in-out ring-0 bg-frame-200',
			theme && BgColorChecked[theme],
			theme === 'dark' && 'aria-checked:bg-frame-600 aria-checked:dark:bg-frame-700', // override dark
			!theme && 'aria-checked:bg-frame-500',
			size && SwitchSliderSize[size]
		)
	);

	const handleClasses = $derived(
		clsxm(
			'switch-handle pointer-events-none absolute left-0 inline-block transform rounded-full border-0 shadow ring-2 ring-offset-0 transition-transform duration-200 ease-in-out bg-white ring-frame-400 dark:ring-frame-500',
			size && SwitchHandleSize[size],
			['xl', 'xl2'].includes(size) && 'ring'
		)
	);
</script>

<!-- <ConditionalElement as="label" condition={!!children}> -->
<!-- <span class="switch-wrapper flickerless inline-flex items-center space-x-2">
	{#if children}
		<span>
			{@render children()}
		</span>
	{/if} -->

<button
	role="switch"
	tabindex="0"
	class={labelClasses}
	aria-checked={checked}
	{disabled}
	onclick={() => (checked = !checked)}
>
	<span class="sr-only">{sronly}</span>
	<span
		aria-hidden="true"
		class="switch-backdrop pointer-events-none absolute h-full w-full rounded-md"
	></span>
	<span aria-hidden="true" class={sliderClasses} aria-checked={checked}></span>
	<span aria-hidden="true" class={handleClasses}></span>

	<input {...rest} type="checkbox" bind:checked class="sr-only" {disabled} />
</button>

<!-- </span> -->

<!-- </ConditionalElement> -->

<style>
	.flickerless {
		perspective: 1000;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transform: translateZ(0.1px);
		transform: translateZ(0.1px); /* needs an actual value */
	}
</style>
