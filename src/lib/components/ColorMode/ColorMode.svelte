<script lang="ts">
	import { isDark, set, toggle, type ColorModeProps } from './colormode.svelte.js';
	let { children }: ColorModeProps = $props();
</script>

{#if children}
	{@render children({ isDark, set, toggle })}
{/if}
