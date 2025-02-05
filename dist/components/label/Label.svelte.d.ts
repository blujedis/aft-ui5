import type { DropShadowSize, RoundedSize, Size, ThemeColor } from '../../theme/types.js';
import type { Snippet } from 'svelte';
export interface LabelProps {
    inline?: boolean;
    rounded?: RoundedSize | false;
    dropShadow?: DropShadowSize | false;
    justify?: Exclude<keyof typeof JustifyContent, 'stretch'>;
    reverse?: boolean;
    size?: Size;
    theme?: ThemeColor;
    visible?: boolean;
    children: Snippet;
}
import type { ElementProps } from '../../types.js';
import { JustifyContent } from '../../theme/constants.js';
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
declare const Label: $$__sveltets_2_IsomorphicComponent<LabelProps & ElementProps<"label">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme">;
type Label = InstanceType<typeof Label>;
export default Label;
