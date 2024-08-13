<script lang="ts">
	import Icon from '$lib/components/icon/Icon.svelte';
	import Image from '$lib/components/image/Image.svelte';
	import { colors } from '$lib/theme/types.js';
	import { capitalize } from '$lib/utils/string.js';
	import type { Component } from 'svelte';

	let {
		variants = ['default'],
		modifiers = colors,
		key = 'theme',
		component,
		props = {},
		icon,
		image,
		label
	}: {
		variants?: any[];
		modifiers?: string[];
		key?: string;
		component: Component<any>;
		props?: Record<string, unknown>;
		icon?: string;
		image?: string;
		label?: boolean;
	} = $props();

	function getProps(value: any) {
		const clone = { ...props };
		clone[key] = typeof clone[key] !== 'undefined' ? clone[key] : value;
		return clone;
	}
</script>

<div>
	{#each variants as v}
		{#if v && v !== 'unstyled'}
			{#if v !== 'default'}
				<div class="font-semibold mb-4 text-sm">{capitalize(v)}</div>
			{/if}
			<div class="flex flex-wrap -mt-2 -mr-2 items-center space-x-4 mb-8 w-full">
				{#each modifiers.filter((m) => !['unstyled'].includes(m)) as m}
					<div class="flex-col text-xs text-center">
						<svelte:component this={component} {...getProps(m)} variant={v}>
							{#if icon}
								<Icon {icon} size="full" />
							{:else if image}
								<Image src={image} />
							{:else if label}
								{capitalize(m)}
							{/if}
						</svelte:component>
						{#if !label}
							<div class="text-center mt-1 text-gray-500">{capitalize(m)}</div>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	{/each}
</div>
