<script context="module" lang="ts">
	import { onMount, setContext, type Snippet } from 'svelte';
	import {
		BgColorHint,
		FillColor,
		RingColor,
		type FocusType,
		type RoundedSize,
		type ShadowSize,
		type Size,
		type ThemeColor
	} from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import type { DropdownApi } from './Dropdown.svelte';

	export interface DropdownInputContext {
		event: PopperEvent;
		escapable: boolean;
		multiple: boolean;
		target: string;
		theme: ThemeColor;
		trigger: string;
		setVisibility: (value: boolean) => any;
		setPopper: (api: DropdownApi) => any;
		getSelected: () => any[];
		setSelected: (value: any) => any;
	}

	export interface DropdownInputApi {
		create: any;
		remove: any;
	}

	export type DropdownInputItem = {
		static?: boolean; // item cannot be removed.
	} & Record<string, any>;

	export interface DropdownInputProps<T extends DropdownInputItem> {
		clearable?: boolean;
		creatable?: boolean;
		disabled?: boolean;
		escapable?: boolean;
		filterable?: boolean;
		findByLabel?: (label: string | undefined, items: T[]) => T | null | undefined;
		findByValue?: (value: any, items: T[]) => T | null | undefined;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		full?: boolean;
		items?: T[];
		labelKey?: keyof T;
		placeholder?: string;
		query?: string;
		rounded?: RoundedSize | false;
		shadow?: ShadowSize | false;
		size?: Size;
		theme?: ThemeColor;
		valueKey?: keyof T;
		value?: any;
		variant?: 'unstyled' | 'outlined';
		clear?: Snippet;
		caret?: Snippet;
		tag?: Snippet;
		onRemove?: (item: T) => boolean;
		onReset?: () => boolean;
		onCreate?: (label: string) => T | undefined | false;
		children: Snippet;
	}
</script>

