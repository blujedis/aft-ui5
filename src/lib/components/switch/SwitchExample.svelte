<script lang="ts">
	import { colors } from '$lib/theme/types.js';
	import { capitalize } from '$lib/utils/string.js';
	import Label from '../label/Label.svelte';
	import Switch from './Switch.svelte';
	let checked = false;
</script>

<div class="mb-8">
	<Label>
		<span>Default</span>
		<Switch bind:checked />
	</Label>
</div>

{#each ['xs', 'sm', 'md', 'lg', 'xl', 'xl2'] as size}
	<div class="flex items-center space-x-4 mb-8">
		{#each colors.filter((c) => c !== 'unstyled') as color}
			<Label class="min-w-20">
				<span class="flex">
					{capitalize(color)}
				</span>
				<Switch theme={color} bind:checked size={size as any} />
			</Label>
		{/each}
	</div>
{/each}
