import type { ElementProps, HTMLTag } from '../../types.js';
import type { Snippet } from 'svelte';
export type ConditionalElementProps<Tag extends HTMLTag> = {
    as: Tag;
    children: Snippet;
    condition: boolean | ((...args: any[]) => boolean);
};
declare class __sveltets_Render<Tag extends HTMLTag> {
    props(): ConditionalElementProps<Tag> & ElementProps<Tag>;
    events(): {} & {
        [evt: string]: CustomEvent<any>;
    };
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <Tag extends HTMLTag>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<Tag>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<Tag>['props']>, ReturnType<__sveltets_Render<Tag>['events']>, ReturnType<__sveltets_Render<Tag>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<Tag>['bindings']>;
    } & ReturnType<__sveltets_Render<Tag>['exports']>;
    <Tag extends HTMLTag>(internal: unknown, props: ReturnType<__sveltets_Render<Tag>['props']> & {
        $$events?: ReturnType<__sveltets_Render<Tag>['events']>;
    }): ReturnType<__sveltets_Render<Tag>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const ConditionalElement: $$IsomorphicComponent;
type ConditionalElement<Tag extends HTMLTag> = InstanceType<typeof ConditionalElement<Tag>>;
export default ConditionalElement;
