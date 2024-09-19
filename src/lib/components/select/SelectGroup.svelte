<script module lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	export interface SelectGroupProps {
		disabled?: boolean;
		label: string;
		children: Snippet;
	}
</script>

<script lang="ts">
	import t from '$lib/theme/theme.svelte.js';
	import { buildClass } from '$lib/theme/build.svelte.js';

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
