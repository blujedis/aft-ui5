
export type ThemeColor = keyof typeof FontColor;

export type FocusType = keyof typeof focusTypeMap;

export type AriaSelectType = keyof typeof ariaSelectedMap;

export enum Size {
  unstyled = '',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xl2 = 'xl2',
}

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

export enum Ring {
  unstyled = '',
  none = 'ring-0',
  sm = 'ring-1',
  md = 'ring-2',
  lg = 'ring',
  xl = 'ring-4',
  xl2 = 'ring-8'
}

export enum RingOffset {
  unstyled = '',
  inset = 'ring-inset',
  none = 'ring-offset-0',
  one = 'ring-offset-1',
  two = 'ring-offset-2',
  three = 'ring-offset-[3px]',
  four = 'ring-offset-4',
  eight = 'ring-offset-8'
}

export const Placeholder = {
  unstyled : '',
  primary : '',
  secondary : '',
  tertiary : '',
  danger : '',
  warning : '',
  success : '',
  info : '',
  frame : '',
  white : '',
  black : '',
};

export enum RingColor {
  unstyled = '',
  primary = 'ring-primary-{{=i.bg.base[0]}} dark:ring-primary-{{=i.bg.base[1]}}',
  secondary = 'ring-secondary-{{=i.bg.base[0]}} dark:ring-secondary-{{=i.bg.base[1]}}',
  tertiary = 'ring-tertiary-{{=i.bg.base[0]}} dark:ring-tertiary-{{=i.bg.base[1]}}',
  danger = 'ring-danger-{{=i.bg.base[0]}} dark:ring-danger-{{=i.bg.base[1]}}',
  warning = 'ring-warning-{{=i.bg.base[0]}} dark:ring-warning-{{=i.bg.base[1]}}',
  success = 'ring-success-{{=i.bg.base[0]}} dark:ring-success-{{=i.bg.base[1]}}',
  info = 'ring-info-{{=i.bg.base[0]}} dark:ring-info-{{=i.bg.base[1]}}',
  frame = 'ring-frame-{{=i.bg.frame[0]}} dark:ring-frame-{{=i.bg.frame[1]}}',
  white = 'ring-{{=i.bg.white[0]}} dark:ring-{{=i.bg.white[1]}}',
  black = 'ring-{{=i.bg.black[0]}} dark:ring-{{=i.bg.black[1]}}',
}

export enum RingColorHover {
  unstyled = '',
  primary = 'hover:ring-primary-{{=i.bg.baseH[0]}} dark:hover:ring-primary-{{=i.bg.baseH[1]}}',
  secondary = 'hover:ring-secondary-{{=i.bg.baseH[0]}} dark:hover:ring-secondary-{{=i.bg.baseH[1]}}',
  tertiary = 'hover:ring-tertiary-{{=i.bg.baseH[0]}} dark:hover:ring-tertiary-{{=i.bg.baseH[1]}}',
  danger = 'hover:ring-danger-{{=i.bg.baseH[0]}} dark:hover:ring-danger-{{=i.bg.baseH[1]}}',
  warning = 'hover:ring-warning-{{=i.bg.baseH[0]}} dark:hover:ring-warning-{{=i.bg.baseH[1]}}',
  success = 'hover:ring-success-{{=i.bg.baseH[0]}} dark:hover:ring-success-{{=i.bg.baseH[1]}}',
  info = 'hover:ring-info-{{=i.bg.baseH[0]}} dark:hover:ring-info-{{=i.bg.baseH[1]}}',
  frame = 'hover:ring-frame-{{=i.bg.frameH[0]}} dark:hover:ring-frame-{{=i.bg.frameH[1]}}',
  white = 'hover:ring-{{=i.bg.whiteH[0]}} dark:hover:ring-{{=i.bg.whiteH[1]}}',
  black = 'hover:ring-{{=i.bg.blackH[0]}} dark:hover:ring-{{=i.bg.blackH[1]}}',
}

export enum BorderColor {
  unstyled = '',
  primary = 'border-primary-{{=i.bg.base[0]}} dark:border-primary-{{=i.bg.base[1]}}',
  secondary = 'border-secondary-{{=i.bg.base[0]}} dark:border-secondary-{{=i.bg.base[1]}}',
  tertiary = 'border-tertiary-{{=i.bg.base[0]}} dark:border-tertiary-{{=i.bg.base[1]}}',
  danger = 'border-danger-{{=i.bg.base[0]}} dark:border-danger-{{=i.bg.base[1]}}',
  warning = 'border-warning-{{=i.bg.base[0]}} dark:border-warning-{{=i.bg.base[1]}}',
  success = 'border-success-{{=i.bg.base[0]}} dark:border-success-{{=i.bg.base[1]}}',
  info = 'border-info-{{=i.bg.base[0]}} dark:border-info-{{=i.bg.base[1]}}',
  frame = 'border-frame-{{=i.bg.frame[0]}} dark:border-frame-{{=i.bg.frame[1]}}',
  white = 'border-{{=i.bg.white[0]}} dark:border-{{=i.bg.white[1]}}',
  black = 'border-{{=i.bg.black[0]}} dark:border-{{=i.bg.black[1]}}',
}

