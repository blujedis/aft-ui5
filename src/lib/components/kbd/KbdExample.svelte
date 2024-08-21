<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Kbd, { badgeVariants as variants } from './Kbd.svelte';
</script>

<VariantList component={Kbd} {variants} label props={{ size: 'md' }} />
