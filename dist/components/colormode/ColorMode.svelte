<script lang="ts">
	import {
		isDark,
		set,
		toggle,
		type ColorModeChildProps,
		type ColorModeProps
	} from './hook.svelte.js';
	let { children }: ColorModeProps = $props();
	let childProps: ColorModeChildProps = { isDark, set, toggle };
</script>

{#if children}
	{@render children(childProps)}
{/if}
