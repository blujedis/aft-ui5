<script lang="ts">
	import {
		init,
		isDark,
		set,
		toggle,
		type ColorModeChildProps,
		type ColorModeProps
	} from './hook.svelte.js';
	let { initial = 'auto', children }: ColorModeProps = $props();
	let childProps: ColorModeChildProps = { isDark, set, toggle };
	init(initial);
</script>

<svelte:head>
	<script>
		var darkMode = false;
		var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (localStorage.darkmode === 'true' || (!('darkmode' in localStorage) && prefersDark)) {
			darkMode = true;
		} else {
			const currentDark = JSON.parse(localStorage['darkmode'] || 'false');
			if (currentDark) darkMode = true;
			else darkMode = false;
		}
		if (darkMode) document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
		localStorage.setItem('preferdark', prefersDark);
		localStorage.setItem('darkmode', darkMode);
	</script>
</svelte:head>

{#if children}
	{@render children(childProps)}
{/if}
