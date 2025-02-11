import type { FocusType, RoundedSize, ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
export interface DatePickerProps {
    abortable?: boolean;
    autohide?: boolean;
    defaultValue?: Date | null;
    dateFormat?: Intl.DateTimeFormatOptions;
    disabled?: boolean;
    escapable?: boolean;
    firstDayOfWeek?: number;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    full?: boolean;
    inline?: boolean;
    locale?: string;
    range?: boolean;
    rangeFrom?: Date | null;
    rangeTo?: Date | null;
    rounded?: boolean | RoundedSize;
    showActionButtons?: boolean;
    title?: string;
    theme?: ThemeColor;
    inputTheme?: ThemeColor;
    buttonTheme?: ThemeColor;
    visible?: boolean;
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
declare const DatePicker: $$__sveltets_2_IsomorphicComponent<ElementProps<"input"> & DatePickerProps, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, "visible" | "value">;
type DatePicker = InstanceType<typeof DatePicker>;
export default DatePicker;
