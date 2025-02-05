export type EventHandler = (e: Event & {
    target: HTMLElement;
}, node: HTMLElement) => any;
export declare function documentEvent(name: keyof DocumentEventMap, handler: EventHandler, enabled?: boolean | ((...args: any[]) => boolean)): (node: HTMLElement) => {
    destroy?: undefined;
} | {
    destroy(): void;
};
