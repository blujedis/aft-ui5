import type { ElementProps, HTMLTag } from '../../types.js';
import { type Snippet } from 'svelte';
export type DisclosurePanelProps<Tag extends HTMLTag> = {
    as?: Tag;
    children: Snippet;
};
declare class __sveltets_Render<Tag extends HTMLTag = 'div'> {
    props(): DisclosurePanelProps<Tag> & ElementProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "";
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
declare const DisclosurePanel: $$IsomorphicComponent;
type DisclosurePanel<Tag extends HTMLTag = 'div'> = InstanceType<typeof DisclosurePanel<Tag>>;
export default DisclosurePanel;
