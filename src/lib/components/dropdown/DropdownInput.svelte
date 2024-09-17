<script context="module" lang="ts">
	import type { ConfigProps } from '$lib/theme/build.svelte.js';
	import { getContext, onMount, setContext, type Snippet } from 'svelte';
	import {
		BgColorHint,
		FillColor,
		RingColor,
		type FocusType,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import type { DropdownApi } from './Dropdown.svelte';

	export interface DropdownInputContext {
		multiple: boolean;
		setVisibility: (value: boolean) => any;
		setPopper: (api: DropdownApi) => any;
		getSelected: () => any[];
		setSelected: (value: any) => any;
		onBeforeOpen: (e: Event) => boolean | Promise<boolean>;
	}

	export type DropdownInputItem = {
		label?: string;
		value?: any;
	} & Record<string, unknown>;

	export interface DropdownInputProps<T extends DropdownInputItem> {
		clearable?: boolean;
		disabled?: boolean;
		filterable?: boolean;
		filter?: (item: T, index: number, items: T[]) => boolean;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		full?: boolean;
		items?: T[];
		labelKey?: keyof T;
		newable?: boolean;
		placeholder?: string;
		query?: string;
		rounded?: ConfigProps['rounded'];
		shadow?: ConfigProps['shadow'];
		size?: Size;
		theme?: ThemeColor;
		valueKey?: keyof T;
		value?: any;
		variant?: 'unstyled' | 'outlined';
		clear?: Snippet;
		caret?: Snippet;
		tag?: Snippet;
		children: Snippet;
	}
</script>

<script lang="ts" generics="T extends DropdownInputItem">
	import t from '$lib/theme/theme.svelte.js';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import { FieldFontSize, FieldPaddingX, FieldPaddingY } from '$lib/theme/constants.js';
	import { clsxm } from '$lib/utils/string.js';
	import ConditionalSnippet from '../conditional/ConditionalSnippet.svelte';
	import Icon from '../icon/Icon.svelte';
	import Badge from '../badge/Badge.svelte';
	import { uniqid } from '$lib/utils/misc.js';

	let {
		clearable,
		disabled,
		filterable,
		filter,
		focusType = 'within',
		focusTheme,
		focusOffset = 'none',
		full,
		items = $bindable([]),
		labelKey = 'label',
		newable,
		placeholder = 'Filter...',
		query = $bindable(),
		rounded,
		shadow,
		size = 'md',
		theme,
		valueKey = 'id',
		value = $bindable(),
		variant,
		clear,
		caret,
		tag,
		children,
		...rest
	}: DropdownInputProps<T> & ElementProps<'select'> = $props();

	let input: HTMLInputElement | null = null;
	let chars = $state() as string | string[];
	let filtering = $state(false);
	let visible = $state(false);
	let dropdown = $state() as DropdownApi;
	let canOpen = $state(true);

	const defaultValue = Array.isArray(value) ? [...value] : value;
	const multiple = Array.isArray(defaultValue);
	const filtered = $derived.by(() => getItem(value));
	const showPlaceholder = $derived(placeholder && !filtering && !filtered);

	setContext('DropdownInput', {
		multiple,
		setVisibility: (val: boolean) => (visible = val),
		setPopper: (val: DropdownApi) => (dropdown = val),
		getSelected: () => value,
		setSelected,
		onBeforeOpen: () => canOpen
	} as DropdownInputContext);

	const containerClasses = $derived(
		buildClass({
			prepend: [
				`dropdown-input dropdown-input -${variant || 'default'} dropdown-input-${theme || 'default'}`
			],
			classes: [
				`group flex items-center justify-between relative outline-none transition-transform delay-100`,
				'ring-1 ring-inset focus-within:ring-offset-0 focus-within:ring-inset',
				multiple && 'flex-wrap',
				t.options.input,
				theme && FillColor[theme],
				theme && BgColorHint[theme],
				theme && RingColor[theme],
				size && FieldFontSize[size],
				!theme &&
					'ring-frame-300 focus:ring-frame-300 dark:ring-frame-700 dark:focus-within:ring-frame-700 focus-within:outline-frame-500/50',
				(!theme || theme === 'light') &&
					'focus-within:ring-frame-500 dark:focus-within:ring-frame-400',
				theme === 'dark' && 'dark:focus-within:ring-frame-500',
				theme && ['light', 'dark', 'white'].includes(theme) && 'text-dark dark:text-light'
			],
			disabled,
			focusType,
			focusTheme: focusTheme || theme,
			focusOffset,
			focusRingColor: theme,
			full,
			rounded,
			shadow
		})
	);

	const valueContainerClasses = $derived(
		clsxm(
			'items-center flex-1 relative overflow-hidden flex-wrap',
			!multiple && 'grid overflow-hidden',
			multiple && 'flex',
			size && !multiple && FieldPaddingX[size],
			size && !multiple && 'pr-0'
			// multiple && 'pl-2'
			// size && FieldPaddingY[size]
		)
	);

	const valueClasses = $derived(
		clsxm(
			`
			grid-area
			items-center overflow-hidden whitespace-nowrap overflow-ellipsis ...
			`,
			showPlaceholder && t.options.placeholder,
			multiple && 'justify-between'
		)
	);

	const inputContainerClasses = $derived(
		clsxm(
			'inline-grid grid-cols-[0px_min-content] visible flex-auto input-container',
			!multiple && 'grid-area',
			multiple && 'flex-auto'
		)
	);

	const inputClasses = $derived(
		clsxm(
			`
			grid-area-input	bg-transparent min-w-2 w-full outline-none 
			border-none focus:ring-0 m-0 p-0`,
			multiple && 'ml-2',
			size && FieldFontSize[size],
			size && FieldPaddingY[size]
			// size && FieldPaddingX[size],
		)
	);

	const iconContainerClasses = $derived(
		clsxm(
			'flex items-center shrink-0 self-stretch justify-between divide-x',
			t.options.divide,
			size && FieldPaddingY[size]
		)
	);

	const iconClasses = $derived(
		clsxm(
			'flex items-center transition-transform duration-300 outline-none',
			'px-1.5'
			// size && FieldFontSize[size],
			// size && FieldPaddingY[size],
		)
	);

	function setSelected(val: any) {
		if (multiple) {
			if (value.includes(val))
				value = value.filter((v: any) => v !== val); // exists remove
			else value = [...value, val]; // new add
		} else {
			if (value === val || typeof val === 'undefined')
				value = ''; // clear single val.
			else value = val; // set single value.
		}
		return value; // return the updated value.
	}

	function getItem(item: any): T | T[] | string {
		if (Array.isArray(item))
			return item.reduce((result, item) => {
				const found = getItem(item);
				if (found) result = [...result, found];
				return result;
			}, [] as T[]);
		const result = items.find((i) => i[valueKey] == item);
		if (multiple) return result || [];
		return result || '';
	}

	function filterItems(query = '', exact = false) {
		if (!query) return items;
		const found = items.filter(
			filter ||
				((item) => {
					const value = item[labelKey] + '';
					return value.toLowerCase().startsWith(query);
				})
		);
		if (!exact) return found;
		return found.find((item) => (item[labelKey] + '').toLowerCase() === query.toLowerCase());
	}

	function getLabel(item: T) {
		if (typeof item === 'undefined') return '';
		return item[labelKey] || '';
	}

	function handleClear(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		e.stopPropagation();
		e.preventDefault();
		if (input) input.value = '';
		query = '';
		if (multiple) {
			value = [];
		} else {
			value = '';
		}
	}

	function handleInput(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		filtering = true;
		const el = e.target as HTMLInputElement;
		chars = el.value;
		query = el.value;
	}

	function handleChange(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const el = e.target as HTMLInputElement;
		filtering = false;
		if (!multiple) {
			const found = filterItems(query, true) as T | undefined;
			if (found) setSelected(found[valueKey]);
			chars = '';
			query = '';
			el.value = '';
		}
	}

	function handleFocus(
		e: FocusEvent & {
			currentTarget: EventTarget & HTMLElement;
		}
	) {
		e.stopPropagation();
		e.preventDefault();
		setTimeout(() => {
			if (filterable) input?.focus();
		});
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!dropdown || e.repeat || !['ArrowDown', 'ArrowUp'].includes(e.key)) return;
		dropdown?.handleKeydown(e);
	}

	function createRemove(item: T) {
		return (
			e: MouseEvent & {
				currentTarget: EventTarget & HTMLButtonElement;
			}
		) => {
			e.stopPropagation();
			e.preventDefault();
			setSelected(item[valueKey]);
		};
	}
