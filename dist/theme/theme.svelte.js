import { browser } from '$app/environment';
import { options, settings } from './globals.js';
import {} from './types.js';
const currentTheme = $state({
    dark: (browser && JSON.parse(localStorage.getItem('darkmode') || 'false')) || false,
    settings,
    options
});
export function updateTheme(theme = {}) {
    for (const k in theme) {
        if (typeof theme[k] === 'undefined')
            continue;
        const curVal = currentTheme[k];
        const nextVal = theme[k];
        if (typeof curVal === 'object' && typeof nextVal !== 'object')
            throw new Error(`Type mismatch for prop ${k}`);
        if (typeof curVal === 'object' && typeof nextVal === 'object' && !Array.isArray(curVal) && !Array.isArray(nextVal)) {
            currentTheme[k] = { ...currentTheme[k], ...theme[k] };
        }
        else {
            currentTheme[k] = theme[k];
        }
    }
    return currentTheme;
}
export default currentTheme;
