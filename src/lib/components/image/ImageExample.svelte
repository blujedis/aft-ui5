<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Image, { imageVariants as variants } from './Image.svelte';
	import { ImageAspect, ImageSize } from '$lib/theme/types.js';
	const sizes = Object.keys(ImageSize).slice(0, 11);
	const aspect = Object.keys(ImageAspect);
</script>

<VariantList
	component={Image}
	{variants}
	key="aspect"
	modifiers={aspect}
	props={{
		lazy: true,
		size: 'xl5',
		src: 'https://images.unsplash.com/photo-1723049235305-65395182241f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}}
/>

<VariantList
	component={Image}
	{variants}
	key="size"
	modifiers={sizes}
	props={{
		lazy: true,
		src: 'https://images.unsplash.com/photo-1723049235305-65395182241f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}}
/>