</script>

<div class={containerClasses} onfocus={handleFocus}>
	<div class={valueContainerClasses}>
		{#if !multiple}
			<div class={valueClasses}>
				{#if showPlaceholder}
					{placeholder}
				{:else if !filtering && !multiple}
					{#if !Array.isArray(filtered)}
						{getLabel(filtered as T)}
					{/if}
				{/if}
				&nbsp;
			</div>
		{/if}
		{#if Array.isArray(filtered)}
			{#each filtered as item}
				<ConditionalSnippet user={tag}>
					<button type="button" onclick={createRemove(item)} class="flex min-w-0 m-1.5 mr-0">
						<Badge variant="filled" removable {theme} class="pointer-events-none"
							>{getLabel(item)}</Badge
						>
					</button>
				</ConditionalSnippet>
			{/each}
		{/if}
		<div class={inputContainerClasses} data-value={chars}>
			<input
				tabindex="0"
				inputmode={filterable ? 'search' : 'none'}
				role="combobox"
				type="text"
				autocapitalize="none"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				aria-autocomplete="list"
				aria-expanded="false"
				aria-haspopup="true"
				aria-readonly={!filterable ? true : false}
				class={inputClasses}
				oninput={handleInput}
				onchange={handleChange}
				onkeydown={handleKeydown}
			/>
		</div>
	</div>
	<div class={iconContainerClasses}>
		{#if clearable}
			<div class="flex self-stretch">
				{#if value}
					<button type="button" class={iconClasses} onclick={handleClear}>
						<ConditionalSnippet user={clear}>
							<Icon icon="mdi:close" size="full" />
						</ConditionalSnippet>
					</button>
				{/if}
			</div>
		{/if}
		<div class="flex self-stretch">
			<button type="button" class:rotate-180={!visible} class={iconClasses} onclick={handleFocus}>
				<ConditionalSnippet user={caret}>
					<Icon icon="clarity:caret-line" size="full" />
				</ConditionalSnippet>
			</button>
		</div>
	</div>
</div>

{@render children()}

<select {...rest} class="sr-only" bind:value></select>

<style>
	.grid-area {
		grid-area: 1 / 1 / 2 / 3;
	}
	.grid-area-input {
		grid-area: 1 / 2;
	}
	.input-container:after {
		white-space: pre;
		content: attr(data-value) ' ';
		grid-area: 1/2;
		min-width: 2px;
		outline: 0;
		margin: 0;
		padding: 0;
		border: 0;
		color: transparent;
	}

	/* .value-container {
		grid-area: 1 /1 /2 /3;
	} */
	/* .input-container {
		grid-area: 1 / 1 / 2 / 3;
		 grid-template-columns: 0px min-content; 
	} */
	/* .input {
		grid-area: 1 / 2;
		background: 0px center; 
		opacity: 1;
	} */
</style>
