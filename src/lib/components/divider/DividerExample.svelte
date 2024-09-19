<script lang="ts">
	import { colors } from '$lib/theme/globals.js';
	import Divider from './Divider.svelte';
</script>

<div class="max-w-lg mb-8">
	<Divider />
</div>

{#each colors.filter((c) => c !== 'unstyled') as color}
	<div class="max-w-lg mb-2">
		<Divider content="center" theme={color}>options</Divider>
	</div>
{/each}

<div class="max-w-lg mb-8">
	<Divider content="center">options</Divider>
</div>

<div class="grid grid-cols-2 gap-4">
	<div class="flex mb-8 h-40">
		<Divider vertical />
	</div>

	<div class="flex mb-8 h-40">
		<Divider content="center" vertical>options</Divider>
	</div>
</div>

<div class="grid grid-cols-4 gap-4">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div class="h-40">
			<Divider content="center" theme={color} vertical>options</Divider>
		</div>
	{/each}
</div>
