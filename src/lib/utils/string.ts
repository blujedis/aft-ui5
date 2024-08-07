/* eslint-disable @typescript-eslint/no-explicit-any */
type RenderResult = {
  head: string;
  html: string;
  css: {
    code: string;
    map: string | null;
  }
};

type ComponentRenderProps<T extends abstract new (...args: any) => any> =
  ConstructorParameters<T>[0]['props'];

type RenderFunction<
  T extends abstract new (...args: any) => any,
  TProps = ComponentRenderProps<T>
> = (props: TProps) => RenderResult;

type ComponentWithRender<T extends abstract new (...args: any) => any> = T & {
  render: RenderFunction<T>
};

export function renderToString<T extends abstract new (...args: any) => any>(
  Component: T,
  props: ComponentRenderProps<T>
) {
  const { render } = Component as ComponentWithRender<T>;
  const { html } = render(props);
  return html;
}