/* eslint-disable @typescript-eslint/no-explicit-any */
export function getElementIndex(element: Element) {
  if (!element.parentNode)
    return -1;
  return Array.from(element.parentNode.children).indexOf(element);
}

export function getBrowser() {
  if (typeof window === 'undefined') return null;
  const win = window as unknown as Window & { opr: any; chrome: any };
  const agent = win.navigator.userAgent.toLowerCase();
  return agent.indexOf('edge') > -1 ? 'edge'
    : agent.indexOf('edg') > -1 ? 'chromium based edge'
      : agent.indexOf('opr') > -1 && win.opr ? 'opera'
        : agent.indexOf('chrome') > -1 && win.chrome ? 'chrome'
          : agent.indexOf('trident') > -1 ? 'ie'
            : agent.indexOf('firefox') > -1 ? 'firefox'
              : agent.indexOf('safari') > -1 ? 'safari'
                : 'other';
}