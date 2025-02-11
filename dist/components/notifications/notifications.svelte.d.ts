import type { ThemeColor } from '../../theme/types.js';
import type { Component, Snippet } from 'svelte';
export type NotificationState = 'active' | 'locked' | 'unlocked';
export type NotificationPosition = 'top' | 'bottom' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
interface NotificationBase {
    dismissible?: boolean;
    duration?: number;
    group: string;
    theme?: ThemeColor;
}
export interface NotificationOptions extends NotificationBase {
    position?: NotificationPosition;
    state?: NotificationState;
}
export type NotificationProps = {
    content?: string | Component | Snippet;
    dismissible?: boolean;
    duration?: number;
    group: string;
    title?: string;
} & NotificationBase;
export type NotificationInternalProps = NotificationProps & {
    readonly key: string;
    readonly position: NotificationPosition;
};
export interface NotificationGroup {
    options: Required<NotificationOptions>;
    notifications: NotificationInternalProps[];
}
export type NotificationStore = Record<string, NotificationGroup>;
export interface NotificationApi {
    getItems: () => NotificationInternalProps[];
    add: (notification: Omit<NotificationProps, 'group'>) => NotificationInternalProps;
    remove: (key: string) => NotificationInternalProps[];
    activate: () => void;
    lock: () => void;
    unlock: () => void;
}
declare function getItems(group?: string): NotificationInternalProps[];
declare function add(notification: NotificationProps): NotificationInternalProps;
declare function remove(group: string, key: string): NotificationInternalProps[];
declare function activate(group?: string): void;
declare function lock(group?: string): void;
declare function unlock(group?: string): void;
declare function initNotifier(group: string): NotificationApi;
declare function initNotifier(options: NotificationOptions): NotificationApi;
declare const getNotifier: (group?: string) => NotificationApi;
export { initNotifier, getNotifier, getItems, add, remove, activate, lock, unlock };
