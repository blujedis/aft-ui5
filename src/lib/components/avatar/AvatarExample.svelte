<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Avatar, { avatarVariants as variants } from './Avatar.svelte';
</script>

<VariantList component={Avatar} {variants} props={{ size: 'md' }} icon="mdi:user" />

<VariantList
	component={Avatar}
	{variants}
	props={{ size: 'md' }}
	image="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
/>
