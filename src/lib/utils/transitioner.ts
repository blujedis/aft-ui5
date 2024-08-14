
import {
  fly, fade, scale, blur, slide, crossfade,
  type BlurParams, type FadeParams, type FlyParams, type ScaleParams, type SlideParams,
  type TransitionConfig
} from 'svelte/transition';

export type TransitionerOption = keyof typeof transitionOptions;

export type Transitions = keyof typeof transitions;

export type TransitionOptions = Record<string, unknown> & { type: Transitions } | TransitionerOption | FadeParams | BlurParams | SlideParams | ScaleParams | FlyParams;

export const transitions = {
  fly,
  fade,
  scale,
  blur,
  slide,
  crossfade
};

export const transitionOptions = {
  dissolve: { duration: 200, start: 0.5, type: 'fade' } as FadeParams,
  focus: { duration: 400, amount: 5, opacity: 0, type: 'blur' } as BlurParams,
  expand: { duration: 400, axis: 'y', type: 'slide' } as SlideParams,
  swipe: { duration: 400, axis: 'x', type: 'slide' } as SlideParams,
  zoom: { duration: 200, start: 0.7, type: 'scale' } as ScaleParams,
  announce: { duration: 400, y: -300, type: 'fly' } as FlyParams,
  reveal: { duration: 400, y: 300, type: 'fly' } as FlyParams
};

export const modalTransitions = {
  ...transitions,
  zoom: { duration: 200, start: 0.925, type: 'scale' },
  swipe: { duration: 200, axis: 'y', type: 'slide' },
  dissolve: { duration: 200, start: 0.8, type: 'fade' }
};

export function transitioner(
  node: HTMLElement,
  options: TransitionOptions
): TransitionConfig {
  if (!options) return {} as TransitionConfig;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let config = options as any;
  if (typeof options === 'string')
    config = transitionOptions[options] as Record<string, unknown> & {
      type: Transitions;
    };
  else config = options;
  const { type, ...rest } = config;
  if (!type) return rest as TransitionConfig;
  return transitions[type as keyof typeof transitions](node, rest) as TransitionConfig;
}