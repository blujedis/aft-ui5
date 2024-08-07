<script lang="ts" context="module">
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	export type ColorModeProps = {
		init?: 'light' | 'dark' | 'auto';
		children?: Snippet<[{ dark: boolean; set: (dark: boolean) => void; toggle: () => boolean }]>;
	};

	const key = 'darkmode';
	const hasKey = browser && localStorage.getItem(key);
	const prefersDark =
		(browser && window.matchMedia('(prefers-color-scheme: dark)').matches) || false;
	let dark = $state((browser && JSON.parse(localStorage.getItem(key) || 'false')) || false);

	function getRoot() {
		if (typeof document === 'undefined') return null;
		return document.documentElement;
	}

	function setStorageValue(value: boolean) {
		if (typeof localStorage === 'undefined') return;
		localStorage.setItem(key, JSON.stringify(value));
	}

	function applyMode(value: boolean) {
		const root = getRoot();
		if (!root) return;
		if (value) root.classList.add('dark');
		else root.classList.remove('dark');
		dark = value;
		setStorageValue(value);
	}

	function set(useDark = false) {
		const root = getRoot();
		if (!root) return;
		dark = useDark;
		applyMode(dark);
	}

	function toggle() {
		const root = getRoot();
		if (!root) return dark;
		const nextValue = !dark;
		applyMode(nextValue);
		return nextValue;
	}
</script>

<script lang="ts">
	let { init = 'auto', children }: ColorModeProps = $props();
	if ((init !== 'auto' && !hasKey) || !hasKey) {
		if (init !== 'auto') set(init === 'dark');
		else set(prefersDark);
	}
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
	{@render children({ dark, set, toggle })}
{/if}
