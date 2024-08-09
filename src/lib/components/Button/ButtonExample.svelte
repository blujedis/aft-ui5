<script lang="ts">
	import { type ThemeColor, colors } from '$lib/theme/types.js';
	import Button, { type ButtonProps, buttonVariants as variants } from './Button.svelte';

	let variant = 'filled' as ButtonProps<'button'>['variant'];
	let theme = 'primary' as ThemeColor;
</script>

<!-- <div class="flex space-x-8 max-w-lg">
	<div class="flex-col">
		<div class="font-semibold mb-2">Variants</div>
		<div class="flex flex-wrap -mt-1 -mr-2">
			{#each variants as name}
				<button class="mt-1 mr-2" onclick={() => (variant = name)}>{name}</button>
			{/each}
		</div>
	</div>

	<div class="flex-col">
		<div class="font-semibold mb-2">Themes</div>
		<div class="flex flex-wrap -mt-2 -mr-2">
			{#each colors as color}
				<button class="mt-1 mr-2" onclick={() => (theme = color)}>{color}</button>
			{/each}
		</div>
	</div>
</div> -->

<div class="mt-4">
	{#each variants as v} 
		<div class="font-semibold mb-2">{v}</div>
		<div class="mb-8 grid grid-cols-11 gap-2">
			{#each colors.filter(c => !['unstyled', 'black'].includes(c)) as c} 
			<Button variant={v} theme={c}>Click</Button>
			{/each}
		</div>
	{/each}
</div>

<!-- <div class="mt-4">
	<Button {variant} {theme}>Click</Button>
</div> -->
