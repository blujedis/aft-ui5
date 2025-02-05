<script module lang="ts">
	import type { ElementProps } from '../../types.js';
	import type { Snippet } from 'svelte';

	export interface SelectGroupProps {
		disabled?: boolean;
		label: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import t from '../../theme/theme.svelte.js';
	import { buildClass } from '../../theme/build.svelte.js';

	let { disabled, label, children, ...rest }: SelectGroupProps & ElementProps<'optgroup'> =
		$props();

	const classes = $derived(
		buildClass({
			prepend: [`select-group`],
			classes: [disabled && t.options.disabled, rest.class]
		})
	);
</script>

<optgroup {...rest} class={classes} {label}>
	{@render children()}
</optgroup>
