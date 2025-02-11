/* eslint-disable @typescript-eslint/no-explicit-any */
export function documentEvent(name, handler, enabled = true) {
    return function initEvent(node) {
        const shouldHandle = typeof enabled === 'function' ? enabled() : enabled;
        if (!shouldHandle)
            return {};
        const _handler = (e) => handler(e, node);
        document.addEventListener(name, _handler, true);
        return {
            destroy() {
                document.removeEventListener(name, _handler, true);
            }
        };
    };
}
