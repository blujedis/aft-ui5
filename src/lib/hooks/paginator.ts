export interface PaginatorOptions {
	items?: number; // the number of items in the collection or a collection itself.
	current?: string | number | null; // the current selected page that is selected.
	count?: number; // the number of items per page ex: 10, 25, 50.
	buttons?: number; // number of pages shown, your button count.
	ellipsis?: boolean; // when true include ellipsis in active pages collection.
}

export interface Paginator extends PaginatorOptions {
	total: number;
	firstPage: number;
	lastPage: number;
	firstIndex: number;
	lastIndex: number;
	displayed: (string | number)[];
	next: number;
	previous: number;
}

export function paginator(options = {} as PaginatorOptions) {
	// eslint-disable-next-line prefer-const
	let { items, current, count, buttons, ellipsis } = {
		items: 0,
		current: 1,
		count: 10,
		buttons: 10,
		ellipsis: false,
		param: 'page',
		...options
	} as Required<PaginatorOptions>;

	current = Number(current);

	// Total number of pages based on the
	// size or number of items to display.
	const total = Math.ceil(items / count);

	// ensure current page isn't out of range
	if (current < 1) current = 1;
	else if (current > total) current = total;

	let firstPage: number;
	let lastPage: number;

	// Total is less than shown so show all pages.
	if (total <= buttons) {
		firstPage = 1;
		lastPage = total;
	} else {
		// Caclulate before/after current page.
		const pagesBeforeCurrent = Math.floor(buttons / 2);
		const pagesAfterCurrent = Math.ceil(buttons / 2) - 1;

		// Calculate start
		if (current <= pagesBeforeCurrent) {
			firstPage = 1;
			lastPage = buttons;
		}

		// Calcutate end
		else if (current + pagesAfterCurrent >= total) {
			firstPage = total - buttons + 1;
			lastPage = total;
		}

		// Calcluate middle of range.
		else {
			firstPage = current - pagesBeforeCurrent;
			lastPage = current + pagesAfterCurrent;
		}
	}

	// Get start record for range.
	const firstIndex = (current - 1) * count;

	// Get end record for range.
	const lastIndex = Math.min(firstIndex + count - 1, items - 1);

	// Array of pages.
	let displayed = Array.from(Array(lastPage + 1 - firstPage).keys()).map((i) => firstPage + i) as (
		| string
		| number
	)[];

	if (ellipsis) {
		const prefix = [] as (string | number)[];
		const suffix = [] as (string | number)[];

		if (!displayed.includes(1)) {
			prefix.push(1);
			if ((displayed[0] as number) > 2) prefix.push('...');
		}

		if (!displayed.includes(total - 1)) suffix.push('...');
		if (!displayed.includes(total)) suffix.push(total);

		displayed = [...prefix, ...displayed, ...suffix];

	}

	const next = Math.min(lastPage, (current || 1) + 1);
	const previous = Math.max(1, (current || 1) - 1);


	const api: Paginator = {
		items, // collection length of items
		current, // the current page.
		count, // the items size/count shown per page.
		buttons: buttons, // the number of page buttons to display.
		ellipsis, // when true ellipsis are included as needed.

		total, // total pages based on size/count of items displayed.
		firstPage, // the start page in the pages array.
		lastPage, // the end page in the pages array.
		firstIndex, // the starting index in the range.
		lastIndex, // the ending index in the range.
		displayed, // the array of pages number for current config.
		next, // the next page.
		previous, // the previous page.
	};

	return api;
}