export enum BorderColorHover {
  unstyled = '',
  primary = 'hover:border-primary-{{=i.bg.baseH[0]}} dark:hover:border-primary-{{=i.bg.baseH[1]}}',
  secondary = 'hover:border-secondary-{{=i.bg.baseH[0]}} dark:hover:border-secondary-{{=i.bg.baseH[1]}}',
  tertiary = 'hover:border-tertiary-{{=i.bg.baseH[0]}} dark:hover:border-tertiary-{{=i.bg.baseH[1]}}',
  danger = 'hover:border-danger-{{=i.bg.baseH[0]}} dark:hover:border-danger-{{=i.bg.baseH[1]}}',
  warning = 'hover:border-warning-{{=i.bg.baseH[0]}} dark:hover:border-warning-{{=i.bg.baseH[1]}}',
  success = 'hover:border-success-{{=i.bg.baseH[0]}} dark:hover:border-success-{{=i.bg.baseH[1]}}',
  info = 'hover:border-info-{{=i.bg.baseH[0]}} dark:hover:border-info-{{=i.bg.baseH[1]}}',
  frame = 'hover:border-frame-{{=i.bg.frameH[0]}} dark:hover:border-frame-{{=i.bg.frameH[1]}}',
  white = 'hover:border-frame-{{=i.bg.whiteH[0]}} dark:hover:border-frame-{{=i.bg.whiteH[1]}}',
  black = 'hover:border-frame-{{=i.bg.blackH[0]}} dark:hover:border-frame-{{=i.bg.blackH[1]}}',
}

export enum DivideColor {
  unstyled = '',
  primary = 'divide-primary-{{=i.bg.base[0]}} dark:divide-primary-{{=i.bg.base[1]}}',
  secondary = 'divide-secondary-{{=i.bg.base[0]}} dark:divide-secondary-{{=i.bg.base[1]}}',
  tertiary = 'divide-tertiary-{{=i.bg.base[0]}} dark:divide-tertiary-{{=i.bg.base[1]}}',
  danger = 'divide-danger-{{=i.bg.base[0]}} dark:divide-danger-{{=i.bg.base[1]}}',
  warning = 'divide-warning-{{=i.bg.base[0]}} dark:divide-warning-{{=i.bg.base[1]}}',
  success = 'divide-success-{{=i.bg.base[0]}} dark:divide-success-{{=i.bg.base[1]}}',
  info = 'divide-info-{{=i.bg.base[0]}} dark:divide-info-{{=i.bg.base[1]}}',
  frame = 'divide-frame-{{=i.bg.frame[0]}} dark:divide-frame-{{=i.bg.frame[1]}}',
  white = 'divide-{{=i.bg.white[0]}} dark:divide-{{=i.bg.white[1]}}',
  black = 'divide-{{=i.bg.black[0]}} dark:divide-{{=i.bg.black[1]}}',
}

export enum Outline {
  unstyled = '',
  none = 'outline-0',
  sm = 'outline-1',
  md = 'outline-2',
  lg = 'outline-[3px]',
  xl = 'outline-4',
  xl2 = 'outline-8'
}

export enum OutlineOffset {
  unstyled = '',
  none = 'outline-offset-0',
  one = 'outline-offset-1',
  two = 'outline-offset-2',
  three = 'outline-offset-[3px]',
  four = 'outline-offset-4',
  eight = 'outline-offset-8'
}

export enum Border {
  unstyled = '',
  transparent = 'border-transparent',
  hidden = 'border-hidden',
  none = 'border-0',
  xs = 'border',
  sm = 'border-2',
  md = 'border-4',
  lg = 'border-6',
  xl = 'border-8',
  xl2 = 'border-10'
}

export enum Shadow {
  unstyled = '',
  inner = 'shadow-inner',
  none = 'shadow-none',
  xs = 'shadow-xs',
  sm = 'shadow',
  md = 'shadow-md',
  lg = 'shadow-lg',
  xl = 'shadow-xl',
  xl2 = 'shadow-2xl'
}

export enum DropShadow {
  unstyled = '',
  none = 'drop-shadow-none',
  xs = 'drop-shadow-xs',
  sm = 'drop-shadow',
  md = 'drop-shadow-md',
  lg = 'drop-shadow-lg',
  xl = 'drop-shadow-xl',
  xl2 = 'drop-shadow-2xl'
}

export enum FontSize {
  unstyled = '',
  xss = 'text-[10px]',
  xs = 'text-xs',
  sm = 'text-sm',
  md = 'text-base',
  lg = 'text-lg',
  xl = 'text-xl',
  xl2 = 'text-2xl',
  xl3 = 'text-3xl',
  xl4 = 'text-4xl',
  xl5 = 'text-5xl',
  xl6 = 'text-6xl',
  xl7 = 'text-7xl',
  xl8 = 'text-8xl',
  xl9 = 'text-9xl'
}

export enum FontWeight {
  unstyled = 'unstyled',
  thin = 'font-thin',
  extralight = 'font-extralight',
  light = 'font-light',
  normal = 'font-normal',
  medium = 'font-medium',
  semibold = 'font-semibold',
  bold = 'font-bold',
  extrabold = 'font-extrabold',
  black = 'font-black'
}

export enum FontLeading {
  unstyled = '',
  none = 'leading-none',
  xs = 'leading-3',
  sm = 'leading-4',
  md = 'leading-5',
  lg = 'leading-6',
  xl = 'leading-7',
  xl2 = 'leading-8',
  xl3 = 'leading-9',
  xl4 = 'leading-10',
  tight = 'leading-tight',
  snug = 'leading-snug',
  normal = 'leading-normal',
  relaxed = 'leading-relaxed',
  loose = 'leading-loose'
}

