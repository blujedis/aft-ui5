import { type Snippet } from 'svelte';
export interface DisclosureButtonProps<Tag extends HTMLTag> {
    as?: Tag;
    mode?: 'open' | 'close' | 'toggle';
    children: Snippet;
}
import type { ElementProps, HTMLTag } from '../../types.js';
declare class __sveltets_Render<Tag extends HTMLTag = 'button'> {
    props(): DisclosureButtonProps<Tag> & ElementProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "";
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
declare const DisclosureButton: $$IsomorphicComponent;
type DisclosureButton<Tag extends HTMLTag = 'button'> = InstanceType<typeof DisclosureButton<Tag>>;
export default DisclosureButton;
