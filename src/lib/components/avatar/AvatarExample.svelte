<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Image from '../image/Image.svelte';
	import Avatar, { avatarVariants as variants } from './Avatar.svelte';
</script>

<VariantList component={Avatar} {variants} props={{ size: 'md' }} icon="mdi:user" />

<Avatar size="xs">
	<Image
		src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</Avatar>

<Avatar>
	<Image
		src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
	/>
</Avatar>

<!-- <VariantList
	component={Avatar}
	{variants}
	props={{ size: 'md' }}
	image=""
/> -->
