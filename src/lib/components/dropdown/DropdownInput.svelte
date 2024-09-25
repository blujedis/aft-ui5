<script module lang="ts">
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

	export interface DropdownInputContext<T extends DropdownInputItem> {
		event: PopperEvent;
		escapable: boolean;
		labelKey: keyof T;
		multiple: boolean;
		rounded: RoundedSize;
		target: string;
		theme: ThemeColor;
		trigger: string;
		valueKey: keyof T;
		setVisibility: (value: boolean) => any;
		setPopper: (api: DropdownApi) => any;
		getSelected: () => T[];
		getSelectedByIndex: (index: number) => T | null;
		setSelected: (value: any) => any;
		setFocus: () => any;
	}

	export interface DropdownInputApi {
		create: any;
		remove: any;
	}

	export type DropdownInputItem = {
		persist?: boolean; // item cannot be removed.
	} & Record<string, any>;

	export interface DropdownInputProps<T extends DropdownInputItem> {
		clearable?: boolean;
		creatable?: boolean;
		disabled?: boolean;
		escapable?: boolean;
		filterable?: boolean;
		filtered?: T[];
		findByLabel?: (label: string | undefined, items: T[]) => T | null | undefined;
		findByValue?: (value: any, items: T[]) => T | null | undefined;
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		focusOffset?: Size | 'none';
		full?: boolean;
		items: T[];
		labelKey?: keyof T;
		placeholder?: string;
		query?: string;
		removable?: boolean;
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

	const BadgeRoundedMap = {
		unstyled: '',
		false: '',
		none: 'none',
		full: 'full',
		xs: 'xs',
		sm: 'sm',
		md: 'sm',
		lg: 'md',
		xl: 'md',
		xl2: 'lg'
	} as any;
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
		filtered = $bindable(),
		findByLabel,
		findByValue,
		focusType = 'within',
		focusTheme,
		focusOffset = 'none',
		full,
		items: initItems = [],
		labelKey = 'label',
		placeholder = 'Select...',
		query = $bindable(),
		removable,
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
		onRemove = () => true,
		onCreate,
		children,
		...rest
	}: DropdownInputProps<T> & ElementProps<'select'> = $props();

	let input = $state(null) as HTMLInputElement | null;
	let chars = $state() as string;
	let filtering = $state(false);
	let visible = $state(false);
	let dropdown = $state() as DropdownApi;
	let items = $state(initItems);

	const defaultValue = Array.isArray(value) ? [...value] : value;
	const multiple = Array.isArray(defaultValue);
	const selected = $derived.by(() => initSelected(value)) as T | T[];
	const showPlaceholder = $derived(!!placeholder && !filtering && !selected?.length);
	const uid = uniqid().replace(/^#/, '');
	const triggerId = 'dropdown-trigger-' + uid;
	const targetId = 'dropdown-target-' + uid;

	setContext('DropdownInput', {
		event: 'focus',
		escapable,
		labelKey,
		multiple,
		rounded,
		theme,
		target: '.' + targetId,
		trigger: '.' + triggerId,
		valueKey,
		setVisibility: (val: boolean) => (visible = val),
		setPopper: (val: DropdownApi) => (dropdown = val),
		getSelected: () => value,
		getSelectedByIndex: (index: number) => {
			if (filtered) return filtered[index];
			return null;
		},
		setSelected,
		setFocus: handleFocus
	} as DropdownInputContext<T>);

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
			'items-center relative flex-1 overflow-hidden flex-wrap',
			!multiple && 'grid overflow-hidden',
			multiple && 'flex pb-1.5',
			// size && !multiple && FieldPaddingX[size],
			size && !multiple && !(creatable || filterable) && FieldPaddingY[size],
			size && !multiple && 'pr-0'
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
			classes: ['flex min-w-0', !theme && 'focus:outline-frame-500/50', 'ml-2 mt-1.5'],
			focusType: 'visible',
			focusTheme: focusTheme || theme,
			focusOffset: 'none',
			focusWidth: 'md'
		})
	);

	const inputContainerClasses = $derived(
		clsxm(
			'inline-grid grid-cols-[0px_min-content] visible input-container',
			multiple && 'grid-area',
			!multiple && 'flex-auto'
		)
	);

	const inputClasses = $derived(
		clsxm(
			`
			dropdown-input-input grid-area-input	bg-transparent min-w-2 w-full outline-none 
			border-none focus:ring-0 m-0 p-0 cursor-default`,
			multiple && 'ml-2',
			size && FieldFontSize[size],
			!selected?.length && size && 'mt-1.5',
			selected?.length && 'mt-1.5'
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

	const placeholderMulti = $derived(clsxm('flex items-center ml-2 mt-1.5'));

	// Helper Functions

	function findItemByValue(val: any) {
		if (findByValue) return findByValue(val, items);
		return items.find((item) => item[valueKey] == val);
	}

	function findItemByLabel(label?: string) {
		if (typeof label === 'undefined') return;
		if (findByLabel) return findByLabel(label, items);
		return items.find((item) => (item[labelKey] as string).toLowerCase() === label.toLowerCase());
	}

	function getLabelByItem(item: T) {
		if (typeof item === 'undefined') return '';
		return (item[labelKey] || '') as string;
	}

	function initSelected(val: any) {
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
		if (!query) return [...items];
		return items.filter((item) => {
			return getLabelByItem(item).toLowerCase().startsWith(query.toLowerCase());
		});
	}

	async function resetValues() {
		const shouldClear = await onReset();
		if (!shouldClear) return;
		filtering = false;
		chars = '';
		query = '';
		if (input) input.value = '';
	}

	function setSelected(val: any) {
		if (multiple) {
			if (value.includes(val))
				value = value.filter((v: any) => v !== val); // exists remove
			else value.push(val); //= [...value, val]; // new add
		} else {
			if (value === val || typeof val === 'undefined')
				value = ''; // clear single val.
			else value = val; // set single value.
		}
	}

	function createItem(label?: string) {
		const exists = findItemByLabel(label);
		if (exists) return;
		const result = (onCreate || ((label) => ({ [labelKey]: label, [valueKey]: label }) as T))(
			label as string
		);
		if (typeof result === 'undefined' || result === false) return;
		items.push(result);
		return result;
	}

	function handleRemove(item: T) {
		if (!multiple || !item || !removable || item.persist) return;
		try {
			const shouldRemove = onRemove(item);
			if (shouldRemove && item) setSelected(item[valueKey]);
			resetValues();
		} catch (ex) {
			console.error(ex);
		}
	}

	function handleReset(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		e.preventDefault();
		resetValues();
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
		e.preventDefault();
		filtering = false;
		const found = filterItems(query);
		if (found?.length) {
			setSelected(found[0][valueKey]);
		} else if (creatable) {
			const item = createItem((e.currentTarget as HTMLInputElement).value);
			if (item) setSelected(item[valueKey]);
		}
		resetValues();
	}

	function handleFocus(
		e?: FocusEvent & {
			currentTarget: EventTarget & HTMLElement;
		}
	) {
		if (!visible && e) dropdown?.open(e);
		setTimeout(() => {
			if (filterable || creatable) {
				input?.focus();
			}
		});
	}

	function handleKeydown(e: KeyboardEvent) {
		if (
			!dropdown ||
			e.repeat ||
			!['ArrowDown', 'ArrowUp', 'Backspace', 'Tab', 'Enter', 'Backspace'].includes(e.key)
		)
			return;

		if (e.key === 'Backspace' && multiple && !query?.length && removable) {
			filtering = false;
			const sel = $state.snapshot(selected) as T[];
			if (sel.length) setSelected(sel[sel.length - 1][valueKey]);
			return;
		}

		if (['Enter', 'Tab'].includes(e.key)) {
			if (!creatable || (e.key === 'Tab' && !multiple)) return;
			(e.currentTarget as HTMLInputElement).blur();
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
		filtered = filterItems(query);
	});
</script>

<div class={containerClasses}>
	<div tabindex="-1" class={valueContainerClasses} onfocus={handleFocus}>
		{#if !multiple}
			<div class={valueClasses}>
				{#if showPlaceholder}
					{placeholder}
				{:else if !filtering && !multiple}
					{#if !Array.isArray(selected)}
						{getLabelByItem(selected as T)}
					{/if}
				{/if}
				&nbsp;
			</div>
		{/if}
		{#if Array.isArray(selected)}
			{#each selected as item}
				<ConditionalSnippet user={tag}>
					<button type="button" onclick={createRemove(item)} class={tagClasses}>
						<Badge
							variant="soft"
							removable
							hoverable
							rounded={!rounded ? '' : BadgeRoundedMap[rounded]}
							{theme}>{getLabelByItem(item)}</Badge
						>
					</button>
				</ConditionalSnippet>
			{/each}
		{/if}

		{#if creatable || filterable}
			<div class={inputContainerClasses} data-value={chars}>
				<!-- svelte-ignore a11y_role_has_required_aria_props -->
				<input
					bind:this={input}
					tabindex="-1"
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
				{#if multiple && showPlaceholder && !selected?.length}
					<div class={placeholderMulti}>{placeholder}</div>
				{/if}
			</div>
		{/if}
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

{#if multiple}
	<select {...rest} class="sr-only" bind:value multiple>
		<option value="" selected disabled>Select...</option>
		{#if filtered?.length}
			{#each filtered as item}
				<option value={item[valueKey]}>
					{item[labelKey]}
				</option>
			{/each}
		{/if}
	</select>
{:else}
	<select {...rest} class="sr-only" bind:value>
		<option value="" selected disabled>Select...</option>
		{#if filtered?.length}
			{#each filtered as item}
				<option value={item[valueKey]} selected={selected === item[valueKey]}>
					{item[labelKey]}
				</option>
			{/each}
		{/if}
	</select>
{/if}

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
