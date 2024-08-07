<script lang="ts">
	import { type ThemeColor, colors } from '$lib/theme/types.js';
	import Button, { type ButtonProps, buttonVariants as variants } from './Button.svelte';

	let variant = 'filled' as ButtonProps<'button'>['variant'];
	let theme = 'primary' as ThemeColor;
</script>

<div class="flex space-x-8">
	<div class="flex-col">
		<div class="font-semibold mb-1">Variants</div>
		<div class="flex flex-wrap space-x-2">
			{#each variants as name}
				<button onclick={() => (variant = name)}>{name}</button>
			{/each}
		</div>
	</div>

	<div class="flex-col">
		<div class="font-semibold mb-1">Themes</div>
		<div class="flex flex-wrap space-x-2">
			{#each colors as color}
				<button onclick={() => (theme = color)}>{color}</button>
			{/each}
		</div>
	</div>
</div>

<Button {variant} {theme}>Click</Button>
