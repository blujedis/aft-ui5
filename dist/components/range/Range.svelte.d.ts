import type { ThemeColor, Size, FocusType, RoundedSize, ShadowSize } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export type RangeProps = {
    animate?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
} & ProgressTweenedOptions;
import type { ProgressTweenedOptions } from '../progress/ProgressBar.svelte';
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
declare const Range: $$__sveltets_2_IsomorphicComponent<{
    animate?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
} & ProgressTweenedOptions & Omit<ElementProps<"input">, "size">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "value">;
type Range = InstanceType<typeof Range>;
export default Range;
