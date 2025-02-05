<script module lang="ts">
	import { type Snippet } from 'svelte';
	import type { TabsContext, TabsVariant } from './Tabs.svelte';
	import {
		BgColor,
		BgColorHover,
		BorderColor,
		BorderColorHover,
		ForeColorFilled,
		ForeColorFilledHover,
		ForeColorOutline,
		type RoundedSize,
		type Size,
		type ThemeColor
	} from '../../theme/types.js';

	export interface TabItemProps {
		href?: string; // uses anchor instead of button.
		label: string;
		rounded?: RoundedSize;
		selected?: boolean;
		size?: Size;
		theme?: ThemeColor;
		variant?: TabsVariant;
		trigger?: Snippet;
		children: Snippet;
	}
	const ButtonPaddingX = {
		unstyled: '',
		xs: 'px-3',
		sm: 'px-3.5',
		md: 'px-5',
		lg: 'px-6',
		xl: 'px-7',
		xl2: 'px-8'
	};
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import { buildClass } from '../../theme/build.svelte.js';
	import { FieldFontSize, FieldPaddingY, Rounded } from '../../theme/constants.js';
	import type { ElementProps } from '../../types.js';
	import { clsxm } from '../../utils/string.js';

	const context = getContext('Tabs') as TabsContext;

	let {
		href,
		label,
		rounded = context.rounded,
		selected,
		size = context.size,
		theme = context.theme,
		variant = context.variant,
		trigger,
		children,
		...rest
	}: TabItemProps & ElementProps<'a' & 'button'> = $props();

	let node: HTMLElement;

	const classes = $derived(
		buildClass({
			prepend: [`tab-item tab-item-${variant}`],
			classes: [
				'inline-flex items-center justify-center outline-none cursor-pointer font-medium',
				size && ButtonPaddingX[size],
				size && FieldPaddingY[size],
				size && FieldFontSize[size],

				variant === 'pills' && BgColorHover[theme],
				variant === 'pills' && ForeColorFilledHover[theme],
				variant === 'pills' && selected && BgColor[theme],
				variant === 'pills' && selected && ForeColorFilled[theme],
				variant === 'pills' && !theme && 'hover:bg-frame-100 dark:hover:bg-frame-800',
				variant === 'pills' && selected && !theme && 'bg-frame-200 dark:bg-frame-700',
				['pills'].includes(variant) && rounded && Rounded[rounded],

				variant === 'text' && 'border-b-2 border-transparent',
				variant === 'text' && 'hover:border-b-2 hover:border-frame-300 dark:hover:border-frame-600',
				variant === 'text' && theme && BorderColorHover[theme],
				variant === 'text' && selected && BorderColor[theme],
				variant === 'text' && selected && !theme && 'border-frame-400 dark:border-frame-500',

				['tabs', 'grouped'].includes(variant) &&
					theme &&
					selected && [ForeColorOutline[theme], 'bg-frame-100 dark:bg-frame-700'],
				['tabs', 'grouped'].includes(variant) &&
					!theme &&
					selected &&
					'bg-frame-200 dark:bg-frame-700',
				['tabs', 'grouped'].includes(variant) && 'hover:bg-frame-100 dark:hover:bg-frame-800',
				variant === 'grouped' &&
					rounded && [Rounded[rounded], 'rounded-none group-first:rounded-l group-last:rounded-r'],

				variant === 'tabs' && rounded && [Rounded[rounded], 'rounded-b-none'],
				selected && 'pointer-events-none'
			],
			append: [rest.class],
			focusType: context.focusType,
			focusTheme: context.focusTheme || theme
		})
	);

	const classesContent = $derived(clsxm(size && FieldFontSize[size]));

	function init(n: HTMLElement) {
		node = n;
		context.selected.set({ label, node });
		const destroy = context.selected.subscribe((s) => {
			if (s.node !== node) selected = false;
		});
		return { destroy };
	}
</script>

{#snippet createTab()}
	{#if typeof trigger === 'function'}
		{@render trigger()}
	{/if}
	{#if !trigger}
		{#if href}
			<a role="tab" {href} class={classes} onclick={() => (selected = true)}>
				{label}
			</a>
		{:else}
			<button role="tab" class={classes} onclick={() => (selected = true)}>
				{label}
			</button>
		{/if}
	{/if}
{/snippet}

<li class="flex group">
	{@render createTab()}
	{#if selected}
		<div class="hidden">
			<div class={classesContent} use:init>
				{@render children()}
			</div>
		</div>
	{/if}
</li>
