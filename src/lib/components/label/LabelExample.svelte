<script lang="ts">
	import { colors } from '$lib/theme/types.js';
	import { capitalize } from '$lib/utils/string.js';
	import Label from './Label.svelte';
</script>

<div class="mb-8">
	<Label>Default Theme</Label>
</div>

<div class="grid grid-cols-8 gap-4 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<Label theme={color}>
			{capitalize(color)}
		</Label>
	{/each}
</div>

<div class="flex items-end space-x-8">
	<div class="inline-flex">
		<Label>
			<span> Normal </span>
			<input type="text" placeholder="Username" class="flex" />
		</Label>
	</div>

	<div class="inline-flex">
		<Label inline>
			<span> Inline </span>
			<input type="text" placeholder="Password" class="flex" />
		</Label>
	</div>
</div>
