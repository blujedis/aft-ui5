<script lang="ts">
	import Avatar from '../avatar/Avatar.svelte';
	import Image from '../image/Image.svelte';
	import Indicator, { indicatorVariants as variants } from './Indicator.svelte';
</script>

<!-- <Avatar>
	{#snippet children({ rounded })}
		<Indicator animate="unstyled" text="2200+" {rounded} />
		<Image
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			{rounded}
		/>
	{/snippet}
</Avatar> -->

<Avatar rounded="full" size="xl2">
	{#snippet children({ rounded, size })}
		<Indicator animate="pulse" {rounded} />
		<Image
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			{rounded}
		/>
	{/snippet}
</Avatar>
