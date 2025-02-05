import type { Snippet } from 'svelte';
import { type TransitionParams } from '../../utils/transitioner.js';
export type ModalPosition = 'top' | 'center' | 'bottom' | 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'top-center' | 'center-center' | 'bottom-center';
export type ModalProps = {
    abortable?: boolean;
    backdrop?: string | boolean;
    escapable?: boolean;
    labelby?: string;
    position?: ModalPosition;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    transition?: TransitionParams;
    visible?: boolean | number;
    onClose?: () => void;
    children: Snippet;
};
export declare const ModalTransitions: {
    zoom: {
        duration: number;
        start: number;
        type: string;
    };
    swipe: {
        duration: number;
        axis: string;
        type: string;
    };
    dissolve: {
        duration: number;
        start: number;
        type: string;
    };
    focus: import("svelte/transition").BlurParams;
    expand: import("svelte/transition").SlideParams;
    announce: import("svelte/transition").FlyParams;
    reveal: import("svelte/transition").FlyParams;
};
import type { RoundedSize, ShadowSize } from '../../theme/types.js';
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Modal: $$__sveltets_2_IsomorphicComponent<ModalProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "visible">;
type Modal = InstanceType<typeof Modal>;
export default Modal;
