<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Icon, { iconVariants as variants } from './Icon.svelte';
</script>

<VariantList component={Icon} {variants} props={{ icon: 'mdi:account-hard-hat-outline' }} />
