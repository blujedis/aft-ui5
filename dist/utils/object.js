/* eslint-disable @typescript-eslint/no-explicit-any */
export function cleanObj(obj = {}, exclude = []) {
    return Object.entries(obj).reduce((a, [key, val]) => {
        if (exclude.includes(key))
            return a;
        if (typeof val !== 'undefined')
            a[key] = val;
        return a;
    }, {});
}
/**
 * Picks properties from object returning new partial object.
 *
 * @param obj the object to pick values from.
 * @param keys the keys to be picked.
 */
export function pick(obj = {}, keys = []) {
    if (!keys.length)
        return obj;
    return keys.reduce((a, c) => {
        if (typeof obj[c] !== 'undefined')
            a[c] = obj[c];
        return a;
    }, {});
}
/**
 * Omits keys from an object.
 *
 * @param obj the object to omit properties from.
 * @param keys the keys to be omitted.
 */
export function omit(obj = {}, keys = []) {
    if (!keys.length)
        return obj;
    return Object.keys(obj).reduce((a, c) => {
        if (keys.includes(c))
            return a;
        a[c] = obj[c];
        return a;
    }, {});
}
/**
 * Clones an object using JSON.parse/JSON.stringify.
 *
 * @param obj the object you wish to clone.
 */
export function simpleClone(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }
    catch (ex) {
        return obj;
    }
}
/**
 * Converts FormData to simple object literal.
 *
 * @param formData the FormData instance to convert to object.
 */
export function formToObject(formData) {
    const obj = {};
    for (const [prop, value] of Object.entries(formData)) {
        obj[prop] = value;
    }
    return obj;
}
export function serializeError(err, strinigfy = false) {
    const result = {};
    for (const key of Object.getOwnPropertyNames(err)) {
        const val = err[key];
        if (val !== null && !Array.isArray(val) && typeof val === 'object') {
            result[key] = serializeError(val);
        }
        else {
            result[key] = val;
        }
    }
    if (!strinigfy)
        return result;
    let args = [];
    if (strinigfy === 'pretty')
        args = [...args, null, 2];
    return JSON.stringify(result, ...args);
}
