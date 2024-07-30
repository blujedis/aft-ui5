<script lang="ts" context="module">
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	export type ColorModeProps = {
		mode?: 'light' | 'dark' | 'auto';
		children?: Snippet<[{ dark: boolean; set: (dark: boolean) => void; toggle: () => boolean }]>;
	};

	const key = 'darkmode';
	const prefersDark =
		(browser && window.matchMedia('(prefers-color-scheme: dark)').matches) || false;

	let dark = $state((browser && JSON.parse(localStorage.getItem(key) || 'false')) || false);

	function getRoot() {
		if (typeof document === 'undefined') return null;
		return document.documentElement;
	}

	// function getStorageValue(): boolean | null {
	// 	if (typeof localStorage === 'undefined' || !key) return null;
	// 	const currentValue = JSON.parse(localStorage.getItem(key) || '');
	// 	if (!currentValue) return null;
	// 	return currentValue;
	// }

	function setStorageValue(value: boolean) {
		if (typeof localStorage === 'undefined') return;
		localStorage.setItem(key, JSON.stringify(value));
	}

	function applyMode(value: boolean) {
		const root = getRoot();
		if (!root) return;
		if (value) root.classList.add('dark');
		else root.classList.remove('dark');
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
		if (!root) return;
		const nextValue = !dark;
		applyMode(nextValue);
		return dark;
	}
</script>

<script lang="ts">
	let { mode = 'auto', children }: ColorModeProps = $props();

	if (mode !== 'auto') {
		set(mode === 'dark');
	} else if (prefersDark) {
		set(true);
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
