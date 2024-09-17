<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import { setContext, type Snippet } from 'svelte';
	import type { PopperEvent } from '../popper/Popper.svelte';

	export interface DropdownGroupConfig {
		event: PopperEvent;
		last?: HTMLElement | null;
	}

	export interface DropdownGroupContext {
		// multiple: () => boolean;
		// selectable: () => boolean;
		getActive: (active?: boolean) => string[];
		setActive: (id: string) => any;
		hasActive: (id: string) => boolean;
		delActive: (id: string) => any;
		setConf: (id: string, conf: Partial<DropdownGroupConfig>) => any;
		getConf: (id: string) => DropdownGroupConfig;
		// getSelected: () => any[];
		// setSelected: (value: any) => any;
		// clearSelected: () => any;
	}

	export interface DropdownGroupProps {
		group?: string[];
		children: Snippet;
	}
</script>

<script lang="ts">
	let {
		group = $bindable([]),
		children,
		...rest
	}: DropdownGroupProps & ElementProps<'div'> = $props();

	let configs = $state({} as Record<string, DropdownGroupConfig>);
	let selected = $state() as any;

	setContext('DropdownGroup', {
		// multiple: () => Array.isArray(selected),
		// selectable: () => typeof selected !== 'undefined',

		getActive: (active?: boolean) => (active ? group[group.length - 1] : group),
		setActive: (id: string) => {
			if (group.includes(id)) return;
			group = [...group, id];
		},
		delActive: (id: string) => (group = group.filter((v) => v !== id)),
		hasActive: (id: string) => group.includes(id),
		getConf: (id: string) => configs[id],
		setConf: (id: string, conf: Partial<DropdownGroupConfig>) => {
			configs[id] = { ...configs[id], ...conf };
		}

		// getSelected: () => selected,
		// setSelected: (value: any) => {
		// 	if (typeof value === 'undefined') return;
		// 	if (Array.isArray(selected)) {
		// 		if (selected.includes(value)) selected = selected.filter((v) => v !== value);
		// 		else selected = [...selected, value];
		// 	} else if (typeof selected !== 'undefined') {
		// 		if (value === selected) value = '';
		// 		else selected = value;
		// 	}
		// 	return selected;
		// },
		// clearSelected: () => {
		// 	if (Array.isArray(selected)) selected = [];
		// 	else selected = '';
		// }
	} as DropdownGroupContext);
</script>

<div {...rest}>
	{@render children()}
</div>
