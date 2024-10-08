
export function getParam(params: URLSearchParams, param = 'page', def = 1) {
  const  value = params.get(param);
  if (value === null) return def;
  return Number(value);
}

export function getUrl(url = '', page = 1 as string | number, param = 'page') {
  const [href, query] = url.split('?');
  const params = new URLSearchParams(query);
  params.set(param, String(page));
  return [href, params.toString()].join('?');
}