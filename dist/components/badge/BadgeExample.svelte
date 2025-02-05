<script lang="ts">
	import VariantList from '../../../components/VariantList.svelte';
	import Label from '../label/Label.svelte';
	import Badge from './Badge.svelte';

	const variants = ['unstyled', 'filled', 'soft', 'outlined'];
</script>

<div class="grid grid-cols-3 grid-4 mb-8">
	<Label>
		<div>Default</div>
		<Badge>React</Badge>
	</Label>
	<Label>
		<div>Soft</div>
		<Badge variant="soft">React</Badge>
	</Label>
	<Label>
		<div>Outlined</div>
		<Badge variant="outlined">React</Badge>
	</Label>
</div>

<VariantList component={Badge} {variants} label props={{ size: 'md' }} />
