<script lang="ts">
	import { type Snippet } from 'svelte';
	import ColorMode from '$lib/components/ColorMode/ColorMode.svelte';
	let { children }: { children: Snippet } = $props();
	import '../app.css';
</script>

<div class="h-full">
	<div
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
	</div>
	<div class="flex grow h-full">
		<div class="w-48 border-r border-r-gray-200 dark:border-r-gray-700/60 p-3 h-full">
			<div class="fixed">Sidebar</div>
		</div>
		<main class="flex-1 h-full">
			<div class="h-full max-w-4xl">
				<div class="py-4 px-6 overflow-y-auto">
					{@render children()}
				</div>
			</div>
		</main>
	</div>
</div>
