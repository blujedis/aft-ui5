<script module lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { type Writable } from 'svelte/store';
	import {
		type FocusType,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '../../theme/types.js';
	import type { ElementProps } from '../../types.js';
	import { clsxm } from '../../utils/string.js';

	export type TabsVariant = 'unstyled' | 'pills' | 'tabs' | 'grouped' | 'text';

	export interface TabsContext {
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		rounded: RoundedSize;
		shadow: ShadowSize;
		size: Size;
		theme: ThemeColor;
		variant: TabsVariant;
		selected: Writable<{ label: string; node: HTMLElement }>;
	}

	export interface TabsProps {
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		full?: boolean;
		param?: string;
		rounded?: RoundedSize;
		shadow?: ShadowSize;
		size?: Size;
		theme?: ThemeColor;
		variant?: TabsVariant;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import t from '../../theme/theme.svelte.js';
	import { Rounded } from '../../theme/constants.js';

	let {
		focusType = 'visible',
		focusTheme,
		full,
		rounded,
		shadow,
		size = 'md',
		theme,
		variant = 'text',
		children,
		...rest
	}: TabsProps & ElementProps<'ul'> = $props();

	let selected = writable({ label: '', node: undefined } as {
		label: string;
		node: HTMLElement | undefined | null;
	});

	setContext('Tabs', {
		focusType,
		focusTheme,
		rounded,
		shadow,
		size,
		theme,
		variant,
		selected
	} as TabsContext);

	const classes = $derived(
		clsxm(
			`tabs tabs-${variant || 'default'} tabs-${theme || 'default'}`,
			'isolate flex flex-wrap mb-4',
			['text', 'pills', 'tabs'].includes(variant || '') && 'space-x-2',
			!['pills', 'grouped'].includes(variant || '') && [t.options.border, 'border-b'],
			variant === 'grouped' && [t.options.divide, 'divide-x'],
			variant === 'grouped' && [t.options.border, 'border inline-flex'],
			['grouped'].includes(variant || '') &&
				rounded && [Rounded[rounded], '[&>:not(:first-child):not(:last-child)]:rounded-none'],

			full && 'w-full',
			rest.class
		)
	);

	function init(node: HTMLElement) {
		const destroy = selected.subscribe((s) => {
			if (s.node) node.replaceChildren(s.node);
		});
		return { destroy };
	}
</script>

<div>
	<ul {...rest} role="tablist" class={classes}>
		{@render children()}
	</ul>
	<div role="tabpanel" aria-labelledby={`tab-${$selected.label}`} use:init class="flex"></div>
</div>
