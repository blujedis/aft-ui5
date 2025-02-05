export function isComponent(value) {
    return value.length === 2;
}
export function isSnippet(value) {
    return value.length === 1;
}
export function optevent(predicate, fn) {
    predicate = typeof predicate === 'function' ? predicate() : predicate;
    return predicate ? fn : () => undefined;
}
