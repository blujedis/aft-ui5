import type { ElementProps } from '../../types.js';
import { type FocusType, type Size, type ThemeColor, type RoundedSize, type ShadowSize } from '../../theme/types.js';
export interface CheckboxProps {
    disabled?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    group?: any;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
}
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
declare const Checkbox: $$__sveltets_2_IsomorphicComponent<CheckboxProps & Omit<ElementProps<"input">, "size">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "group" | "theme">;
type Checkbox = InstanceType<typeof Checkbox>;
export default Checkbox;
