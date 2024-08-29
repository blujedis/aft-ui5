<script context="module" lang="ts">
	import {
		FillColor,
		FillColorHover,
		FocusTypes,
		type FocusType,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { Snippet } from 'svelte';
	import type { IconifyIcon } from '@iconify/svelte';
	import type { ElementProps } from '$lib/types.js';
	import Icon from '../icon/Icon.svelte';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldFontSize } from '$lib/theme/constants.js';
	import clsx from 'clsx';

	export interface BreadcrumbItemProps {
		readonly index?: number; // only used when generated from Breadcrumb parent.
		label?: string;
		focusType: FocusType;
		focusTheme: ThemeColor;
		home?: boolean;
		href?: string;
		icon?: string | IconifyIcon;
		sronly?: string; // when present no label is used.
		selected?: boolean;
		separator?: string | IconifyIcon;
		size?: Size;
		theme?: ThemeColor;
		children?: Snippet;
	}

	export const BreadcrumbMargins = {
		unstyled: '',
		xs: 'ml-1',
		sm: 'ml-2',
		md: 'ml-2',
		lg: 'ml-2',
		xl: 'ml-2',
		xl2: 'ml-2'
	};

	const IconSize = {
		unstyled: '',
		xs: 'w-3.5 h-3.5',
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-7 h-7',
		xl2: 'w-7 h-7'
	};
</script>

<script lang="ts">
	let {
		focusType = 'visible',
		focusTheme,
		home,
		href,
		icon,
		label,
		selected,
		separator = 'mdi-chevron-right',
		size,
		sronly,
		theme,
		children,
		...rest
	}: BreadcrumbItemProps & ElementProps<'a'> = $props();

	const wrapperClasses = $derived(
		buildClass({
			prepend: ['breadcrumb-item-wrapper'],
			classes: ['flex items-center']
		})
	);

	const itemClasses = $derived(
		buildClass({
			prepend: [
				`breadcrumb-item breadcrumb-item-${theme || 'unstyled'}`,
				selected && `breadcrumb-item-selected`
			],
			classes: [
				'flex items-center',
				size && FieldFontSize[size],
				size && BreadcrumbMargins[size],
				theme && FillColor[theme],
				theme && FillColorHover[theme],
				!theme &&
					'text-frame-500 dark:text-frame-200 hover:text-frame-600 dark:hover:text-frame-300',
				'aria-selected:pointer-events-none outline-none aria-selected:opacity-60',
				rest.class
			],
			focusType,
			focusTheme: focusTheme || theme
		})
	);

	const iconClasses = $derived(
		clsx(
			'flex-shrink-0 pointer-events-none',
			theme && FillColor[theme],
			!theme && 'text-frame-500 dark:text-frame-200 hover:text-frame-600 dark:hover:text-frame-300',
			size && IconSize[size]
		)
	);
</script>

<li>
	<div class={wrapperClasses}>
		{#if !home}
			<div class="flex items-center">
				<Icon icon={separator} class={iconClasses} />
			</div>
		{/if}

		<a
			{...rest}
			role="tab"
			aria-current={selected ? 'location' : null}
			aria-selected={selected}
			{href}
			class={itemClasses}
		>
			{#if icon}
				<Icon {icon} class={iconClasses} theme="unstyled" />
			{/if}

			{#if sronly}
				<span class="sr-only">{sronly}</span>
			{/if}

			{#if label}
				<div class="mb-px">
					{label}
				</div>
			{/if}
		</a>
	</div>
</li>
