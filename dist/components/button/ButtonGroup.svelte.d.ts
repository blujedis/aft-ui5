import type { HTMLTag } from '../../types.js';
import { type Snippet } from 'svelte';
import { type ButtonProps } from './Button.svelte';
export type ButtonGroupProps<Tag extends HTMLTag> = Omit<ButtonProps<Tag>, 'variant' | 'children' | 'selected'> & {
    class?: string | null;
    multiple?: boolean;
    selected?: any;
    variant?: 'unstyled' | 'filled' | 'soft' | 'outlined' | 'text';
    children: Snippet<[Omit<ButtonProps<Tag>, 'children'>]>;
};
declare class __sveltets_Render<Tag extends HTMLTag = 'button'> {
    props(): ButtonGroupProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "selected";
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
declare const ButtonGroup: $$IsomorphicComponent;
type ButtonGroup<Tag extends HTMLTag = 'button'> = InstanceType<typeof ButtonGroup<Tag>>;
export default ButtonGroup;
