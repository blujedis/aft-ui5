<script module lang="ts">
	import type { DropShadowSize, RoundedSize, Size, ThemeColor } from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';

	export interface LabelProps {
		inline?: boolean;
		rounded?: RoundedSize | false;
		dropShadow?: DropShadowSize | false;
		justify?: Exclude<keyof typeof JustifyContent, 'stretch'>;
		reverse?: boolean;
		size?: Size;
		theme?: ThemeColor;
		visible?: boolean;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { FontColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldFontSize, JustifyContent } from '$lib/theme/constants.js';

	let {
		dropShadow,
		justify,
		inline,
		reverse,
		rounded,
		size = 'md',
		theme = $bindable(),
		visible = true,
		children,
		...rest
	}: LabelProps & ElementProps<'label'> = $props();

	const classes = $derived(
		buildClass({
			prepend: [`label label-${theme || 'default'}`],
			classes: [
				size && FieldFontSize[size],
				theme && FontColor[theme],
				inline && 'flex flex-row items-center space-x-2',
				inline && reverse && 'space-x-reverse flex-row-reverse',
				!inline && 'space-y-2',
				inline && 'space-x-3',
				rest.class
			],
			rounded,
			dropShadow,
			justify
		})
	);
</script>

{#if visible}
	<label {...rest} class={classes}>
		{@render children()}
	</label>
{:else}
	{@render children()}
{/if}
