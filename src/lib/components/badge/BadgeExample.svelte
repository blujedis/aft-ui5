<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Badge, { badgeVariants as variants } from './Badge.svelte';
</script>

<VariantList component={Badge} {variants} label props={{ size: 'md', removable: true }} />