export enum FontColor {
  unstyled = '',
  primary = 'text-primary-{{=i.font.base[0]}} dark:text-primary-{{=i.font.base[1]}}',
  secondary = 'text-secondary-{{=i.font.base[0]}} dark:text-secondary-{{=i.font.base[1]}}',
  tertiary = 'text-tertiary-{{=i.font.base[0]}} dark:text-tertiary-{{=i.font.base[1]}}',
  danger = 'text-danger-{{=i.font.base[0]}} dark:text-danger-{{=i.font.base[1]}}',
  warning = 'text-warning-{{=i.font.base[0]}} dark:text-warning-{{=i.font.base[1]}}',
  success = 'text-success-{{=i.font.base[0]}} dark:text-success-{{=i.font.base[1]}}',
  info = 'text-info-{{=i.font.base[0]}} dark:text-info-{{=i.font.base[1]}}',
  frame = 'text-frame-{{=i.font.frame[0]}} dark:text-frame-{{=i.font.frame[1]}}',
  white = 'text-{{=i.font.white[0]}} dark:text-{{=i.font.white[1]}}',
  black = 'text-{{=i.font.black[0]}} dark:text-{{=i.font.black[1]}}'
}

export enum FontColorHover {
  unstyled = '',
  primary = 'hover:text-primary-{{=i.font.baseH[0]}} dark:hover:text-primary-{{=i.font.baseH[1]}}',
  secondary = 'hover:text-secondary-{{=i.font.baseH[0]}} dark:hover:text-secondary-{{=i.font.baseH[1]}}',
  tertiary = 'hover:text-tertiary-{{=i.font.baseH[0]}} dark:hover:text-tertiary-{{=i.font.baseH[1]}}',
  danger = 'hover:text-danger-{{=i.font.baseH[0]}} dark:hover:text-danger-{{=i.font.baseH[1]}}',
  warning = 'hover:text-warning-{{=i.font.baseH[0]}} dark:hover:text-warning-{{=i.font.baseH[1]}}',
  success = 'hover:text-success-{{=i.font.baseH[0]}} dark:hover:text-success-{{=i.font.baseH[1]}}',
  info = 'hover:text-info-{{=i.font.baseH[0]}} dark:hover:text-info-{{=i.font.baseH[1]}}',
  frame = 'text-frame-{{=i.font.frameH[0]}} dark:text-frame-{{=i.font.frameH[1]}}',
  white = 'hover:text-{{=i.font.whiteH[0]}} dark:hover:text-{{=i.font.whiteH[1]}}',
  black = 'hover:text-{{=i.font.blackH[0]}} dark:hover-text-{{=i.font.blackH[1]}}'
}

export enum ForeColorFilled {
  unstyled = '',
  primary = 'text-primary-{{=i.foreFill.base[0]}} dark:text-primary-{{=i.foreFill.base[1]}}',
  secondary = 'text-secondary-{{=i.foreFill.base[0]}} dark:text-secondary-{{=i.foreFill.base[1]}}',
  tertiary = 'text-tertiary-{{=i.foreFill.base[0]}} dark:text-tertiary-{{=i.foreFill.base[1]}}',
  danger = 'text-danger-{{=i.foreFill.base[0]}} dark:text-danger-{{=i.foreFill.base[1]}}',
  warning = 'text-warning-{{=i.foreFill.base[0]}} dark:text-warning-{{=i.foreFill.base[1]}}',
  success = 'text-success-{{=i.foreFill.base[0]}} dark:text-success-{{=i.foreFill.base[1]}}',
  info = 'text-info-{{=i.foreFill.base[0]}} dark:text-info-{{=i.foreFill.base[1]}}',
  frame = 'text-frame-{{=i.foreFill.frame[0]}} dark:text-frame-{{=i.foreFill.frame[1]}}',
  white = 'text-{{=i.foreFill.white[0]}} dark:text-{{=i.foreFill.white[1]}}',
  black = 'text-{{=i.foreFill.black[0]}} dark:text-{{=i.foreFill.black[1]}}'
}

export enum ForeColorFilledHover {
  unstyled = '',
  primary = 'hover:text-primary-{{=i.foreFill.baseH[0]}} dark:hover:text-primary-{{=i.foreFill.baseH[1]}}',
  secondary = 'hover:text-secondary-{{=i.foreFill.baseH[0]}} dark:hover:text-secondary-{{=i.foreFill.baseH[1]}}',
  tertiary = 'hover:text-tertiary-{{=i.foreFill.baseH[0]}} dark:hover:text-tertiary-{{=i.foreFill.baseH[1]}}',
  danger = 'hover:text-danger-{{=i.foreFill.baseH[0]}} dark:hover:text-danger-{{=i.foreFill.baseH[1]}}',
  warning = 'hover:text-warning-{{=i.foreFill.baseH[0]}} dark:hover:text-warning-{{=i.foreFill.baseH[1]}}',
  success = 'hover:text-success-{{=i.foreFill.baseH[0]}} dark:hover:text-success-{{=i.foreFill.baseH[1]}}',
  info = 'hover:text-info-{{=i.foreFill.baseH[0]}} dark:hover:text-info-{{=i.foreFill.baseH[1]}}',
  frame = 'text-frame-{{=i.foreFill.frameH[0]}} dark:text-frame-{{=i.foreFill.frameH[1]}}',
  white = 'hover:text-{{=i.foreFill.whiteH[0]}} dark:hover:text-{{=i.foreFill.whiteH[1]}}',
  black = 'hover:text-{{=i.foreFill.blackH[0]}} dark:hover-text-{{=i.foreFill.blackH[1]}}'
}

