<script lang="ts">
	import Input from './Input.svelte';
	import { colors } from '$lib/theme/types.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '$lib/utils/string.js';
</script>

<Label class="block mb-8">
	<div>Default</div>
	<Input />
</Label>

<div class="grid grid-cols-4 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label>
				<div>{capitalize(color)}</div>
				<Input theme={color} value={color + '1'} />
			</Label>
		</div>
	{/each}
</div>
