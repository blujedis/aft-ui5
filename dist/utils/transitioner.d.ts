import { fly, fade, scale, blur, slide, crossfade, type BlurParams, type FadeParams, type FlyParams, type ScaleParams, type SlideParams, type TransitionConfig } from 'svelte/transition';
export type TransitionerOption = keyof typeof TransitionOptions;
export type Transitions = keyof typeof transitions;
export type TransitionParams = Record<string, unknown> & {
    type: Transitions;
} | TransitionerOption | FadeParams | BlurParams | SlideParams | ScaleParams | FlyParams;
export declare const transitions: {
    fly: typeof fly;
    fade: typeof fade;
    scale: typeof scale;
    blur: typeof blur;
    slide: typeof slide;
    crossfade: typeof crossfade;
};
export declare const TransitionOptions: {
    dissolve: FadeParams;
    focus: BlurParams;
    expand: SlideParams;
    swipe: SlideParams;
    zoom: ScaleParams;
    announce: FlyParams;
    reveal: FlyParams;
};
export declare function transitioner(node: HTMLElement, options?: TransitionParams): TransitionConfig;
