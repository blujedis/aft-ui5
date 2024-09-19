<script lang="ts">
	import { colors } from '$lib/theme/globals.js';
	import { capitalize } from '$lib/utils/string.js';
	import Flushed from './Flushed.svelte';
</script>

<div class="grid grid-cols-8 gap-4 mb-8">
	<Flushed group hoverable>
		<span>Default</span>
	</Flushed>
</div>

<div class="flex items-center space-x-4 mb-8">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<Flushed group hoverable theme={color}>
			<span class="flex">
				{capitalize(color)}
			</span>
		</Flushed>
	{/each}
</div>
