<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Stack, { stackVariants as variants } from './Stack.svelte';
</script>

<VariantList component={Stack} {variants} props={{ size: 'md' }} />
