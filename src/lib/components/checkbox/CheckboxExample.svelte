<script lang="ts">
	import Checkbox from './Checkbox.svelte';
	import { colors } from '$lib/theme/globals.js';
	import Label from '../label/Label.svelte';
	import { capitalize } from '$lib/utils/string.js';

	let group = $state(['svelte', 'solid']);
</script>

<div class="mb-8">
	<div class="max-w-28 mb-4">
		<Label inline justify="between">
			<span>React</span>
			<Checkbox bind:group value="react" />
			<!-- <input type="checkbox" bind:group value="react" /> -->
		</Label>
		<Label inline justify="between">
			<span>Angular</span>
			<Checkbox bind:group value="angular" />
			<!-- <input type="checkbox" bind:group value="angular" /> -->
		</Label>
		<Label inline justify="between">
			<span>Svelte</span>
			<Checkbox bind:group value="svelte" />
			<!-- <input type="checkbox" bind:group value="svelte" /> -->
		</Label>
		<Label inline justify="between">
			<span>Solid</span>
			<Checkbox bind:group value="solid" />
			<!-- <input type="checkbox" bind:group value="solid" /> -->
		</Label>
	</div>
	<div class="text-sm text-frame-500">
		Selected: {group.map((v: string) => capitalize(v)).join(', ')}
	</div>
</div>

<div class="grid grid-cols-6 gap-8 mb-6">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div>
			<Label inline>
				<div>{capitalize(color)}</div>
				<Checkbox theme={color} value={color + '1'} />
			</Label>
		</div>
	{/each}
</div>
