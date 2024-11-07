<script module lang="ts">
	import type { FocusType, ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';

	export interface DatePickerProps {
		abortable?: boolean;
		autohide?: boolean;
		defaultDate?: Date | null;
		dateFormat?: Intl.DateTimeFormatOptions;
		disabled?: boolean;
		escapable?: boolean;
		firstDayOfWeek?: number; // 0 = Mon, 6 = Sun.
		focusType?: FocusType;
		focusTheme?: ThemeColor;
		full?: boolean;
		inline?: boolean;
		locale?: string;
		range?: boolean;
		rangeFrom?: Date | null;
		rangeTo?: Date | null;
		showActionButtons?: boolean;
		title?: string;

		theme?: ThemeColor;
		inputTheme?: ThemeColor;
		calendarTheme?: ThemeColor;
		visible?: boolean;
		onChanged?: (value: any) => any;
	}
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '../button/Button.svelte';
	import { focustrap } from '$lib/hooks/focustrap.js';
	import { documentEvent } from '$lib/utils/events.js';
	import Input from '../input/Input.svelte';
	import { clsxm } from '$lib/utils/string.js';

	let {
		abortable = true,
		autohide = true,
		dateFormat = { year: 'numeric', month: 'long', day: 'numeric' },
		defaultDate,
		disabled = false,
		escapable = true,
		firstDayOfWeek = 0,
		full,
		inline = false,
		locale = 'default',
		placeholder,
		range = false,
		rangeFrom = null,
		rangeTo = null,
		required,
		showActionButtons = false,
		theme = 'danger',
		title,
		value = $bindable(),
		visible = $bindable(false),
		...rest
	}: ElementProps<'input'> & DatePickerProps = $props();

	let dispatch = (arg: any) => {};
	let input: HTMLInputElement;

	let picker = $state() as HTMLDivElement;
	let currentMonth = $state(value || defaultDate || new Date()) as Date;
	let focusedDate = $state() as Date;
	let daysInMonth = $derived.by(() => {
		currentMonth.setDate(1); // Set to first day of the month
		return getMonthDays(currentMonth);
	});
	let weekdays = $derived(getWeekdays());

	const classesWrapper = $derived(clsxm('relative inline-flex', full && 'w-full'));

	const clickOutside = documentEvent('click', handleClickOutside, () => !!abortable);
	const [focustrapAction, focustrapHandler] = focustrap();

	function getMonthDays(date: Date) {
		const year = date.getFullYear();
		const month = date.getMonth();
		const firstDay = new Date(year, month, 0);
		const lastDay = new Date(year, month + 1, 0);
		const days: Date[] = [];

		// Prepend prev month days.
		let start = firstDay.getDay() - firstDayOfWeek;

		if (start < 0) start += 7;
		for (let i = 0; i < start; i++) {
			days.push(new Date(year, month, -i));
		}

		// Current month days.
		for (let i = 1; i <= lastDay.getDate(); i++) {
			days.push(new Date(year, month, i));
		}

		// Append next month days
		const remainingDays = 7 - (days.length % 7);
		if (remainingDays < 7) {
			for (let i = 1; i <= remainingDays; i++) {
				days.push(new Date(year, month + 1, i));
			}
		}

		return days;
	}

	function getWeekdays() {
		const weekdays = [] as string[];
		for (let i = 0; i < 7; i++) {
			const day = new Date(2021, 5, i + firstDayOfWeek);
			weekdays.push(day.toLocaleString(locale, { weekday: 'short' }));
		}
		return weekdays;
	}

	function changeMonth(increment: number) {
		currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1);
	}

	function handleSelectDay(day: Date) {
		if (range) {
			if (!rangeFrom || (rangeFrom && rangeTo)) {
				rangeFrom = day;
				rangeTo = null;
			} else if (day < rangeFrom) {
				rangeTo = rangeFrom;
				rangeFrom = day;
			} else {
				rangeTo = day;
			}
			// dispatch('select', { from: rangeFrom, to: rangeTo });
		} else {
			value = day;
			// dispatch('select', value);
			if (autohide && !inline) visible = false;
		}
	}

	function handleInputChange() {
		const date = new Date(input.value);
		if (!isNaN(date.getTime())) {
			handleSelectDay(date);
		}
	}

	function formatDate(date: Date | null): string {
		if (!date) return '';
		return date.toLocaleDateString(locale, dateFormat);
	}

	function isSelected(day: Date): boolean {
		if (range) {
			return (
				!!(rangeFrom && day.toDateString() === rangeFrom.toDateString()) ||
				!!(rangeTo && day.toDateString() === rangeTo.toDateString())
			);
		}
		return !!(value && day.toDateString() === value.toDateString());
	}

	function inRange(day: Date): boolean {
		if (!range || !rangeFrom || !rangeTo) return false;
		return day > rangeFrom && day < rangeTo;
	}

	function isToday(day: Date): boolean {
		const today = new Date();
		return day.toDateString() === today.toDateString();
	}

	function handleCalendarKeydown(event: KeyboardEvent) {
		if (!visible) return;

		if (!focusedDate) {
			focusedDate = value || new Date();
		}

		switch (event.key) {
			case 'ArrowLeft':
				focusedDate = new Date(
					focusedDate.getFullYear(),
					focusedDate.getMonth(),
					focusedDate.getDate() - 1
				);
				break;
			case 'ArrowRight':
				focusedDate = new Date(
					focusedDate.getFullYear(),
					focusedDate.getMonth(),
					focusedDate.getDate() + 1
				);
				break;
			case 'ArrowUp':
				focusedDate = new Date(
					focusedDate.getFullYear(),
					focusedDate.getMonth(),
					focusedDate.getDate() - 7
				);
				break;
			case 'ArrowDown':
				focusedDate = new Date(
					focusedDate.getFullYear(),
					focusedDate.getMonth(),
					focusedDate.getDate() + 7
				);
				break;
			case 'Enter':
				handleSelectDay(focusedDate);
				break;
			case 'Escape':
				visible = false;
				input.focus();
				break;
			default:
				return;
		}

		event.preventDefault();
		if (focusedDate.getMonth() !== currentMonth.getMonth()) {
			currentMonth = new Date(focusedDate.getFullYear(), focusedDate.getMonth(), 1);
		}

		// Focus the button for the focused date
		setTimeout(() => {
			const focusedButton = picker.querySelector(
				`button[aria-label="${focusedDate!.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}"]`
			) as HTMLButtonElement | null;
			focusedButton?.focus();
		}, 0);
	}

	function handleInputKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			visible = !visible;
		}
	}

	function handleToday() {
		handleSelectDay(new Date());
	}

	function handleClear() {
		value = null;
		rangeFrom = null;
		rangeTo = null;
		dispatch('clear');
	}

	function handleApply() {
		// dispatch('apply', range ? { from: rangeFrom, to: rangeTo } : value);
		if (!inline) visible = false;
	}

	function handleClickOutside(e: Event & { target: HTMLElement }, node: HTMLElement) {
		const shouldClose =
			(node && !node.contains(e.target) && !e.defaultPrevented && visible) || false;
		if (!shouldClose) return;
		handleClose(e);
	}

	function handleEscape(e: KeyboardEvent) {
		const shouldEscape = (escapable || typeof escapable === 'undefined') && visible;
		if (!shouldEscape || e.key !== 'Escape') return;
		e.preventDefault();
		handleClose(e);
	}

	function handleClose(e?: Event) {
		visible = false;
	}

	function getDayStyle(day: Date) {
		const base = 'w-full h-8 font-normal aria-selected:pointer-events-none';
		const curr = day.getMonth() === currentMonth.getMonth();
		if (!curr) return base + 'text-frame-400 dark:text-frame-400';
		if (isToday(day) && !isSelected(day))
			return base + 'font-medium bg-frame-300 dark:bg-frame-600';
		if (inRange(day)) return base;
		return base;
	}

	function init(node: HTMLInputElement) {
		input = node;
	}
