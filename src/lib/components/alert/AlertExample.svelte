<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Alert, { alertVariants as variants } from './Alert.svelte';
</script>

<VariantList component={Alert} {variants} props={{ size: 'md' }} />
