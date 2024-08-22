<script context="module" lang="ts">
	import type { ConfigProps } from '../Base.svelte';
	import type { ThemeColor, Size, FocusType } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';

	export type RangeProps = {
		animate?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: keyof typeof Size;
		theme?: ThemeColor;
	} & ProgressTweenedOptions;

	const RangeTrackSize = {
		unstyled: '',
		xs: 'h-0.5',
		sm: 'h-1',
		md: 'h-2',
		lg: 'h-3',
		xl: 'h-4',
		xl2: 'h-5'
	};

	const RangeThumbSize = {
		unstyled: '',
		xs: '8px',
		sm: '10px',
		md: '14px',
		lg: '20px',
		xl: '28px',
		xl2: '34px'
	};

	const RangeBorderSize = {
		unstyled: '',
		xs: '.1rem',
		sm: '.1rem',
		md: '.1rem',
		lg: '.15rem',
		xl: '.2rem',
		xl2: '.2rem'
	};
</script>

<script lang="ts">
	import { clsxm, joinStyles, toColorVar } from '$lib/utils/string.js';
	import type { ProgressTweenedOptions } from '../progress/ProgressBar.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let {
		animate = true,
		delay,
		duration = 400,
		easing = cubicOut,
		interpolate,
		focusType,
		focusTheme,
		min = 0,
		max = 100,
		rounded,
		shadow,
		size = 'md',
		theme = 'light',
		value = $bindable(),
		...rest
	}: RangeProps & Omit<ElementProps<'input'>, 'size'> = $props();

	let input = $state() as HTMLInputElement;

	if (typeof min === 'undefined' || typeof max === 'undefined')
		throw new Error(
			`Range requires a value for both "min" and "max" or the component will NOT display properly.`
		);

	const store = tweened(value, {
		delay,
		duration,
		easing,
		interpolate
	});

	const tvalue = $derived.by(() => {
		if (!animate) return value;
		store.set(value);
		handleInputChange();
		return $store;
	});

	const styles = $derived(
		joinStyles(
			[
				toColorVar('--track-background-color', 'frame-100'),
				toColorVar('--track-background-color-dark', 'frame-600'),
				!['light', 'dark', 'white'].includes(theme) &&
					toColorVar('--thumb-background-color', `${theme}-300`),
				!['light', 'dark', 'white'].includes(theme) &&
					toColorVar('--track-accent-color', `${theme}-500`),
				!['light', 'dark', 'white'].includes(theme) &&
					toColorVar('--thumb-border-color', `${theme}-500`),
				theme === 'light' && toColorVar('--thumb-background-color', `frame-100`),
				theme === 'light' && toColorVar('--track-accent-color', `frame-400`),
				theme === 'light' && toColorVar('--thumb-border-color', `frame-400`),
				theme === 'dark' && toColorVar('--thumb-background-color', `frame-400`),
				theme === 'dark' && toColorVar('--track-accent-color', `frame-900`),
				theme === 'dark' && toColorVar('--thumb-border-color', `frame-900`),

				// theme === 'white' && toColorVar('--track-background-color', 'frame-100'),
				theme === 'white' && toColorVar('--thumb-background-color', `frame-300`),
				theme === 'white' && '--track-accent-color:#fff;',
				theme === 'white' && '--thumb-border-color:#fff;',

				size && `--thumb-size: ${RangeThumbSize[size]};`,
				size && `--thumb-border-width: ${RangeBorderSize[size]};`
			],
			rest.style as string
		)
	);

	const classes = $derived(
		clsxm(`range range-${theme} appearance-none`, size && RangeTrackSize[size], rest.class)
	);

	function handleInputChange(e?: Event & { currentTarget: HTMLInputElement }) {
		const target = e?.currentTarget || input;
		if (!target) return;
		const n = parseFloat(target.min);
		const x = parseFloat(target.max);
		const val = parseFloat(target.value);
		const result = ((val - n) * 100) / (x - n) + '% 100%';
		target.style.backgroundSize = result;
	}
	$effect(() => {
		handleInputChange();
	});
</script>

{#if animate}
	<input
		bind:this={input}
		{...rest}
		{min}
		{max}
		value={tvalue}
		class={classes}
		style={styles}
		oninput={handleInputChange}
		type="range"
	/>
{:else}
	<input
		bind:this={input}
		{...rest}
		{min}
		{max}
		{value}
		class={classes}
		style={styles}
		oninput={handleInputChange}
		type="range"
	/>
{/if}

<style>
	/* we could detect dark mode and pass down a single var for track but you end up with 
	   listeners just to toggle this on off? using html.dark selector globally drawbacks but...*/
	:global(html.dark .range) {
		background-color: var(--track-background-color-dark) !important;
	}

	input[type='range'] {
		background-color: var(--track-background-color);
		background-image: linear-gradient(var(--track-accent-color), var(--track-accent-color));
		background-size: 0% 100%;
		background-repeat: no-repeat;
	}

	/* IMPORTANT If you attempt to combine the below styles together 
	they will not be applied. Each pseudo selecteor for the 
	thumb must be defined for each browser type. It'd be SUPER
	if this were better standardized wouldn't it??
	*/

	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		height: var(--thumb-size);
		width: var(--thumb-size);
		border: solid var(--thumb-border-color);
		border-width: var(--thumb-border-width);
		border-radius: 50%;
		background-color: var(--thumb-background-color);
	}

	input[type='range']:focus::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px 1px var(--thumb-background-color);
	}

	input[type='range']:focus::-moz-range-thumb {
		box-shadow: 0px 0px 0px 1px var(--thumb-background-color);
	}

	input[type='range']:focus::-ms-thumb {
		box-shadow: 0px 0px 0px 1px var(--thumb-background-color);
	}

	input[type='range']::-moz-range-thumb {
		appearance: none;
		height: var(--thumb-size);
		width: var(--thumb-size);
		border: solid var(--thumb-border-color);
		border-width: var(--thumb-border-width);
		border-radius: 50%;
		background: var(--thumb-background-color);
	}

	input[type='range']::-ms-thumb {
		appearance: none;
		height: var(--thumb-size);
		width: var(--thumb-size);
		border: solid var(--thumb-border-color);
		border-width: var(--thumb-border-width);
		border-radius: 50%;
		background: var(--thumb-background-color);
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		box-shadow: none;
		border: none;
		background: transparent;
		margin: 0 -2px;
	}

	input[type='range']::-moz-range-track {
		margin: 0 -2px;
	}
</style>