export enum ForeColorUnfilled {
  unstyled = '',
  primary = 'text-primary-{{=i.foreUnfill.base[0]}} dark:text-primary-{{=i.foreUnfill.base[1]}}',
  secondary = 'text-secondary-{{=i.foreUnfill.base[0]}} dark:text-secondary-{{=i.foreUnfill.base[1]}}',
  tertiary = 'text-tertiary-{{=i.foreUnfill.base[0]}} dark:text-tertiary-{{=i.foreUnfill.base[1]}}',
  danger = 'text-danger-{{=i.foreUnfill.base[0]}} dark:text-danger-{{=i.foreUnfill.base[1]}}',
  warning = 'text-warning-{{=i.foreUnfill.base[0]}} dark:text-warning-{{=i.foreUnfill.base[1]}}',
  success = 'text-success-{{=i.foreUnfill.base[0]}} dark:text-success-{{=i.foreUnfill.base[1]}}',
  info = 'text-info-{{=i.foreUnfill.base[0]}} dark:text-info-{{=i.foreUnfill.base[1]}}',
  frame = 'text-frame-{{=i.foreUnfill.frame[0]}} dark:text-frame-{{=i.foreUnfill.frame[1]}}',
  white = 'text-{{=i.foreUnfill.white[0]}} dark:text-{{=i.foreUnfill.white[1]}}',
  black = 'text-{{=i.foreUnfill.black[0]}} dark:text-{{=i.foreUnfill.black[1]}}'
}

export enum ForeColorUnfilledHover {
  unstyled = '',
  primary = 'hover:text-primary-{{=i.foreUnfill.baseH[0]}} dark:hover:text-primary-{{=i.foreUnfill.baseH[1]}}',
  secondary = 'hover:text-secondary-{{=i.foreUnfill.baseH[0]}} dark:hover:text-secondary-{{=i.foreUnfill.baseH[1]}}',
  tertiary = 'hover:text-tertiary-{{=i.foreUnfill.baseH[0]}} dark:hover:text-tertiary-{{=i.foreUnfill.baseH[1]}}',
  danger = 'hover:text-danger-{{=i.foreUnfill.baseH[0]}} dark:hover:text-danger-{{=i.foreUnfill.baseH[1]}}',
  warning = 'hover:text-warning-{{=i.foreUnfill.baseH[0]}} dark:hover:text-warning-{{=i.foreUnfill.baseH[1]}}',
  success = 'hover:text-success-{{=i.foreUnfill.baseH[0]}} dark:hover:text-success-{{=i.foreUnfill.baseH[1]}}',
  info = 'hover:text-info-{{=i.foreUnfill.baseH[0]}} dark:hover:text-info-{{=i.foreUnfill.baseH[1]}}',
  frame = 'text-frame-{{=i.foreUnfill.frameH[0]}} dark:text-frame-{{=i.foreUnfill.frameH[1]}}',
  white = 'hover:text-{{=i.foreUnfill.whiteH[0]}} dark:hover:text-{{=i.foreUnfill.whiteH[1]}}',
  black = 'hover:text-{{=i.foreUnfill.blackH[0]}} dark:hover-text-{{=i.foreUnfill.blackH[1]}}'
}

export enum BgColor {
  unstyled = '',
  primary = 'bg-primary-{{=i.bg.base[0]}} dark:bg-primary-{{=i.bg.base[1]}}',
  secondary = 'bg-secondary-{{=i.bg.base[0]}} dark:bg-secondary-{{=i.bg.base[1]}}',
  tertiary = 'bg-tertiary-{{=i.bg.base[0]}} dark:bg-tertiary-{{=i.bg.base[1]}}',
  danger = 'bg-danger-{{=i.bg.base[0]}} dark:bg-danger-{{=i.bg.base[1]}}',
  warning = 'bg-warning-{{=i.bg.base[0]}} dark:bg-warning-{{=i.bg.base[1]}}',
  success = 'bg-success-{{=i.bg.base[0]}} dark:bg-success-{{=i.bg.base[1]}}',
  info = 'bg-info-{{=i.bg.base[0]}} dark:bg-info-{{=i.bg.base[1]}}',
  frame = 'bg-frame-{{=i.bg.frame[0]}} dark:bg-frame-{{=i.bg.frame[1]}}',
  white = 'bg-{{=i.bg.white[0]}} dark:bg-{{=i.bg.white[1]}}',
  black = 'bg-{{=i.bg.black[0]}} dark:bg-{{=i.bg.black[1]}}',
}

