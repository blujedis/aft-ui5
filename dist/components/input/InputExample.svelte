<script lang="ts">
	import Input from './Input.svelte';
	import { colors } from '../../theme/globals.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '../../utils/string.js';
</script>

<div class="mb-8">
	<Label>
		<div>Default</div>
		<Input value="default" />
	</Label>
</div>

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