</script>

<svelte:window onkeydown={handleEscape} />

<div class={classesWrapper} use:clickOutside>
	{#if !inline}
		<div class="relative w-full">
			<Input
				{...rest}
				use={init}
				type="text"
				aria-haspopup="dialog"
				value={range ? `${formatDate(rangeFrom)} - ${formatDate(rangeTo)}` : formatDate(value)}
				{disabled}
				{required}
				{theme}
				full
				onfocus={() => (visible = true)}
				oninput={handleInputChange}
				onkeydown={handleInputKeydown}
			/>

			<button
				type="button"
				class="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 focus:outline-none"
				onclick={() => (visible = !visible)}
				{disabled}
				aria-label={visible ? 'Close date picker' : 'Open date picker'}
			>
				<svg
					class="w-4 h-4 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
					></path>
				</svg>
			</button>
		</div>
	{/if}

	{#if visible || inline}
		<div
			bind:this={picker}
			id="datepicker-dropdown"
			class="
    {inline ? '' : 'absolute z-10 mt-1'}
    bg-white dark:bg-frame-700 rounded-md shadow-lg"
			transition:fade={{ duration: 100 }}
			role="dialog"
			aria-label="Calendar"
		>
			<div class="p-4 min-w-72" role="application">
				{#if title}
					<h2 class="text-lg font-semibold mb-4 dark:text-white">{title}</h2>
				{/if}

				<div class="flex items-center justify-between mb-4">
					<Button onclick={() => changeMonth(-1)} {theme} size="sm" aria-label="Previous month">
						<svg
							class="w-3 h-3 rtl:rotate-180 text-white dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 5H1m0 0 4 4M1 5l4-4"
							></path></svg
						>
					</Button>

					<h3 class="text-lg font-semibold dark:text-white" aria-live="polite">
						{currentMonth.toLocaleString(locale, { month: 'long', year: 'numeric' })}
					</h3>

					<Button onclick={() => changeMonth(1)} {theme} size="sm" aria-label="Next month">
						<svg
							class="w-3 h-3 rtl:rotate-180 text-white dark:text-white"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 10"
							><path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 5h12m0 0L9 1m4 4L9 9"
							></path>
						</svg>
					</Button>
				</div>

				<div class="grid grid-cols-7 gap-1" role="grid">
					{#each weekdays as day}
						<div
							class="text-center text-sm font-medium text-gray-500 dark:text-gray-400"
							role="columnheader"
						>
							{day}
						</div>
					{/each}

					{#each daysInMonth as day}
						<Button
							role="gridcell"
							variant={isSelected(day) ? 'filled' : 'unstyled'}
							theme={isSelected(day) ? theme : undefined}
							size="sm"
							class={getDayStyle(day)}
							aria-label={day.toLocaleDateString(locale, {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
							aria-selected={isSelected(day)}
							onclick={() => handleSelectDay(day)}
							onkeydown={handleCalendarKeydown}
						>
							{day.getDate()}
						</Button>
					{/each}
				</div>

				{#if showActionButtons}
					<div class="mt-4 flex justify-between">
						<Button onclick={handleToday} {theme} size="sm">Today</Button>
						<Button onclick={handleClear} theme="danger" size="sm">Clear</Button>
						<Button onclick={handleApply} {theme} size="sm">Apply</Button>
					</div>
				{/if}
			</div>
		</div>
		{#if inline}
			<input
				{...rest}
				use:init
				type="text"
				value={range ? `${formatDate(rangeFrom)} - ${formatDate(rangeTo)}` : formatDate(value)}
				{disabled}
				{required}
			/>
		{/if}
	{/if}
</div>
