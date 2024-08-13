<script context="module" lang="ts">
	export interface ExampleOptionProps {
		title: string;
		description?: string;
		options: any[];
		selected?: any;
		getLabel?: (option: any) => any;
		onSelect?: (option: any) => void;
	}
</script>

<script lang="ts">
	let {
		title,
		description = '',
		options,
		selected = $bindable(),
		getLabel = (option) => option,
		onSelect = (option) => {}
	}: ExampleOptionProps = $props();

	function handleSelect(option: any) {
		selected = option;
		onSelect(option);
	}

	function createLabel(option: string) {
		let value = getLabel(option);
		value = value + '';
		if (value === 'unstyled') value = 'none';
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
</script>

<div
	class="border border-frame-200 dark:border-frame-800 dark:bg-frame-700 shadow-sm dark:shadow-md overflow-hidden text-sm divide-y divide-frame-300 dark:divide-frame-900/60"
>
	<div class="font-semibold bg-frame-200 dark:bg-frame-800 dark:text-frame-200 px-3 py-1.5">
		{title}
	</div>
	<div class="px-3 py-4">
		<div class:hidden={!description} class="mb-3 text-frame-500">{description}</div>
		<div class="flex flex-wrap -mt-2 -mr-2 dark:text-frame-200">
			{#each options as option}
				<button
					role="checkbox"
					onclick={() => handleSelect(option)}
					class="mt-1 mr-2 aria-checked:underline aria-checked:text-primary hover:text-primary"
					aria-checked={option === selected}>{createLabel(option)}</button
				>
			{/each}
		</div>
	</div>
</div>
