<script lang="ts">
	import VariantList from '$components/VariantList.svelte';
	import Label from '../label/Label.svelte';
	import Badge, { badgeVariants as variants } from './Badge.svelte';
</script>

<Label class="block mb-8">
	<div>Default</div>
	<Badge>React</Badge>
</Label>

<VariantList component={Badge} {variants} label props={{ size: 'md' }} />
