<script module lang="ts">
	import { type ElementProps } from '../../types.js';
	import { setContext, type Snippet } from 'svelte';
	import { type Size } from '../../theme/types.js';

	export type StackProps = {
		size?: Size;
		vertical?: boolean;
		children: Snippet<[]>;
	} & ElementProps<'div'>;
</script>

<script lang="ts">
	import { buildClass } from '../../theme/build.svelte.js';
	let { size = 'md', vertical, children, ...rest }: StackProps = $props();

	setContext('Stack', true);

	const classes = $derived(
		buildClass({
			// padding should match ring size in Avatar component when stacked is enabled.
			classes: [
				`stack flex overflow-hidden isolate p-2`,
				!vertical && 'flex -space-x-2',
				vertical && 'flex-col -space-y-2',
				rest.class
			],
			fontSize: size
		})
	);
</script>

<div {...rest} class={classes}>
	{@render children()}
</div>
