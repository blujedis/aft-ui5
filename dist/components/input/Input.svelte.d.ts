import type { ElementProps } from '../../types.js';
import { type FocusType, type RoundedSize, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
export interface InputProps {
    chars?: number;
    disabled?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    focusOffset?: Size | 'none';
    full?: boolean;
    group?: any;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
    variant?: 'unstyled' | 'outlined';
    use?: (node: HTMLInputElement) => any;
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
declare const Input: $$__sveltets_2_IsomorphicComponent<InputProps & Omit<ElementProps<"input">, "size">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "value">;
type Input = InstanceType<typeof Input>;
export default Input;
