<script lang="ts">
	import Button from '../button/Button.svelte';
	import Icon from '../icon/Icon.svelte';
	import Card from './Card.svelte';
</script>

<Card rounded="lg" image="https://flowbite-svelte.com/images/image-1.webp">
	<!-- {#snippet image({ classes })}
		<img class={classes} src="https://flowbite-svelte.com/images/image-1.webp" alt="office" />
	{/snippet} -->
	<h5 class="text-xl font-bold tracking-tight -mb-1">Lorem Ipsum Dolor Sit Amet</h5>
	<p class="text-frame-500 dark:text-frame-400 text-sm">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat.
	</p>
	<Button theme="secondary">
		Continue Reading
		<Icon icon="mdi:arrow-right-circle-outline" class="ml-3" />
	</Button>
</Card>