export enum BgColorHover {
  unstyled = '',
  primary = 'hover:bg-primary-{{=i.bg.baseH[0]}} dark:hover:bg-primary-{{=i.bg.baseH[1]}}',
  secondary = 'hover:bg-secondary-{{=i.bg.baseH[0]}} dark:hover:bg-secondary-{{=i.bg.baseH[1]}}',
  tertiary = 'hover:bg-tertiary-{{=i.bg.baseH[0]}} dark:hover:bg-tertiary-{{=i.bg.baseH[1]}}',
  danger = 'hover:bg-danger-{{=i.bg.baseH[0]}} dark:hover:bg-danger-{{=i.bg.baseH[1]}}',
  warning = 'hover:bg-warning-{{=i.bg.baseH[0]}} dark:hover:bg-warning-{{=i.bg.baseH[1]}}',
  success = 'hover:bg-success-{{=i.bg.baseH[0]}} dark:hover:bg-success-{{=i.bg.baseH[1]}}',
  info = 'hover:bg-info-{{=i.bg.baseH[0]}} dark:hover:bg-info-{{=i.bg.baseH[1]}}',
  frame = 'hover:bg-frame-{{=i.bg.frameH[0]}} dark:hover:bg-frame-{{=i.bg.frameH[1]}}',
  white = 'hover:bg-{{=i.bg.whiteH[0]}} dark:hover:bg-{{=i.bg.whiteH[1]}}',
  black = 'hover:bg-{{=i.bg.blackH[0]}} dark:hover:bg-{{=i.bg.blackH[1]}}',
}

export enum BgColorGroupHover {
  unstyled = '',
  primary = 'group-hover:bg-primary-{{=i.bg.baseH[0]}} dark:group-hover:bg-primary-{{=i.bg.baseH[1]}}',
  secondary = 'group-hover:bg-secondary-{{=i.bg.baseH[0]}} dark:group-hover:bg-secondary-{{=i.bg.baseH[1]}}',
  tertiary = 'group-hover:bg-tertiary-{{=i.bg.baseH[0]}} dark:group-hover:bg-tertiary-{{=i.bg.baseH[1]}}',
  danger = 'group-hover:bg-danger-{{=i.bg.baseH[0]}} dark:group-hover:bg-danger-{{=i.bg.baseH[1]}}',
  warning = 'group-hover:bg-warning-{{=i.bg.baseH[0]}} dark:group-hover:bg-warning-{{=i.bg.baseH[1]}}',
  success = 'group-hover:bg-success-{{=i.bg.baseH[0]}} dark:group-hover:bg-success-{{=i.bg.baseH[1]}}',
  info = 'group-hover:bg-info-{{=i.bg.baseH[0]}} dark:group-hover:bg-info-{{=i.bg.baseH[1]}}',
  frame = 'group-hover:bg-frame-{{=i.bg.frameH[0]}} dark:group-hover:bg-frame-{{=i.bg.frameH[1]}}',
  white = 'group-hover:bg-{{=i.bg.whiteH[0]}} dark:group-hover:bg-{{=i.bg.whiteH[1]}}',
  black = 'group-hover:bg-{{=i.bg.blackH[0]}} dark:group-hover:bg-{{=i.bg.blackH[1]}}',
}

export enum BgColorSoft {
  unstyled = '',
  primary = 'bg-primary-{{=i.bgSoft.base[0]}} dark:bg-primary-{{=i.bgSoft.base[1]}}',
  secondary = 'bg-secondary-{{=i.bgSoft.base[0]}} dark:bg-secondary-{{=i.bgSoft.base[1]}}',
  tertiary = 'bg-tertiary-{{=i.bgSoft.base[0]}} dark:bg-tertiary-{{=i.bgSoft.base[1]}}',
  danger = 'bg-danger-{{=i.bgSoft.base[0]}} dark:bg-danger-{{=i.bgSoft.base[1]}}',
  warning = 'bg-warning-{{=i.bgSoft.base[0]}} dark:bg-warning-{{=i.bgSoft.base[1]}}',
  success = 'bg-success-{{=i.bgSoft.base[0]}} dark:bg-success-{{=i.bgSoft.base[1]}}',
  info = 'bg-info-{{=i.bgSoft.base[0]}} dark:bg-info-{{=i.bgSoft.base[1]}}',
  frame = 'bg-frame-{{=i.bgSoft.frame[0]}} dark:bg-frame-{{=i.bgSoft.frame[1]}}',
  white = 'bg-{{=i.bgSoft.white[0]}} dark:bg-{{=i.bgSoft.white[1]}}',
  black = 'bg-{{=i.bgSoft.black[0]}} dark:bg-{{=i.bgSoft.black[1]}}',
}

export enum BgColorSoftHover {
  unstyled = '',
  primary = 'hover:bg-primary-{{=i.bgSoft.baseH[0]}} dark:hover:bg-primary-{{=i.bgSoft.baseH[1]}}',
  secondary = 'hover:bg-secondary-{{=i.bgSoft.baseH[0]}} dark:hover:bg-secondary-{{=i.bgSoft.baseH[1]}}',
  tertiary = 'hover:bg-tertiary-{{=i.bgSoft.baseH[0]}} dark:hover:bg-tertiary-{{=i.bgSoft.baseH[1]}}',
  danger = 'hover:bg-danger-{{=i.bgSoft.baseH[0]}} dark:hover:bg-danger-{{=i.bgSoft.baseH[1]}}',
  warning = 'hover:bg-warning-{{=i.bgSoft.baseH[0]}} dark:hover:bg-warning-{{=i.bgSoft.baseH[1]}}',
  success = 'hover:bg-success-{{=i.bgSoft.baseH[0]}} dark:hover:bg-success-{{=i.bgSoft.baseH[1]}}',
  info = 'hover:bg-info-{{=i.bgSoft.baseH[0]}} dark:hover:bg-info-{{=i.bgSoft.baseH[1]}}',
  frame = 'hover:bg-frame-{{=i.bgSoft.frameH[0]}} dark:hover:bg-frame-{{=i.bgSoft.frameH[1]}}',
  white = 'hover:bg-{{=i.bgSoft.whiteH[0]}} dark:hover:bg-{{=i.bgSoft.whiteH[1]}}',
  black = 'hover:bg-{{=i.bgSoft.blackH[0]}} dark:hover:bg-{{=i.bgSoft.blackH[1]}}',
}

