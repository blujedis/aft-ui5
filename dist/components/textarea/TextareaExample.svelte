<script lang="ts">
	import Textarea from './Textarea.svelte';
	import { colors } from '../../theme/globals.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '../../utils/string.js';
</script>

<Label class="block mb-8">
	<div>Default</div>
	<Textarea />
</Label>

<div class="grid grid-cols-4 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label>
				<div>{capitalize(color)}</div>
				<Textarea theme={color} value={color + '1'} />
			</Label>
		</div>
	{/each}
</div>
