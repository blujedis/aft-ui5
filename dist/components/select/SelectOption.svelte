<script module lang="ts">
	import type { ElementProps } from '../../types.js';
	import type { Snippet } from 'svelte';

	export interface SelectOptionProps {
		disabled?: boolean | null;
		placeholder?: boolean | null; // shortcut for selected and disabled.
		selected?: boolean | null;
		size?: Size;
		theme?: ThemeColor;
		value: any;
		children: Snippet;
	}
</script>

<script lang="ts">
	import t from '../../theme/theme.svelte.js';
	import { buildClass } from '../../theme/build.svelte.js';
	import type { Size, ThemeColor } from '../../theme/types.js';
	import { FieldPaddingX, FieldPaddingY } from '../../theme/constants.js';

	let {
		disabled,
		placeholder,
		selected,
		size,
		theme = $bindable(),
		value,
		children,
		...rest
	}: SelectOptionProps & Omit<ElementProps<'option'>, 'placeholder'> = $props();

	const classes = $derived(
		buildClass({
			prepend: [`select-option`],
			classes: [
				// size && FieldFontSize[size],
				size && FieldPaddingX[size],
				size && FieldPaddingY[size],
				disabled && !placeholder && t.options.disabled,
				'[&:checked]:bg-transparent',
				rest.class
			]
		})
	);
</script>

<option
	{...rest}
	class={classes}
	selected={selected || placeholder}
	disabled={disabled || placeholder}
	{value}
>
	{@render children()}
</option>
