<script lang="ts">
	import ProgressCircle from './ProgressCircle.svelte';
	import { colors } from '$lib/theme/globals.js';
	import Button from '../button/Button.svelte';
	import { capitalize } from '$lib/utils/string.js';
	let value = 33;
</script>

<div class="mb-8">
	<ProgressCircle bind:value size="lg" />
</div>

<div class="grid grid-cols-3 gap-3">
	{#each colors.filter((c) => c !== 'unstyled') as color}
		<div class="flex flex-col items-center mb-2">
			<div>
				<ProgressCircle bind:value max={100} theme={color} size="lg" />
			</div>
			<div>{capitalize(color)}</div>
		</div>
	{/each}
</div>
<div class="flex items-center justify-center mt-6 space-x-4 w-full mx-auto">
	<Button onclick={() => (value = 5)}>5%</Button>
	<Button onclick={() => (value = 25)}>25%</Button>
	<Button onclick={() => (value = 55)}>55%</Button>
	<Button onclick={() => (value = 75)}>75%</Button>
	<Button onclick={() => (value = 90)}>90%</Button>
	<Button onclick={() => (value = 100)}>100%</Button>
</div>
