export declare const defaultFocusables: string[];
export type FocusTrapAction = (node: HTMLElement) => {
    destroy: () => void;
};
export type FocusTrapEvent = (event: KeyboardEvent) => void;
export type FocusTrapOptions = {
    enabled?: boolean;
    focusables?: string[];
    child?: string;
};
export declare function focustrap(enabled?: boolean): [FocusTrapAction, FocusTrapEvent];
export declare function focustrap(options?: FocusTrapOptions): [FocusTrapAction, FocusTrapEvent];
