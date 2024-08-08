<script lang="ts">
	import { type Snippet } from 'svelte';
	import ColorMode from '$lib/components/ColorMode/ColorMode.svelte';
	let expanded = $state(false);
	let { children }: { children: Snippet } = $props();
	import '../app.css';
</script>

<div class="flex h-screen">
	<div
		class:translate-x-52={expanded}
		class="-ml-52 w-52 z-10 lg:flex lg:z-0 lg:ml-0 lg:translate-x-0 bg-frame-50 dark:bg-inherit border-r border-r-frame-100 dark:border-r-frame-800 transition-transform transform ease-in-out duration-300"
	>
		<div class="w-full">
			<div
				class="flex items-center justify-center h-12 bg-frame-200/30 dark:bg-frame-900 dark:border-b dark:border-b-frame-800"
			>
				Title
			</div>
			<div class="p-3 overflow-y-auto h-full dark:bg-frame-900">Sidebar items</div>
		</div>
	</div>
	<div class="flex-1">
		<div
			class="flex items-center bg-white dark:bg-inherit h-12 w-full border-b border-b-frame-100 dark:border-b-frame-700"
		>
			<div class="flex-1 items-center px-8">Header</div>
			<div class="flex items-center px-8 space-x-4">
				<ColorMode init="light">
					{#snippet children(prop)}
						<button class="text-sm block" onclick={prop.toggle}
							>{prop.dark ? 'Show Light' : 'Show Dark'}</button
						>
					{/snippet}
				</ColorMode>
				<button onclick={() => (expanded = !expanded)}>Menu</button>
			</div>
		</div>
		<main class="px-8 py-6 overflow-y-auto">
			{@render children()}
		</main>
	</div>
</div>

<!-- <div
		class="sticky flex items-center text-inherit dark:text-white bg-gray-200 dark:bg-[#181D20] border-b border-b-gray-200 dark:border-b-gray-700/60 p-3 top-0 z-50"
	>
		<div class="flex-1">Header</div>
		<div>
			<ColorMode init="light">
				{#snippet children(prop)}
					<button class="text-sm block" onclick={prop.toggle}
						>{prop.dark ? 'Show Light' : 'Show Dark'}</button
					>
				{/snippet}
			</ColorMode>
		</div>
	</div> -->

<!-- <div class="hidden md:flex h-full">
		<div class="w-48 border-r border-r-gray-200 dark:border-r-gray-700/60 p-3">
			<div class="flex items-center justify-center h-16 bg-frame-100">Sidebar</div>
			<div class="flex flex-col flex-1 overflow-y-auto"></div>
		</div>
		<main class="flex-1">
			<div class="max-w-4xl">
				<div class="py-4 px-6 overflow-y-auto">
					{@render children()}
				</div>
			</div>
		</main>
	</div> -->
