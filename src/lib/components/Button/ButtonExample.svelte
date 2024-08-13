<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Button, { buttonVariants as variants } from './Button.svelte';
</script>

<VariantList component={Button} {variants} label />
