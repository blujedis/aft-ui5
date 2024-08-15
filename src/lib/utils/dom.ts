export function getElementIndex(element: Element) {
  if (!element.parentNode)
    return -1;
  return Array.from(element.parentNode.children).indexOf(element);
}