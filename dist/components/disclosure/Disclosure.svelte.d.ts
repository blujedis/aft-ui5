import type { HTMLTag } from '../../types.js';
import type { TransitionParams } from '../../utils/transitioner.js';
import { type Snippet } from 'svelte';
interface SnippetMethods {
    open: () => void;
    close: () => void;
    toggle: () => void;
}
export type DisclosureProps<Tag extends HTMLTag> = {
    as?: Tag;
    abortable?: boolean;
    escapable?: boolean;
    visible?: boolean;
    transition?: TransitionParams;
    children: Snippet<[SnippetMethods]>;
};
export interface DisclosureContext {
    setPanel: (node: HTMLElement) => void;
    escapable: boolean;
    isVisible: () => boolean;
    transition: TransitionParams;
    open: () => void;
    close: () => void;
    toggle: () => void;
}
declare class __sveltets_Render<Tag extends HTMLTag = 'div'> {
    props(): DisclosureProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "visible";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <Tag extends HTMLTag = 'div'>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Tag>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Tag>['props']>, ReturnType<__sveltets_Render<Tag>['events']>, ReturnType<__sveltets_Render<Tag>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Tag>['bindings']>;
    } & ReturnType<__sveltets_Render<Tag>['exports']>;
    <Tag extends HTMLTag = 'div'>(internal: unknown, props: ReturnType<__sveltets_Render<Tag>['props']> & {
        $$events?: ReturnType<__sveltets_Render<Tag>['events']>;
    }): ReturnType<__sveltets_Render<Tag>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Disclosure: $$IsomorphicComponent;
type Disclosure<Tag extends HTMLTag = 'div'> = InstanceType<typeof Disclosure<Tag>>;
export default Disclosure;
