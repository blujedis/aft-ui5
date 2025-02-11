import { type Snippet } from 'svelte';
import { type PopperApi, type PopperProps } from '../popper/Popper.svelte';
import { type ElevationSize, type RoundedSize, type Size, type ThemeColor } from '../../theme/types.js';
import type { ElementProps } from '../../types.js';
import type { DropdownInputItem } from './DropdownInput.svelte';
export type DropdownApi = PopperApi & {
    handleKeydown: (e: KeyboardEvent) => void;
};
export type DropdownChildProps = {
    close: (e?: Event) => any;
};
export type DropdownActiveItem = {
    el?: HTMLElement | null;
    index?: number;
};
export type DropdownContext = {
    rounded: RoundedSize | false;
    size: Size;
    theme: ThemeColor;
    variant: DropdownProps['variant'];
    multiple: boolean;
    selectable: boolean;
    setSelected: (value: any) => any;
    setFocus: () => any;
};
export type DropdownProps = Omit<PopperProps, 'children' | 'arrow' | 'arrowClass'> & {
    elevation?: ElevationSize;
    rounded?: RoundedSize | false;
    scrollable?: boolean;
    size?: Size;
    theme?: ThemeColor;
    variant?: 'unstyled' | 'filled' | 'soft';
    header?: Snippet<[DropdownChildProps]>;
    children: Snippet<[DropdownChildProps]>;
    footer?: Snippet<[DropdownChildProps]>;
};
declare class __sveltets_Render<T extends DropdownInputItem> {
    props(): Omit<PopperProps, "children" | "arrow" | "arrowClass"> & {
        elevation?: ElevationSize;
        rounded?: RoundedSize | false;
        scrollable?: boolean;
        size?: Size;
        theme?: ThemeColor;
        variant?: "unstyled" | "filled" | "soft";
        header?: Snippet<[DropdownChildProps]>;
        children: Snippet<[DropdownChildProps]>;
        footer?: Snippet<[DropdownChildProps]>;
    } & ElementProps<"div">;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "theme" | "visible";
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
declare const Dropdown: $$IsomorphicComponent;
type Dropdown<T extends DropdownInputItem> = InstanceType<typeof Dropdown<T>>;
export default Dropdown;
