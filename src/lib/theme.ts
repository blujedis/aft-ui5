
export enum Rounded {
  unstyled = '',
  none = 'rounded-none',
  xs = 'rounded-xs',
  sm = 'rounded-sm',
  md = 'rounded-md',
  lg = 'rounded-lg',
  xl = 'rounded-xl',
  xl2 = 'rounded-xl2',
  full = 'rounded-full',
}

const _theme = $state({
  globals: {
    ringed: '',
    rounded: '',
    transitioned: false, // 'transition motion-reduce:transition-none'
  },
  rounded: {
    unstyled: '',
    none: 'rounded-none',
    xs: 'rounded-xs',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    xl2: 'rounded-xl2',
    full: 'rounded-full',
  }
})

export function createTheme(theme = {} as Partial<typeof _theme>) {
  for (const k in theme) {
    const key = k as keyof typeof _theme;
    if (typeof _theme[key] === 'undefined') continue;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _theme[key] = { ..._theme[key], ...theme[key] } as any;
  }
  return _theme;
}

const theme = createTheme({ rounded: Rounded })

