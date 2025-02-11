<script lang="ts">
	import VariantList from '../../../components/VariantList.svelte';
	import Icon, { iconVariants as variants } from './Icon.svelte';
</script>

<div class="mb-8">
	<Icon icon="mdi:account-hard-hat-outline" size="lg" />
</div>

<VariantList component={Icon} {variants} props={{ icon: 'mdi:account-hard-hat-outline' }} />
