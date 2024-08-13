<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Avatar, { avatarVariants as variants } from './Avatar.svelte';
</script>

<VariantList component={Avatar} {variants} props={{ size: 'md' }} icon="mdi:user" />

<VariantList
	component={Avatar}
	{variants}
	props={{ size: 'md' }}
	image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
/>
