<script lang="ts">
	import { type Snippet } from 'svelte';
	import { page } from '$app/stores';
	import ColorModeInit from '$lib/components/colormode/ColorModeInit.svelte';
	import { capitalize, pageIsActive } from '$lib/utils/string.js';
	import { build } from '$lib/theme/types.js';
	import '../app.css';

	let expanded = $state(true);
	let { children }: { children: Snippet } = $props();

	const components = build;

	function isPageActive(path: string) {
		return pageIsActive($page, path);
	}
</script>

<div class="flex h-full w-full fixed">
	<div
		class:ml-0={expanded}
		class="-ml-52 w-52 z-10 lg:flex lg:z-0 border-r border-r-frame-200 dark:border-r-frame-700 bg-frame-50 dark:bg-frame-800 transition-all ease-in-out duration-300"
	>
		<div class="w-full">
			<div class="flex items-center justify-center h-12">Components</div>
			<div class="p-4 overflow-y-auto h-full text-sm pb-48">
				{#each components as c}
					<a
						href={`/${c}`}
						class:active={isPageActive(c)}
						class="block py-1 px-2.5 my-1 hover:bg-frame-100 dark:hover:bg-frame-700 rounded-sm"
						>{capitalize(c)}</a
					>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex-1 h-full z-0">
		<div
			class="sticky flex items-center h-12 w-full border-b border-b-frame-200 dark:border-b-frame-700"
		>
			<div class="flex-1 items-center px-8">Aft UI</div>
			<div class="flex items-center px-8 space-x-4">
				<ColorModeInit initial="light">
					{#snippet children(prop)}
						<button class="text-sm block" onclick={prop.toggle}>
							{#if prop.isDark()}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 2q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525zM12 12"
									/></svg
								>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
									/></svg
								>
							{/if}
						</button>
					{/snippet}
				</ColorModeInit>
				<button onclick={() => (expanded = !expanded)}>
					{#if !expanded}
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><rect width="18" height="18" x="3" y="3" rx="2" /><path
									d="M9 3v18m5-12l3 3l-3 3"
								/></g
							></svg
						>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><rect width="18" height="18" x="3" y="3" rx="2" /><path
									d="M9 3v18m7-6l-3-3l3-3"
								/></g
							></svg
						>
					{/if}
				</button>
			</div>
		</div>
		<main class="overflow-y-auto h-full px-8 py-6 pb-72">
			{@render children()}
		</main>
	</div>
</div>

<!-- <div
class:translate-x-52={expanded}
class="-ml-52 w-52 z-10 lg:flex lg:z-0 lg:ml-0 lg:translate-x-0 border-r border-r-frame-100 dark:border-r-frame-800 transition-transform transform ease-in-out duration-300"
>
</div> -->

<style>
	.active {
		@apply bg-primary-500;
		@apply text-white;
		pointer-events: none;
	}
</style>
