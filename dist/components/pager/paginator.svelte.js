export function getParam(params, param = 'page', def = 1) {
    const value = params.get(param);
    if (value === null)
        return def;
    return Number(value);
}
export function getUrl(url = '', page = 1, param = 'page') {
    if (!page || page === '...')
        return '';
    const [href, query] = url.split('?');
    const params = new URLSearchParams(query);
    params.set(param, String(page));
    return [href, params.toString()].join('?');
}
export function paginator(options = {}) {
    // eslint-disable-next-line prefer-const
    let { rows, current, displayed, buttons, ellipsis } = {
        rows: 0,
        current: 1,
        displayed: 10,
        buttons: 10,
        ellipsis: '',
        ...options
    };
    // Total number of pages based on the
    // size or number of items to display.
    const totalPages = Math.ceil(rows / displayed);
    // ensure current page isn't out of range
    if (current < 1)
        current = 1;
    else if (current > totalPages)
        current = totalPages;
    let firstPage;
    let lastPage;
    // Total is less than shown so show all pages.
    if (totalPages <= buttons) {
        firstPage = 1;
        lastPage = totalPages;
    }
    else {
        // Caclulate before/after current page.
        const pagesBeforeCurrent = Math.floor(buttons / 2);
        const pagesAfterCurrent = Math.ceil(buttons / 2) - 1;
        // Calculate start
        if (current <= pagesBeforeCurrent) {
            firstPage = 1;
            lastPage = buttons;
        }
        // Calcutate end
        else if (current + pagesAfterCurrent >= totalPages) {
            firstPage = totalPages - buttons + 1;
            lastPage = totalPages;
        }
        // Calcluate middle of range.
        else {
            firstPage = current - pagesBeforeCurrent;
            lastPage = current + pagesAfterCurrent;
        }
    }
    // Get start record for range.
    const firstIndex = (current - 1) * displayed;
    // Get end record for range.
    const lastIndex = Math.min(firstIndex + displayed - 1, rows - 1);
    // Array of pages.
    const pagesRaw = Array.from(Array(totalPages).keys()).map(i => i + 1);
    let pages = Array.from(Array(lastPage + 1 - firstPage).keys()).map((i) => firstPage + i);
    if (ellipsis) {
        const prefix = [];
        const suffix = [];
        if (!pages.includes(1)) {
            prefix.push(1);
            if (pages[0] > 2)
                prefix.push('...');
        }
        if (!pages.includes(totalPages - 1))
            suffix.push('...');
        if (!pages.includes(totalPages))
            suffix.push(totalPages);
        pages = [...prefix, ...pages, ...suffix];
    }
    const nextPage = Math.min(lastPage, (current || 1) + 1);
    const prevPage = Math.max(1, (current || 1) - 1);
    return {
        rows, // total number of rows
        current, // the current page.
        totalPages, // total pages based on size/count of items displayed.
        firstPage, // the start page in the pages array.
        lastPage, // the end page in the pages array.
        firstIndex, // the starting index in the range.
        lastIndex, // the ending index in the range.
        firstRecord: firstIndex + 1,
        lastRecord: lastIndex + 1,
        pages, // the array of pages number for current config.
        pagesRaw,
        nextPage, // the next page.
        prevPage, // the previous page.
        range: (firstIndex + 1) + '-' + (lastIndex + 1) + ' of ' + rows
    };
}