<script lang="ts" generics="T extends DropdownInputItem">
	import t from '$lib/theme/theme.svelte.js';
	import { buildClass } from '$lib/theme/build.svelte.js';
	import {
		FieldFontSize,
		FieldPaddingX,
		FieldPaddingY,
		IconButtonPaddingX
	} from '$lib/theme/constants.js';
	import { clsxm } from '$lib/utils/string.js';
	import ConditionalSnippet from '../conditional/ConditionalSnippet.svelte';
	import Icon from '../icon/Icon.svelte';
	import Badge from '../badge/Badge.svelte';
	import type { PopperEvent } from '../popper/Popper.svelte';
	import { uniqid } from '$lib/utils/misc.js';

	let {
		clearable,
		creatable,
		disabled,
		escapable = true,
		filterable,
		findByLabel,
		findByValue,
		focusType = 'within',
		focusTheme,
		focusOffset = 'none',
		full,
		items = $bindable([]),
		labelKey = 'label',
		placeholder = 'Filter...',
		query = $bindable(),
		rounded,
		shadow,
		size = 'md',
		theme = $bindable(),
		valueKey = 'id',
		value = $bindable(),
		variant,
		clear,
		caret,
		tag,
		onReset = () => true,
		onRemove = () => false,
		onCreate,
		children,
		...rest
	}: DropdownInputProps<T> & ElementProps<'select'> = $props();

	let input: HTMLInputElement | null = null;
	let chars = $state() as string;
	let filtering = $state(false);
	let visible = $state(false);
	let dropdown = $state() as DropdownApi;

	const source = $state([...items]);
	const defaultValue = Array.isArray(value) ? [...value] : value;
	const multiple = Array.isArray(defaultValue);
	const filtered = $derived.by(() => initValue(value));
	const showPlaceholder = $derived(placeholder && !filtering && !filtered);
	const uid = uniqid().replace(/^#/, '');
	const triggerId = 'dropdown-trigger-' + uid;
	const targetId = 'dropdown-target-' + uid;

	setContext('DropdownInput', {
		event: 'focus',
		escapable,
		multiple,
		theme,
		target: '.' + targetId,
		trigger: '.' + triggerId,
		setVisibility: (val: boolean) => (visible = val),
		setPopper: (val: DropdownApi) => (dropdown = val),
		getSelected: () => value,
		setSelected
	} as DropdownInputContext);

	// CSS Classes

	const containerClasses = $derived(
		buildClass({
			prepend: [
				`dropdown-input dropdown-input-${variant || 'default'} dropdown-input-${theme || 'default'} ${targetId}`
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
					'ring-frame-300 focus:ring-frame-300 dark:ring-frame-700 focus-within:outline-frame-500/50 dark:focus-within:ring-frame-700',
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

	const tagClasses = $derived(
		buildClass({
			classes: ['flex min-w-0 m-1.5 mr-0', !theme && 'focus:outline-frame-500/50'],
			focusType: 'visible',
			focusTheme: focusTheme || theme,
			focusOffset: 'none',
			focusWidth: 'md'
		})
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
			dropdown-input-input grid-area-input	bg-transparent min-w-2 w-full outline-none 
			border-none focus:ring-0 m-0 p-0 cursor-default`,
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

	const iconButtonClasses = $derived(
		buildClass({
			classes: [
				'flex items-center transition-transform duration-300 outline-none mx-1.5 rounded-md',
				!theme && 'focus:outline-frame-500/50',
				size && IconButtonPaddingX[size]
			],
			focusType: 'visible',
			focusTheme: focusTheme || theme,
			focusWidth: 'md',
			focusOffset: 'none'
		})
	);

	// Helper Functions

	function findItemByValue(val: any) {
		if (findByValue) return findByValue(val, items);
		return source.find((item) => item[valueKey] == val);
	}

	function findItemByLabel(label?: string) {
		if (typeof label === 'undefined') return;
		if (findByLabel) return findByLabel(label, items);
		return source.find((item) => (item[labelKey] as string).toLowerCase() === label.toLowerCase());
	}

	function getLabelByItem(item: T) {
		if (typeof item === 'undefined') return '';
		return (item[labelKey] || '') as string;
	}

	function initValue(val: any) {
		if (typeof val === 'undefined') return '';
		if (Array.isArray(val)) {
			return val.reduce((result, v) => {
				const found = findItemByValue(v);
				if (found) result = [...result, found];
				return result;
			}, [] as T[]);
		}
		return findItemByValue(val) || '';
	}

	// Default filter simply uses .startsWith
	// pass in user defined filter function
	// with more advanced fuzzy search if desired.
	function filterItems(query = '') {
		if (!query) return source;
		return source.filter((item) => {
			return getLabelByItem(item).toLowerCase().startsWith(query);
		});
	}

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

	function createItem(label?: string) {
		const exists = findItemByLabel(label);
		if (exists) return;
		const result = (onCreate || ((label) => ({ [labelKey]: label, [valueKey]: label }) as T))(
			label as string
		);
		if (!result) return;
		items = [...items, result];
		setSelected(result[valueKey]);
	}

	function handleRemove(item: T) {
		if (!multiple || !item) return;
		try {
			const shouldRemove = onRemove(item);
			if (shouldRemove && item) setSelected(item[valueKey]);
		} catch (ex) {
			console.error(ex);
		}
	}

	// function handleCreate(label: string) {
	// 	if (!label) return;
	// 	return { [labelKey]: label, [valueKey]: label } as T;
	// }

	function handleReset(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		e.preventDefault();
		Promise.resolve(onReset())
			.then((shouldClear) => {
				if (!shouldClear) return;
				if (input) input.value = '';
				query = '';
				if (multiple) {
					value = [];
				} else {
					value = '';
				}
			})
			.catch(console.error);
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
		const found = filterItems(query);
		if (found?.length) setSelected(found[0][valueKey]);
		else if (creatable) createItem(query);
		chars = '';
		query = '';
		el.value = '';
	}

	function handleFocus(
		e: FocusEvent & {
			currentTarget: EventTarget & HTMLElement;
		}
	) {
		dropdown?.open(e);
		setTimeout(() => {
			if (filterable || creatable) input?.focus();
		});
	}

	function handleKeydown(e: KeyboardEvent) {
		if (
			!dropdown ||
			e.repeat ||
			!['ArrowDown', 'ArrowUp', 'Backspace', 'Enter'].includes(e.key) ||
			(e.key === 'Backspace' && !multiple)
		)
			return;
		if (e.key === 'Backspace') {
			handleRemove(findItemByValue(value[value.length - 1]) as T);
		}

		if (e.key === 'Enter' && creatable) {
			//	return createItem((e.currentTarget as HTMLInputElement).value);
			return;
		}

		// Reach here we are navigating.
		dropdown?.handleKeydown(e);
	}

	function createRemove(item: T) {
		return async (
			e: MouseEvent & {
				currentTarget: EventTarget & HTMLButtonElement;
			}
		) => {
			e.preventDefault();
			handleRemove(item);
		};
	}
	$effect(() => {
		items = filterItems(query);
	});
</script>

<div class={containerClasses}>
	<div tabindex="-1" class={valueContainerClasses} onfocus={handleFocus}>
		{#if !multiple}
			<div class={valueClasses}>
				{#if showPlaceholder}
					{placeholder}
				{:else if !filtering && !multiple}
					{#if !Array.isArray(filtered)}
						{getLabelByItem(filtered as T)}
					{/if}
				{/if}
				&nbsp;
			</div>
		{/if}

		{#if Array.isArray(filtered)}
			{#each filtered as item}
				<ConditionalSnippet user={tag}>
					<button type="button" onclick={createRemove(item)} class={tagClasses}>
						<Badge variant="filled" removable {theme} class="pointer-events-none"
							>{getLabelByItem(item)}</Badge
						>
					</button>
				</ConditionalSnippet>
			{/each}
		{/if}

		<div class={inputContainerClasses} data-value={chars}>
			<!-- svelte-ignore a11y_role_has_required_aria_props -->
			<input
				bind:this={input}
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
					<button
						tabindex="0"
						type="button"
						class={iconButtonClasses + ' dropdown-input-clear'}
						onclick={handleReset}
					>
						<ConditionalSnippet user={clear}>
							<Icon icon="mdi:close" size="full" />
						</ConditionalSnippet>
					</button>
				{/if}
			</div>
		{/if}
		<div class="flex self-stretch">
			<button
				tabindex="0"
				type="button"
				class:rotate-180={!visible}
				class={iconButtonClasses + ` ${triggerId}`}
				onfocus={handleFocus}
			>
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
