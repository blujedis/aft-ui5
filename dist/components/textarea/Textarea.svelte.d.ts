import type { ElementProps } from '../../types.js';
import { type FocusType, type RoundedSize, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
export interface TextareaProps {
    chars?: number;
    disabled?: boolean;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    focusOffset?: Size | 'none';
    full?: boolean;
    resize?: keyof typeof Resize;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
    variant?: 'unstyled' | 'outlined';
}
export declare const Resize: {
    unstyled: string;
    none: string;
    x: string;
    y: string;
    both: string;
};
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
declare const Textarea: $$__sveltets_2_IsomorphicComponent<TextareaProps & ElementProps<"textarea">, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "theme" | "value">;
type Textarea = InstanceType<typeof Textarea>;
export default Textarea;
