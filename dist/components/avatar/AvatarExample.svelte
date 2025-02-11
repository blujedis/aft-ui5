<script lang="ts">
	import VariantList from '../../../components/VariantList.svelte';
	import Icon from '../icon/Icon.svelte';
	import Image from '../image/Image.svelte';
	import Avatar from './Avatar.svelte';

	const variants = ['unstyled', 'filled', 'soft', 'outlined'];
</script>

<div class="mb-8">
	<Avatar size="md">
		<Icon icon="mdi:user" />
	</Avatar>

	<Avatar size="md" variant="soft">
		<Icon icon="mdi:user" />
	</Avatar>

	<Avatar size="md" variant="outlined">
		<Icon icon="mdi:user" />
	</Avatar>
</div>

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