export enum BgColorSoftGroupHover {
  unstyled = '',
  primary = 'group-hover:bg-primary-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-primary-{{=i.bgSoft.baseH[1]}}',
  secondary = 'group-hover:bg-secondary-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-secondary-{{=i.bgSoft.baseH[1]}}',
  tertiary = 'group-hover:bg-tertiary-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-tertiary-{{=i.bgSoft.baseH[1]}}',
  danger = 'group-hover:bg-danger-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-danger-{{=i.bgSoft.baseH[1]}}',
  warning = 'group-hover:bg-warning-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-warning-{{=i.bgSoft.baseH[1]}}',
  success = 'group-hover:bg-success-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-success-{{=i.bgSoft.baseH[1]}}',
  info = 'group-hover:bg-info-{{=i.bgSoft.baseH[0]}} dark:group-hover:bg-info-{{=i.bgSoft.baseH[1]}}',
  frame = 'group-hover:bg-frame-{{=i.bgSoft.frameH[0]}} dark:group-hover:bg-frame-{{=i.bgSoft.frameH[1]}}',
  white = 'group-hover:bg-{{=i.bgSoft.whiteH[0]}} dark:group-hover:bg-{{=i.bgSoft.whiteH[1]}}',
  black = 'group-hover:bg-{{=i.bgSoft.blackH[0]}} dark:group-hover:bg-{{=i.bgSoft.blackH[1]}}',
}

export enum BgColorSelected {
  unstyled = '',
  primary = 'aria-selected:bg-primary-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-primary-{{=i.bgSelect.base[1]}}',
  secondary = 'aria-selected:bg-secondary-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-secondary-{{=i.bgSelect.base[1]}}',
  tertiary = 'aria-selected:bg-tertiary-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-tertiary-{{=i.bgSelect.base[1]}}',
  danger = 'aria-selected:bg-danger-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-danger-{{=i.bgSelect.base[1]}}',
  warning = 'aria-selected:bg-warning-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-warning-{{=i.bgSelect.base[1]}}',
  success = 'aria-selected:bg-success-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-success-{{=i.bgSelect.base[1]}}',
  info = 'aria-selected:bg-info-{{=i.bgSelect.base[0]}} dark:aria-selected:bg-info-{{=i.bgSelect.base[1]}}',
  frame = 'aria-selected:bg-frame-{{=i.bgSelect.frame[0]}} dark:aria-selected:bg-frame-{{=i.bgSelect.frame[1]}}',
  white = 'aria-selected:bg-{{=i.bgSelect.white[0]}} dark:aria-selected:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-selected:bg-{{=i.bgSelect.black[0]}} dark:aria-selected:bg-{{=i.bgSelect.black[1]}}',
}

export enum BgColorExpanded {
  unstyled = '',
  primary = 'aria-expanded:bg-primary-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-primary-{{=i.bgSelect.base[1]}}',
  secondary = 'aria-expanded:bg-secondary-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-secondary-{{=i.bgSelect.base[1]}}',
  tertiary = 'aria-expanded:bg-tertiary-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-tertiary-{{=i.bgSelect.base[1]}}',
  danger = 'aria-expanded:bg-danger-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-danger-{{=i.bgSelect.base[1]}}',
  warning = 'aria-expanded:bg-warning-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-warning-{{=i.bgSelect.base[1]}}',
  success = 'aria-expanded:bg-success-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-success-{{=i.bgSelect.base[1]}}',
  info = 'aria-expanded:bg-info-{{=i.bgSelect.base[0]}} dark:aria-expanded:bg-info-{{=i.bgSelect.base[1]}}',
  frame = 'aria-expanded:bg-frame-{{=i.bgSelect.frame[0]}} dark:aria-expanded:bg-frame-{{=i.bgSelect.frame[1]}}',
  white = 'aria-expanded:bg-{{=i.bgSelect.white[0]}} dark:aria-expanded:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-expanded:bg-{{=i.bgSelect.black[0]}} dark:aria-expanded:bg-{{=i.bgSelect.black[1]}}',
}

export enum BgColorChecked {
  unstyled = '',
  primary = 'aria-checked:bg-primary-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-primary-{{=i.bgSelect.base[1]}}',
  secondary = 'aria-checked:bg-secondary-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-secondary-{{=i.bgSelect.base[1]}}',
  tertiary = 'aria-checked:bg-tertiary-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-tertiary-{{=i.bgSelect.base[1]}}',
  danger = 'aria-checked:bg-danger-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-danger-{{=i.bgSelect.base[1]}}',
  warning = 'aria-checked:bg-warning-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-warning-{{=i.bgSelect.base[1]}}',
  success = 'aria-checked:bg-success-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-success-{{=i.bgSelect.base[1]}}',
  info = 'aria-checked:bg-info-{{=i.bgSelect.base[0]}} dark:aria-checked:bg-info-{{=i.bgSelect.base[1]}}',
  frame = 'aria-checked:bg-frame-{{=i.bgSelect.frame[0]}} dark:aria-checked:bg-frame-{{=i.bgSelect.frame[1]}}',
  white = 'aria-checked:bg-{{=i.bgSelect.white[0]}} dark:aria-checked:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-checked:bg-{{=i.bgSelect.black[0]}} dark:aria-checked:bg-{{=i.bgSelect.black[1]}}',
}

