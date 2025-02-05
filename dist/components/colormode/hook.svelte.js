import { browser } from '$app/environment';
import theme from '../../theme/theme.svelte.js';
import {} from '../../theme/types.js';
const key = 'darkmode';
const hasKey = browser && localStorage.getItem(key);
const prefersDark = (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) || false;
function getRoot() {
    if (typeof document === 'undefined')
        return null;
    return document.documentElement;
}
function setStorageValue(value) {
    if (typeof localStorage === 'undefined')
        return;
    localStorage.setItem(key, JSON.stringify(value));
}
function applyMode(value) {
    const root = getRoot();
    if (!root)
        return;
    if (value)
        root.classList.add('dark');
    else
        root.classList.remove('dark');
    theme.dark = value;
    setStorageValue(value);
}
function set(isLight = true) {
    const root = getRoot();
    if (!root)
        return;
    theme.dark = !isLight;
    applyMode(theme.dark);
}
function toggle() {
    const root = getRoot();
    if (!root)
        return theme.dark;
    const nextValue = !theme.dark;
    applyMode(nextValue);
    return nextValue;
}
function init(mode) {
    if (typeof mode === 'undefined')
        return theme.dark;
    if ((mode !== 'auto' && !hasKey) || !hasKey) {
        if (mode !== 'auto')
            set(mode === 'dark');
        else
            set(prefersDark);
    }
    return theme.dark;
}
function isDark() {
    return theme.dark;
}
export { isDark, init, set, toggle };
