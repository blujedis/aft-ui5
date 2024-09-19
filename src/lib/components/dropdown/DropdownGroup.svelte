<script context="module" lang="ts">
	import type { ElementProps } from '$lib/types.js';
	import { setContext, type Snippet } from 'svelte';
	import type { PopperEvent } from '../popper/Popper.svelte';

	export interface DropdownGroupConfig {
		event: PopperEvent;
		last?: HTMLElement | null;
	}

	export interface DropdownGroupContext {
		getActive: (active?: boolean) => string[];
		setActive: (id: string) => any;
		hasActive: (id: string) => boolean;
		delActive: (id: string) => any;
		setConf: (id: string, conf: Partial<DropdownGroupConfig>) => any;
		getConf: (id: string) => DropdownGroupConfig;
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

	setContext('DropdownGroup', {
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
	} as DropdownGroupContext);
</script>

<div {...rest}>
	{@render children()}
</div>
