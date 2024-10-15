<script module lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import {
		type FocusType,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import { clsxm } from '$lib/utils/string.js';

	export interface TabsContext {
		rounded: RoundedSize | false;
		shadow: ShadowSize | false;
		theme: ThemeColor;
		variant: 'unstyled' | 'pills' | 'flushed' | 'tabbed';
	}

	export interface TabsProps {
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		rounded: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'pills' | 'flushed' | 'tabbed';
		children: Snippet;
	}
</script>

<script lang="ts">
	let { rounded, shadow, theme, variant, children, ...rest }: TabsProps & ElementProps<'ul'> =
		$props();

	setContext('Tabs', {
		rounded,
		shadow,
		theme,
		variant
	} as TabsContext);

	const classes = $derived(clsxm(rest.class));
</script>

<ul {...rest} class={classes}>
	{@render children()}
</ul>
