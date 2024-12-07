<script module lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import {
		FillColor,
		type FocusType,
		type Size,
		type ThemeColor,
		type RoundedSize,
		type ShadowSize
	} from '$lib/theme/types.js';

	export interface CheckboxProps {
		disabled?: boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		group?: any;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
	}

	const CheckboxSize = {
		unstyled: '',
		xs: 'h-2.5 w-2.5',
		sm: 'h-3 w-3',
		md: 'h-4 w-4',
		lg: 'h-5 w-5',
		xl: 'h-6 w-6',
		xl2: 'h-7 w-7'
	};
</script>

<script lang="ts">
	import { buildClass } from '$lib/theme/build.svelte.js';

	let {
		disabled,
		focusType = 'focus',
		focusTheme,
		group = $bindable(),
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		...rest
	}: CheckboxProps & Omit<ElementProps<'input'>, 'size'> = $props();

	const classes = $derived(
		buildClass({
			classes: [
				`radio radio-${theme} appearance-none focus:ring-0 focus:ring-offset-0 bg-transparent border border-frame-400 dark:border-frame-700 [&:not(:checked)]:bg-frame-100 dark:[&:not(:checked)]:bg-frame-800/50 form-checkbox`,
				!theme && 'text-frame-500 dark:text-frame-500',
				size && CheckboxSize[size],
				theme && FillColor[theme],
				rest.class
			],
			focusType,
			focusTheme: focusTheme || theme,
			rounded,
			shadow
		})
	);

	function handleChange({ target }: Event) {
		const { value, checked } = target as HTMLInputElement;
		if (checked) group.push(value);
		else group = group.filter((v: any) => v !== value);
	}
</script>

{#if !Array.isArray(group)}
	<input {...rest} bind:group class={classes} type="checkbox" />
{:else}
	<input
		{...rest}
		class={classes}
		checked={group.includes(rest.value)}
		onchange={handleChange}
		type="checkbox"
	/>
{/if}