export enum BgColorCurrent {
  unstyled = '',
  primary = 'aria-[current="page"]:bg-primary-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-primary-{{=i.bgSelect.base[1]}}',
  secondary = 'aria-[current="page"]:bg-secondary-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-secondary-{{=i.bgSelect.base[1]}}',
  tertiary = 'aria-[current="page"]:bg-tertiary-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-tertiary-{{=i.bgSelect.base[1]}}',
  danger = 'aria-[current="page"]:bg-danger-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-danger-{{=i.bgSelect.base[1]}}',
  warning = 'aria-[current="page"]:bg-warning-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-warning-{{=i.bgSelect.base[1]}}',
  success = 'aria-[current="page"]:bg-success-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-success-{{=i.bgSelect.base[1]}}',
  info = 'aria-[current="page"]:bg-info-{{=i.bgSelect.base[0]}} dark:aria-[current="page"]:bg-info-{{=i.bgSelect.base[1]}}',
  frame = 'aria-[current="page"]:bg-frame-{{=i.bgSelect.frame[0]}} dark:aria-[current="page"]:bg-frame-{{=i.bgSelect.frame[1]}}',
  white = 'aria-[current="page"]:bg-{{=i.bgSelect.white[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-[current="page"]:bg-{{=i.bgSelect.black[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.black[1]}}',
}

