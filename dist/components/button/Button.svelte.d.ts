import { type ElementProps, type HTMLTag } from '../../types.js';
import { type Snippet } from 'svelte';
import { type Size, type FocusType, type ThemeColor, type RoundedSize, type ShadowSize } from '../../theme/types.js';
type ExtendedProps<Tag extends HTMLTag> = Tag extends 'a' ? {
    href: string | null;
} : {};
export type ButtonProps<Tag extends HTMLTag> = {
    as?: Tag;
    focusType?: FocusType;
    focusTheme?: ThemeColor;
    full?: boolean;
    role?: AriaRole;
    rounded?: RoundedSize | false;
    selected?: boolean;
    selectedTheme?: ThemeColor;
    shadow?: ShadowSize | false;
    size?: Size;
    textblock?: boolean;
    theme?: ThemeColor;
    variant?: 'unstyled' | 'filled' | 'soft' | 'outlined' | 'ghost' | 'text';
    children: Snippet;
} & ExtendedProps<Tag>;
import type { AriaRole } from 'svelte/elements';
declare class __sveltets_Render<Tag extends HTMLTag = 'button'> {
    props(): {
        as?: Tag | undefined;
        focusType?: FocusType;
        focusTheme?: ThemeColor;
        full?: boolean;
        role?: AriaRole;
        rounded?: RoundedSize | false;
        selected?: boolean;
        selectedTheme?: ThemeColor;
        shadow?: ShadowSize | false;
        size?: Size;
        textblock?: boolean;
        theme?: ThemeColor;
        variant?: "unstyled" | "filled" | "soft" | "outlined" | "ghost" | "text";
        children: Snippet;
    } & ExtendedProps<Tag> & ElementProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "theme" | "variant" | "selected";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <Tag extends HTMLTag = 'button'>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Tag>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Tag>['props']>, ReturnType<__sveltets_Render<Tag>['events']>, ReturnType<__sveltets_Render<Tag>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Tag>['bindings']>;
    } & ReturnType<__sveltets_Render<Tag>['exports']>;
    <Tag extends HTMLTag = 'button'>(internal: unknown, props: ReturnType<__sveltets_Render<Tag>['props']> & {
        $$events?: ReturnType<__sveltets_Render<Tag>['events']>;
    }): ReturnType<__sveltets_Render<Tag>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Button: $$IsomorphicComponent;
type Button<Tag extends HTMLTag = 'button'> = InstanceType<typeof Button<Tag>>;
export default Button;
