<script module lang="ts">
	import type { ThemeColor } from '$lib/theme/types.js';
	import type { ElementProps } from '$lib/types.js';
	import type { Snippet } from 'svelte';

	export interface DatePickerProps {
		autohide?: boolean;
		defaultDate?: Date | null;
		dateFormat: Intl.DateTimeFormatOptions;
		firstDayOfWeek?: number; // 0 = Mon, 6 = Sun.
		inline?: boolean;
		locale?: string;
		range?: boolean;
		rangeFrom?: Date | null;
		rangeTo?: Date | null;
		showActionButtons?: boolean;
		theme?: ThemeColor;
		title?: string;
		children?: Snippet;
	}
</script>

<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '../button/Button.svelte';

	let {
		autohide,
		dateFormat = { year: 'numeric', month: 'long', day: 'numeric' },
		defaultDate,
		disabled,
		firstDayOfWeek = 0,
		inline = false,
		locale = 'default',
		placeholder,
		range = false,
		rangeFrom = null,
		rangeTo = null,
		required,
		showActionButtons,
		theme,
		title,
		value,
		children
	}: DatePickerProps & ElementProps<'input'> = $props();

	let dispatch: any;

	let input: HTMLInputElement;
	let calendarRef: HTMLDivElement;

	let visible: boolean = inline;
	let currentMonth: Date = value || defaultDate || new Date();
	let focusedDate: Date;

	currentMonth.setDate(1); // Set to first day of the month

	let daysInMonth = $derived(getDaysInMonth(currentMonth));
	let weekdays = $derived(getWeekdays());

	function getDaysInMonth(date: Date): Date[] {
		const year = date.getFullYear();
		const month = date.getMonth();
		const firstDay = new Date(year, month, 0);
		const lastDay = new Date(year, month + 1, 0);
		const daysArray: Date[] = [];

		// Add days from previous month to fill the first week
		let start = firstDay.getDay() - firstDayOfWeek;
		if (start < 0) start += 7;
		for (let i = 0; i < start; i++) {
			daysArray.push(new Date(year, month, -i));
		}

		// Add days of the current month
		for (let i = 1; i <= lastDay.getDate(); i++) {
			daysArray.push(new Date(year, month, i));
		}

		// Add days from next month to fill the last week
		const remainingDays = 7 - (daysArray.length % 7);
		if (remainingDays < 7) {
			for (let i = 1; i <= remainingDays; i++) {
				daysArray.push(new Date(year, month + 1, i));
			}
		}

		return daysArray;
	}

	function getWeekdays(): string[] {
		const weekdays = [];
		for (let i = 0; i < 7; i++) {
			const day = new Date(2021, 5, i + firstDayOfWeek);
			weekdays.push(day.toLocaleString(locale, { weekday: 'short' }));
		}
		return weekdays;
	}

	function changeMonth(increment: number) {
		currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1);
	}

	function handleDaySelect(day: Date) {
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
			dispatch('select', { from: rangeFrom, to: rangeTo });
		} else {
			value = day;
			dispatch('select', value);
			if (autohide && !inline) visible = false;
		}
	}

	function handleInputChange() {
		const date = new Date(input.value);
		if (!isNaN(date.getTime())) {
			handleDaySelect(date);
		}
	}

	function handleClickOutside(event: MouseEvent) {
		if (visible && !input.contains(event.target as Node)) {
			visible = false;
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

	function isInRange(day: Date): boolean {
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
				handleDaySelect(focusedDate);
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
			const focusedButton = calendarRef.querySelector(
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
		handleDaySelect(new Date());
	}

	function handleClear() {
		value = null;
		rangeFrom = null;
		rangeTo = null;
		dispatch('clear');
	}

	function handleApply() {
		dispatch('apply', range ? { from: rangeFrom, to: rangeTo } : value);
		if (!inline) visible = false;
	}

	function getFocusRingClass(c: any) {
		return '';
	}
	function getRangeBackgroundClass(c: any) {
		return '';
	}
	let color = '';
	let inputClass = '';
</script>

<div class="relative">
	{#if !inline}
		<div class="relative">
			<input
				bind:this={input}
				type="text"
				class="w-full px-4 py-2 text-sm border rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600 {getFocusRingClass(
					color
				)} {inputClass}"
				{placeholder}
				value={range ? `${formatDate(rangeFrom)} - ${formatDate(rangeTo)}` : formatDate(value)}
				onfocus={() => (visible = true)}
				oninput={handleInputChange}
				onkeydown={handleInputKeydown}
				{disabled}
				{required}
				aria-haspopup="dialog"
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
			bind:this={calendarRef}
			id="datepicker-dropdown"
			class="
    {inline ? '' : 'absolute z-10 mt-1'}
    bg-white dark:bg-gray-800 rounded-md shadow-lg"
			transition:fade={{ duration: 100 }}
			role="dialog"
			aria-label="Calendar"
		>
			<div class="p-4" role="application">
				{#if title}
					<h2 class="text-lg font-semibold mb-4 dark:text-white">{title}</h2>
				{/if}
				<div class="flex items-center justify-between mb-4">
					<Button onclick={() => changeMonth(-1)} {color} size="sm" aria-label="Previous month">
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
					<Button onclick={() => changeMonth(1)} {color} size="sm" aria-label="Next month">
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
							></path></svg
						>
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
							color={isSelected(day) ? color : 'alternative'}
							size="sm"
							class="w-full h-8 {day.getMonth() !== currentMonth.getMonth()
								? 'text-gray-300 dark:text-gray-600'
								: ''} {isToday(day) ? 'font-bold' : ''} {isInRange(day)
								? getRangeBackgroundClass(color)
								: ''}"
							onclick={() => handleDaySelect(day)}
							onkeydown={handleCalendarKeydown}
							aria-label={day.toLocaleDateString(locale, {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
							aria-selected={isSelected(day)}
							role="gridcell"
						>
							{day.getDate()}
						</Button>
					{/each}
				</div>


				{#if showActionButtons}
					<div class="mt-4 flex justify-between">
						<Button onclick={handleToday} {color} size="sm">Today</Button>
						<Button onclick={handleClear} color="red" size="sm">Clear</Button>
						<Button onclick={handleApply} {color} size="sm">Apply</Button>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