export enum OutlineColorFocus {
  unstyled = '',
  primary = 'focus:outline-primary-{{=i.bgFocus.base[0]}} dark:focus:outline-primary-{{=i.bgFocus.base[1]}}',
  secondary = 'focus:outline-secondary-{{=i.bgFocus.base[0]}} dark:focus:outline-secondary-{{=i.bgFocus.base[1]}}',
  tertiary = 'focus:outline-tertiary-{{=i.bgFocus.base[0]}} dark:focus:outline-tertiary-{{=i.bgFocus.base[1]}}',
  danger = 'focus:outline-danger-{{=i.bgFocus.base[0]}} dark:focus:outline-danger-{{=i.bgFocus.base[1]}}',
  warning = 'focus:outline-warning-{{=i.bgFocus.base[0]}} dark:focus:outline-warning-{{=i.bgFocus.base[1]}}',
  success = 'focus:outline-success-{{=i.bgFocus.base[0]}} dark:focus:outline-success-{{=i.bgFocus.base[1]}}',
  info = 'focus:outline-info-{{=i.bgFocus.base[0]}} dark:focus:outline-info-{{=i.bgFocus.base[1]}}',
  frame = 'focus:outline-frame-{{=i.bgFocus.frame[0]}} dark:focus:outline-frame-{{=i.bgFocus.frame[1]}}',
  white = 'focus:outline-{{=i.bgFocus.white[0]}} dark:focus:outline-{{=i.bgFocus.white[1]}}',
  black = 'focus:outline-{{=i.bgFocus.black[0]}} dark:focus:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusVisible {
  unstyled = '',
  primary = 'focus-visible:outline-primary-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-primary-{{=i.bgFocus.base[1]}}',
  secondary = 'focus-visible:outline-secondary-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-secondary-{{=i.bgFocus.base[1]}}',
  tertiary = 'focus-visible:outline-tertiary-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-tertiary-{{=i.bgFocus.base[1]}}',
  danger = 'focus-visible:outline-danger-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-danger-{{=i.bgFocus.base[1]}}',
  warning = 'focus-visible:outline-warning-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-warning-{{=i.bgFocus.base[1]}}',
  success = 'focus-visible:outline-success-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-success-{{=i.bgFocus.base[1]}}',
  info = 'focus-visible:outline-info-{{=i.bgFocus.base[0]}} dark:focus-visible:outline-info-{{=i.bgFocus.base[1]}}',
  frame = 'focus-visible:outline-frame-{{=i.bgFocus.frame[0]}} dark:focus-visible:outline-frame-{{=i.bgFocus.frame[1]}}',
  white = 'focus-visible:outline-{{=i.bgFocus.white[0]}} dark:focus-visible:outline-{{=i.bgFocus.white[1]}}',
  black = 'focus-visible:outline-{{=i.bgFocus.black[0]}} dark:focus-visible:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusGroup {
  unstyled = '',
  primary = 'group-focus:outline-primary-{{=i.bgFocus.base[0]}} dark:group-focus:outline-primary-{{=i.bgFocus.base[1]}}',
  secondary = 'group-focus:outline-secondary-{{=i.bgFocus.base[0]}} dark:group-focus:outline-secondary-{{=i.bgFocus.base[1]}}',
  tertiary = 'group-focus:outline-tertiary-{{=i.bgFocus.base[0]}} dark:group-focus:outline-tertiary-{{=i.bgFocus.base[1]}}',
  danger = 'group-focus:outline-danger-{{=i.bgFocus.base[0]}} dark:group-focus:outline-danger-{{=i.bgFocus.base[1]}}',
  warning = 'group-focus:outline-warning-{{=i.bgFocus.base[0]}} dark:group-focus:outline-warning-{{=i.bgFocus.base[1]}}',
  success = 'group-focus:outline-success-{{=i.bgFocus.base[0]}} dark:group-focus:outline-success-{{=i.bgFocus.base[1]}}',
  info = 'group-focus:outline-info-{{=i.bgFocus.base[0]}} dark:group-focus:outline-info-{{=i.bgFocus.base[1]}}',
  frame = 'group-focus:outline-frame-{{=i.bgFocus.frame[0]}} dark:group-focus:outline-frame-{{=i.bgFocus.frame[1]}}',
  white = 'group-focus:outline-{{=i.bgFocus.white[0]}} dark:group-focus:outline-{{=i.bgFocus.white[1]}}',
  black = 'group-focus:outline-{{=i.bgFocus.black[0]}} dark:group-focus:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusWithin {
  unstyled = '',
  primary = 'focus-within:outline-primary-{{=i.bgFocus.base[0]}} dark:focus-within:outline-primary-{{=i.bgFocus.base[1]}}',
  secondary = 'focus-within:outline-secondary-{{=i.bgFocus.base[0]}} dark:focus-within:outline-secondary-{{=i.bgFocus.base[1]}}',
  tertiary = 'focus-within:outline-tertiary-{{=i.bgFocus.base[0]}} dark:focus-within:outline-tertiary-{{=i.bgFocus.base[1]}}',
  danger = 'focus-within:outline-danger-{{=i.bgFocus.base[0]}} dark:focus-within:outline-danger-{{=i.bgFocus.base[1]}}',
  warning = 'focus-within:outline-warning-{{=i.bgFocus.base[0]}} dark:focus-within:outline-warning-{{=i.bgFocus.base[1]}}',
  success = 'focus-within:outline-success-{{=i.bgFocus.base[0]}} dark:focus-within:outline-success-{{=i.bgFocus.base[1]}}',
  info = 'focus-within:outline-info-{{=i.bgFocus.base[0]}} dark:focus-within:outline-info-{{=i.bgFocus.base[1]}}',
  frame = 'focus-within:outline-frame-{{=i.bgFocus.frame[0]}} dark:focus-within:outline-frame-{{=i.bgFocus.frame[1]}}',
  white = 'focus-within:outline-{{=i.bgFocus.white[0]}} dark:focus-within:outline-{{=i.bgFocus.white[1]}}',
  black = 'focus-within:outline-{{=i.bgFocus.black[0]}} dark:focus-within:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusPeer {
  unstyled = '',
  primary = 'peer-focus:outline-primary-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-primary-{{=i.bgFocus.base[1]}}',
  secondary = 'peer-focus:outline-secondary-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-secondary-{{=i.bgFocus.base[1]}}',
  tertiary = 'peer-focus:outline-tertiary-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-tertiary-{{=i.bgFocus.base[1]}}',
  danger = 'peer-focus:outline-danger-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-danger-{{=i.bgFocus.base[1]}}',
  warning = 'peer-focus:outline-warning-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-warning-{{=i.bgFocus.base[1]}}',
  success = 'peer-focus:outline-success-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-success-{{=i.bgFocus.base[1]}}',
  info = 'peer-focus:outline-info-{{=i.bgFocus.base[0]}} dark:peer-focus:outline-info-{{=i.bgFocus.base[1]}}',
  frame = 'peer-focus:outline-frame-{{=i.bgFocus.frame[0]}} dark:peer-focus:outline-frame-{{=i.bgFocus.frame[1]}}',
  white = 'peer-focus:outline-{{=i.bgFocus.white[0]}} dark:peer-focus:outline-{{=i.bgFocus.white[1]}}',
  black = 'peer-focus:outline-{{=i.bgFocus.black[0]}} dark:peer-focus:outline-{{=i.bgFocus.black[1]}}',
}


export enum FieldPaddingY {
  unstyled = '',
  xs = 'py-0.5',
  sm = 'py-1',
  md = 'py-1.5',
  lg = 'py-2',
  xl = 'py-2.5',
  xl2 = 'py-3'
}

export enum FieldPaddingX {
  unstyled = '',
  xs = 'px-2',
  sm = 'px-2.5',
  md = 'px-3',
  lg = 'px-3.5',
  xl = 'px-5',
  xl2 = 'px-6'
}

export enum ButtonPaddingX {
  unstyled = '',
  xs = 'px-3',
  sm = 'px-3.5',
  md = 'px-5',
  lg = 'px-6',
  xl = 'px-7',
  xl2 = 'px-8'
}

export enum ButtonFontSize {
  unstyled = '',
  xs = FontSize.xs,
  sm = FontSize.sm,
  md = FontSize.sm,
  lg = FontSize.md,
  xl = FontSize.lg,
  xl2 = FontSize.xl
}

export const focusTypeMap = {
  unstyled: Placeholder,
  focus: OutlineColorFocus,
  visible: OutlineColorFocusVisible,
  within: OutlineColorFocusWithin,
  group: OutlineColorFocusGroup,
  peer: OutlineColorFocusPeer
};

export const ariaSelectedMap = {
  unstyled: Placeholder,
  selected: BgColorSelected,
  expanded: BgColorExpanded,
  checked: BgColorChecked,
  current: BgColorCurrent
};

export interface GlobalOptions {
  focusOffset: keyof typeof RingOffset;
  rounded: keyof typeof Rounded;
  transition: boolean | string;
}