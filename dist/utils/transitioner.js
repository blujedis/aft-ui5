import { fly, fade, scale, blur, slide, crossfade } from 'svelte/transition';
export const transitions = {
    fly,
    fade,
    scale,
    blur,
    slide,
    crossfade
};
export const TransitionOptions = {
    dissolve: { duration: 200, start: 0.5, type: 'fade' },
    focus: { duration: 400, amount: 5, opacity: 0, type: 'blur' },
    expand: { duration: 400, axis: 'y', type: 'slide' },
    swipe: { duration: 400, axis: 'x', type: 'slide' },
    zoom: { duration: 200, start: 0.7, type: 'scale' },
    announce: { duration: 400, y: -300, type: 'fly' },
    reveal: { duration: 400, y: 300, type: 'fly' }
};
export function transitioner(node, options) {
    if (!options)
        return {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let config = options;
    if (typeof options === 'string')
        config = TransitionOptions[options];
    else
        config = options;
    const { type, ...rest } = config;
    if (!type)
        return rest;
    return transitions[type](node, rest);
}
