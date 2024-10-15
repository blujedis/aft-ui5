<script module lang="ts">
	import type { FocusType, RoundedSize, Size, ThemeColor } from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';

	export interface TabItemProps {
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		full?: boolean;
		// role?: AriaRole;
		rounded?: RoundedSize | false;
		selected?: boolean;
		selectedTheme?: ThemeColor;
		size?: Size;
		theme?: ThemeColor;
		variant?: 'unstyled' | 'pill' | 'ghost' | 'text';
		children: Snippet;
	}
</script>

<script lang="ts">
	let { children }: TabItemProps = $props();
</script>

<li>
	{@render children()}
</li>
