import { type Snippet } from 'svelte';
import { type FocusType, type RoundedSize, type ShadowSize, type Size, type ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
import type { DropdownApi } from './Dropdown.svelte';
export interface DropdownInputContext<T extends DropdownInputItem> {
    event: PopperEvent;
    escapable: boolean;
    labelKey: keyof T;
    multiple: boolean;
    rounded: RoundedSize;
    target: string;
    theme: ThemeColor;
    trigger: string;
    valueKey: keyof T;
    setVisibility: (value: boolean) => any;
    setPopper: (api: DropdownApi) => any;
    getSelected: () => T[];
    getSelectedByIndex: (index: number) => T | null;
    setSelected: (value: any) => any;
    setFocus: () => any;
}
export interface DropdownInputApi {
    create: any;
    remove: any;
}
export type DropdownInputItem = {
    persist?: boolean;
} & Record<string, any>;
export interface DropdownInputProps<T extends DropdownInputItem> {
    clearable?: boolean;
    creatable?: boolean;
    disabled?: boolean;
    escapable?: boolean;
    filterable?: boolean;
    filtered?: T[];
    findByLabel?: (label: string | undefined, items: T[]) => T | null | undefined;
    findByValue?: (value: any, items: T[]) => T | null | undefined;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    focusOffset?: Size | 'none';
    full?: boolean;
    items: T[];
    labelKey?: keyof T;
    placeholder?: string;
    query?: string;
    removable?: boolean;
    rounded?: RoundedSize | false;
    shadow?: ShadowSize | false;
    size?: Size;
    theme?: ThemeColor;
    valueKey?: keyof T;
    value?: any;
    variant?: 'unstyled' | 'outlined';
    clear?: Snippet;
    caret?: Snippet;
    tag?: Snippet;
    onRemove?: (item: T) => boolean;
    onReset?: () => boolean;
    onCreate?: (label: string) => T | undefined | false;
    children: Snippet;
}
import type { PopperEvent } from '../popper/Popper.svelte';
declare class __sveltets_Render<T extends DropdownInputItem> {
    props(): DropdownInputProps<T> & ElementProps<"select">;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "theme" | "value" | "filtered" | "query";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <T extends DropdownInputItem>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<T>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<T>['props']>, ReturnType<__sveltets_Render<T>['events']>, ReturnType<__sveltets_Render<T>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<T>['bindings']>;
    } & ReturnType<__sveltets_Render<T>['exports']>;
    <T extends DropdownInputItem>(internal: unknown, props: ReturnType<__sveltets_Render<T>['props']> & {
        $$events?: ReturnType<__sveltets_Render<T>['events']>;
    }): ReturnType<__sveltets_Render<T>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const DropdownInput: $$IsomorphicComponent;
type DropdownInput<T extends DropdownInputItem> = InstanceType<typeof DropdownInput<T>>;
export default DropdownInput;
