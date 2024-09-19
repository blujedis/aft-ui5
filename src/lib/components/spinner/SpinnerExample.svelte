<script lang="ts">
	import { colors } from '$lib/theme/globals.js';
	import { capitalize } from '$lib/utils/string.js';
	import Label from '../label/Label.svelte';
	import Spinner from './Spinner.svelte';
</script>

<div class="grid grid-cols-8 gap-4 mb-8">
	{#each ['xs', 'sm', 'md', 'lg', 'xl', 'xl2'] as any[] as size}
		<Label>
			<span>{capitalize(size)}</span>
			<Spinner {size} />
		</Label>
	{/each}
</div>

<div class="flex items-center space-x-4 mb-8">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<Label class="min-w-20">
			<span class="flex">
				{capitalize(color)}
			</span>
			<Spinner theme={color} size="md" />
		</Label>
	{/each}
</div>
