/* eslint-disable @typescript-eslint/no-explicit-any */

export type EventHandler = (e: Event & { target: HTMLElement }, node: HTMLElement) => any;

export function documentEvent(name: keyof DocumentEventMap, handler: EventHandler) {
  return function initEvent(node: HTMLElement) {
    const _handler = (e: any) => handler(e, node);
    document.addEventListener(name, _handler, true);
    return {
      destroy() {
        document.removeEventListener(name, _handler, true);
      }
    };
  }
}


