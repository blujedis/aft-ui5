<script lang="ts">
	import Avatar from '../avatar/Avatar.svelte';
	import Image from '../image/Image.svelte';
	import Indicator, { IndicatorVariants as variants } from './Indicator.svelte';
</script>

<Avatar rounded="md" size="md">
	{#snippet children({ rounded, size })}
		<Indicator {rounded} {size} animate="pulse" />
		<Image
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			{rounded}
		/>
	{/snippet}
</Avatar>

<br />

<Avatar rounded="md" size="md">
	{#snippet children({ rounded, size })}
		<Indicator {rounded} {size} text="2,595" theme="danger" />
		<Image
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			{rounded}
		/>
	{/snippet}
</Avatar>

<br />

<!-- <Avatar rounded="md" size="xl2">
	{#snippet children({ rounded, size })}
		<Indicator animate="pulse" {rounded} />
		<Image
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			{rounded}
		/>
	{/snippet}
</Avatar> -->
