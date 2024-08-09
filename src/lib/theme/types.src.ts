
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
  unstyled: '',
  primary: '',
  secondary: '',
  tertiary: '',
  danger: '',
  warning: '',
  success: '',
  info: '',
  light: '',
  dark: '',
  white: '',
  black: '',
};

export enum RingColor {
  unstyled = '',
  primary = 'ring-{{=i.bg.primary[0]}} dark:ring-{{=i.bg.primary[1]}}',
  secondary = 'ring-{{=i.bg.secondary[0]}} dark:ring-{{=i.bg.secondary[1]}}',
  tertiary = 'ring-{{=i.bg.tertiary[0]}} dark:ring-{{=i.bg.tertiary[1]}}',
  danger = 'ring-{{=i.bg.danger[0]}} dark:ring-{{=i.bg.danger[1]}}',
  warning = 'ring-{{=i.bg.warning[0]}} dark:ring-{{=i.bg.warning[1]}}',
  success = 'ring-{{=i.bg.success[0]}} dark:ring-{{=i.bg.success[1]}}',
  info = 'ring-{{=i.bg.info[0]}} dark:ring-{{=i.bg.info[1]}}',
  light = 'ring-{{=i.bg.light[0]}} dark:ring-{{=i.bg.light[1]}}',
  dark = 'ring-{{=i.bg.dark[0]}} dark:ring-{{=i.bg.dark[1]}}',
  white = 'ring-{{=i.bg.white[0]}} dark:ring-{{=i.bg.white[1]}}',
  black = 'ring-{{=i.bg.black[0]}} dark:ring-{{=i.bg.black[1]}}',
}

export enum RingColorHover {
  unstyled = '',
  primary = 'hover:ring-{{=i.bg.primaryH[0]}} dark:hover:ring-{{=i.bg.primaryH[1]}}',
  secondary = 'hover:ring-{{=i.bg.secondaryH[0]}} dark:hover:ring-{{=i.bg.secondaryH[1]}}',
  tertiary = 'hover:ring-{{=i.bg.tertiaryH[0]}} dark:hover:ring-{{=i.bg.tertiaryH[1]}}',
  danger = 'hover:ring-{{=i.bg.dangerH[0]}} dark:hover:ring-{{=i.bg.dangerH[1]}}',
  warning = 'hover:ring-{{=i.bg.warningH[0]}} dark:hover:ring-{{=i.bg.warningH[1]}}',
  success = 'hover:ring-{{=i.bg.successH[0]}} dark:hover:ring-{{=i.bg.successH[1]}}',
  info = 'hover:ring-{{=i.bg.infoH[0]}} dark:hover:ring-{{=i.bg.infoH[1]}}',
  light = 'hover:ring-{{=i.bg.lightH[0]}} dark:hover:ring-{{=i.bg.lightH[1]}}',
  dark = 'hover:ring-{{=i.bg.darkH[0]}} dark:hover:ring-{{=i.bg.darkH[1]}}',
  white = 'hover:ring-{{=i.bg.whiteH[0]}} dark:hover:ring-{{=i.bg.whiteH[1]}}',
  black = 'hover:ring-{{=i.bg.blackH[0]}} dark:hover:ring-{{=i.bg.blackH[1]}}',
}

export enum BorderColor {
  unstyled = '',
  primary = 'border-{{=i.bg.primary[0]}} dark:border-{{=i.bg.primary[1]}}',
  secondary = 'border-{{=i.bg.secondary[0]}} dark:border-{{=i.bg.secondary[1]}}',
  tertiary = 'border-{{=i.bg.tertiary[0]}} dark:border-{{=i.bg.tertiary[1]}}',
  danger = 'border-{{=i.bg.danger[0]}} dark:border-{{=i.bg.danger[1]}}',
  warning = 'border-{{=i.bg.warning[0]}} dark:border-{{=i.bg.warning[1]}}',
  success = 'border-{{=i.bg.success[0]}} dark:border-{{=i.bg.success[1]}}',
  info = 'border-{{=i.bg.info[0]}} dark:border-{{=i.bg.info[1]}}',
  light = 'border-{{=i.bg.light[0]}} dark:border-{{=i.bg.light[1]}}',
  dark = 'border-{{=i.bg.dark[0]}} dark:border-{{=i.bg.dark[1]}}',
  white = 'border-{{=i.bg.white[0]}} dark:border-{{=i.bg.white[1]}}',
  black = 'border-{{=i.bg.black[0]}} dark:border-{{=i.bg.black[1]}}',
}

export enum BorderColorHover {
  unstyled = '',
  primary = 'hover:border-{{=i.bg.primaryH[0]}} dark:hover:border-{{=i.bg.primaryH[1]}}',
  secondary = 'hover:border-{{=i.bg.secondaryH[0]}} dark:hover:border-{{=i.bg.secondaryH[1]}}',
  tertiary = 'hover:border-{{=i.bg.tertiaryH[0]}} dark:hover:border-{{=i.bg.tertiaryH[1]}}',
  danger = 'hover:border-{{=i.bg.dangerH[0]}} dark:hover:border-{{=i.bg.dangerH[1]}}',
  warning = 'hover:border-{{=i.bg.warningH[0]}} dark:hover:border-{{=i.bg.warningH[1]}}',
  success = 'hover:border-{{=i.bg.successH[0]}} dark:hover:border-{{=i.bg.successH[1]}}',
  info = 'hover:border-{{=i.bg.infoH[0]}} dark:hover:border-{{=i.bg.infoH[1]}}',
  light = 'hover:border-{{=i.bg.lightH[0]}} dark:hover:border-{{=i.bg.lightH[1]}}',
  dark = 'hover:border-{{=i.bg.darkH[0]}} dark:hover:border-{{=i.bg.darkH[1]}}',
  white = 'hover:border-{{=i.bg.whiteH[0]}} dark:hover:border-{{=i.bg.whiteH[1]}}',
  black = 'hover:border-{{=i.bg.blackH[0]}} dark:hover:border-{{=i.bg.blackH[1]}}',
}

export enum DivideColor {
  unstyled = '',
  primary = 'divide-{{=i.bg.primary[0]}} dark:divide-{{=i.bg.primary[1]}}',
  secondary = 'divide-{{=i.bg.secondary[0]}} dark:divide-{{=i.bg.secondary[1]}}',
  tertiary = 'divide-{{=i.bg.tertiary[0]}} dark:divide-{{=i.bg.tertiary[1]}}',
  danger = 'divide-{{=i.bg.danger[0]}} dark:divide-{{=i.bg.danger[1]}}',
  warning = 'divide-{{=i.bg.warning[0]}} dark:divide-{{=i.bg.warning[1]}}',
  success = 'divide-{{=i.bg.success[0]}} dark:divide-{{=i.bg.success[1]}}',
  info = 'divide-{{=i.bg.info[0]}} dark:divide-{{=i.bg.info[1]}}',
  light = 'divide-{{=i.bg.light[0]}} dark:divide-{{=i.bg.light[1]}}',
  dark = 'divide-{{=i.bg.dark[0]}} dark:divide-{{=i.bg.dark[1]}}',
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
  primary = 'text-{{=i.font.primary[0]}} dark:text-{{=i.font.primary[1]}}',
  secondary = 'text-{{=i.font.secondary[0]}} dark:text-{{=i.font.secondary[1]}}',
  tertiary = 'text-{{=i.font.tertiary[0]}} dark:text-{{=i.font.tertiary[1]}}',
  danger = 'text-{{=i.font.danger[0]}} dark:text-{{=i.font.danger[1]}}',
  warning = 'text-{{=i.font.warning[0]}} dark:text-{{=i.font.warning[1]}}',
  success = 'text-{{=i.font.success[0]}} dark:text-{{=i.font.success[1]}}',
  info = 'text-{{=i.font.info[0]}} dark:text-{{=i.font.info[1]}}',
  light = 'text-{{=i.font.light[0]}} dark:text-{{=i.font.light[1]}}',
  dark = 'text-{{=i.font.dark[0]}} dark:text-{{=i.font.dark[1]}} ',
  white = 'text-{{=i.font.white[0]}} dark:text-{{=i.font.white[1]}}',
  black = 'text-{{=i.font.black[0]}} dark:text-{{=i.font.black[1]}}'
}

export enum FontColorHover {
  unstyled = '',
  primary = 'hover:text-{{=i.font.primaryH[0]}} dark:hover:text-{{=i.font.primaryH[1]}}',
  secondary = 'hover:text-{{=i.font.secondaryH[0]}} dark:hover:text-{{=i.font.secondaryH[1]}}',
  tertiary = 'hover:text-{{=i.font.tertiaryH[0]}} dark:hover:text-{{=i.font.tertiaryH[1]}}',
  danger = 'hover:text-{{=i.font.dangerH[0]}} dark:hover:text-{{=i.font.dangerH[1]}}',
  warning = 'hover:text-{{=i.font.warningH[0]}} dark:hover:text-{{=i.font.warningH[1]}}',
  success = 'hover:text-{{=i.font.successH[0]}} dark:hover:text-{{=i.font.successH[1]}}',
  info = 'hover:text-{{=i.font.infoH[0]}} dark:hover:text-{{=i.font.infoH[1]}}',
  light = 'hover:text-{{=i.font.lightH[0]}} dark:hover:text-{{=i.font.lightH[1]}}',
  dark = 'hover:text-{{=i.font.darkH[0]}} dark:hover:text-{{=i.font.darkH[1]}} ',
  white = 'hover:text-{{=i.font.whiteH[0]}} dark:hover:text-{{=i.font.whiteH[1]}}',
  black = 'hover:text-{{=i.font.blackH[0]}} dark:hover:text-{{=i.font.blackH[1]}}'
}

export enum ForeColorText {
  unstyled = '',
  primary = 'text-{{=i.foreText.primary[0]}} dark:text-{{=i.foreText.primary[1]}}',
  secondary = 'text-{{=i.foreText.secondary[0]}} dark:text-{{=i.foreText.secondary[1]}}',
  tertiary = 'text-{{=i.foreText.tertiary[0]}} dark:text-{{=i.foreText.tertiary[1]}}',
  danger = 'text-{{=i.foreText.danger[0]}} dark:text-{{=i.foreText.danger[1]}}',
  warning = 'text-{{=i.foreText.warning[0]}} dark:text-{{=i.foreText.warning[1]}}',
  success = 'text-{{=i.foreText.success[0]}} dark:text-{{=i.foreText.success[1]}}',
  info = 'text-{{=i.foreText.info[0]}} dark:text-{{=i.foreText.info[1]}}',
  light = 'text-{{=i.foreText.light[0]}} dark:text-{{=i.foreText.light[1]}}',
  dark = 'text-{{=i.foreText.dark[0]}} dark:text-{{=i.foreText.dark[1]}} ',
  white = 'text-{{=i.foreText.white[0]}} dark:text-{{=i.foreText.white[1]}}',
  black = 'text-{{=i.foreText.black[0]}} dark:text-{{=i.foreText.black[1]}}'
}

export enum ForeColorTextHover {
  unstyled = '',
  primary = 'hover:text-{{=i.foreText.primaryH[0]}} dark:hover:text-{{=i.foreText.primaryH[1]}}',
  secondary = 'hover:text-{{=i.foreText.secondaryH[0]}} dark:hover:text-{{=i.foreText.secondaryH[1]}}',
  tertiary = 'hover:text-{{=i.foreText.tertiaryH[0]}} dark:hover:text-{{=i.foreText.tertiaryH[1]}}',
  danger = 'hover:text-{{=i.foreText.dangerH[0]}} dark:hover:text-{{=i.foreText.dangerH[1]}}',
  warning = 'hover:text-{{=i.foreText.warningH[0]}} dark:hover:text-{{=i.foreText.warningH[1]}}',
  success = 'hover:text-{{=i.foreText.successH[0]}} dark:hover:text-{{=i.foreText.successH[1]}}',
  info = 'hover:text-{{=i.foreText.infoH[0]}} dark:hover:text-{{=i.foreText.infoH[1]}}',
  light = 'hover:text-{{=i.foreText.lightH[0]}} dark:hover:text-{{=i.foreText.lightH[1]}}',
  dark = 'hover:text-{{=i.foreText.darkH[0]}} dark:hover:text-{{=i.foreText.darkH[1]}} ',
  white = 'hover:text-{{=i.foreText.whiteH[0]}} dark:hover:text-{{=i.foreText.whiteH[1]}}',
  black = 'hover:text-{{=i.foreText.blackH[0]}} dark:hover:text-{{=i.foreText.blackH[1]}}'
}

export enum ForeColorFilled {
  unstyled = '',
  primary = 'text-{{=i.foreFill.primary[0]}} dark:text-{{=i.foreFill.primary[1]}}',
  secondary = 'text-{{=i.foreFill.secondary[0]}} dark:text-{{=i.foreFill.secondary[1]}}',
  tertiary = 'text-{{=i.foreFill.tertiary[0]}} dark:text-{{=i.foreFill.tertiary[1]}}',
  danger = 'text-{{=i.foreFill.danger[0]}} dark:text-{{=i.foreFill.danger[1]}}',
  warning = 'text-{{=i.foreFill.warning[0]}} dark:text-{{=i.foreFill.warning[1]}}',
  success = 'text-{{=i.foreFill.success[0]}} dark:text-{{=i.foreFill.success[1]}}',
  info = 'text-{{=i.foreFill.info[0]}} dark:text-{{=i.foreFill.info[1]}}',
  light = 'text-{{=i.foreFill.light[0]}} dark:text-{{=i.foreFill.light[1]}}',
  dark = 'text-{{=i.foreFill.dark[0]}} dark:text-{{=i.foreFill.dark[1]}} ',
  white = 'text-{{=i.foreFill.white[0]}} dark:text-{{=i.foreFill.white[1]}}',
  black = 'text-{{=i.foreFill.black[0]}} dark:text-{{=i.foreFill.black[1]}}'
}

export enum ForeColorFilledHover {
  unstyled = '',
  primary = 'hover:text-{{=i.foreFill.primaryH[0]}} dark:hover:text-{{=i.foreFill.primaryH[1]}}',
  secondary = 'hover:text-{{=i.foreFill.secondaryH[0]}} dark:hover:text-{{=i.foreFill.secondaryH[1]}}',
  tertiary = 'hover:text-{{=i.foreFill.tertiaryH[0]}} dark:hover:text-{{=i.foreFill.tertiaryH[1]}}',
  danger = 'hover:text-{{=i.foreFill.dangerH[0]}} dark:hover:text-{{=i.foreFill.dangerH[1]}}',
  warning = 'hover:text-{{=i.foreFill.warningH[0]}} dark:hover:text-{{=i.foreFill.warningH[1]}}',
  success = 'hover:text-{{=i.foreFill.successH[0]}} dark:hover:text-{{=i.foreFill.successH[1]}}',
  info = 'hover:text-{{=i.foreFill.infoH[0]}} dark:hover:text-{{=i.foreFill.infoH[1]}}',
  light = 'hover:text-{{=i.foreFill.lightH[0]}} dark:hover:text-{{=i.foreFill.lightH[1]}}',
  dark = 'hover:text-{{=i.foreFill.darkH[0]}} dark:hover:text-{{=i.foreFill.darkH[1]}} ',
  white = 'hover:text-{{=i.foreFill.whiteH[0]}} dark:hover:text-{{=i.foreFill.whiteH[1]}}',
  black = 'hover:text-{{=i.foreFill.blackH[0]}} dark:hover:text-{{=i.foreFill.blackH[1]}}'
}

export enum ForeColorSoft {
  unstyled = '',
  primary = 'text-{{=i.foreSoft.primary[0]}} dark:text-{{=i.foreSoft.primary[1]}}',
  secondary = 'text-{{=i.foreSoft.secondary[0]}} dark:text-{{=i.foreSoft.secondary[1]}}',
  tertiary = 'text-{{=i.foreSoft.tertiary[0]}} dark:text-{{=i.foreSoft.tertiary[1]}}',
  danger = 'text-{{=i.foreSoft.danger[0]}} dark:text-{{=i.foreSoft.danger[1]}}',
  warning = 'text-{{=i.foreSoft.warning[0]}} dark:text-{{=i.foreSoft.warning[1]}}',
  success = 'text-{{=i.foreSoft.success[0]}} dark:text-{{=i.foreSoft.success[1]}}',
  info = 'text-{{=i.foreSoft.info[0]}} dark:text-{{=i.foreSoft.info[1]}}',
  light = 'text-{{=i.foreSoft.light[0]}} dark:text-{{=i.foreSoft.light[1]}}',
  dark = 'text-{{=i.foreSoft.dark[0]}} dark:text-{{=i.foreSoft.dark[1]}} ',
  white = 'text-{{=i.foreSoft.white[0]}} dark:text-{{=i.foreSoft.white[1]}}',
  black = 'text-{{=i.foreSoft.black[0]}} dark:text-{{=i.foreSoft.black[1]}}'
}

export enum ForeColorSoftHover {
  unstyled = '',
  primary = 'hover:text-{{=i.foreSoft.primaryH[0]}} dark:hover:text-{{=i.foreSoft.primaryH[1]}}',
  secondary = 'hover:text-{{=i.foreSoft.secondaryH[0]}} dark:hover:text-{{=i.foreSoft.secondaryH[1]}}',
  tertiary = 'hover:text-{{=i.foreSoft.tertiaryH[0]}} dark:hover:text-{{=i.foreSoft.tertiaryH[1]}}',
  danger = 'hover:text-{{=i.foreSoft.dangerH[0]}} dark:hover:text-{{=i.foreSoft.dangerH[1]}}',
  warning = 'hover:text-{{=i.foreSoft.warningH[0]}} dark:hover:text-{{=i.foreSoft.warningH[1]}}',
  success = 'hover:text-{{=i.foreSoft.successH[0]}} dark:hover:text-{{=i.foreSoft.successH[1]}}',
  info = 'hover:text-{{=i.foreSoft.infoH[0]}} dark:hover:text-{{=i.foreSoft.infoH[1]}}',
  light = 'hover:text-{{=i.foreSoft.lightH[0]}} dark:hover:text-{{=i.foreSoft.lightH[1]}}',
  dark = 'hover:text-{{=i.foreSoft.darkH[0]}} dark:hover:text-{{=i.foreSoft.darkH[1]}} ',
  white = 'hover:text-{{=i.foreSoft.whiteH[0]}} dark:hover:text-{{=i.foreSoft.whiteH[1]}}',
  black = 'hover:text-{{=i.foreSoft.blackH[0]}} dark:hover:text-{{=i.foreSoft.blackH[1]}}'
}

export enum ForeColorGhost {
  unstyled = '',
  primary = 'text-{{=i.foreGhost.primary[0]}} dark:text-{{=i.foreGhost.primary[1]}}',
  secondary = 'text-{{=i.foreGhost.secondary[0]}} dark:text-{{=i.foreGhost.secondary[1]}}',
  tertiary = 'text-{{=i.foreGhost.tertiary[0]}} dark:text-{{=i.foreGhost.tertiary[1]}}',
  danger = 'text-{{=i.foreGhost.danger[0]}} dark:text-{{=i.foreGhost.danger[1]}}',
  warning = 'text-{{=i.foreGhost.warning[0]}} dark:text-{{=i.foreGhost.warning[1]}}',
  success = 'text-{{=i.foreGhost.success[0]}} dark:text-{{=i.foreGhost.success[1]}}',
  info = 'text-{{=i.foreGhost.info[0]}} dark:text-{{=i.foreGhost.info[1]}}',
  light = 'text-{{=i.foreGhost.light[0]}} dark:text-{{=i.foreGhost.light[1]}}',
  dark = 'text-{{=i.foreGhost.dark[0]}} dark:text-{{=i.foreGhost.dark[1]}} ',
  white = 'text-{{=i.foreGhost.white[0]}} dark:text-{{=i.foreGhost.white[1]}}',
  black = 'text-{{=i.foreGhost.black[0]}} dark:text-{{=i.foreGhost.black[1]}}'
}

export enum ForeColorGhostHover {
  unstyled = '',
  primary = 'hover:text-{{=i.foreGhost.primaryH[0]}} dark:hover:text-{{=i.foreGhost.primaryH[1]}}',
  secondary = 'hover:text-{{=i.foreGhost.secondaryH[0]}} dark:hover:text-{{=i.foreGhost.secondaryH[1]}}',
  tertiary = 'hover:text-{{=i.foreGhost.tertiaryH[0]}} dark:hover:text-{{=i.foreGhost.tertiaryH[1]}}',
  danger = 'hover:text-{{=i.foreGhost.dangerH[0]}} dark:hover:text-{{=i.foreGhost.dangerH[1]}}',
  warning = 'hover:text-{{=i.foreGhost.warningH[0]}} dark:hover:text-{{=i.foreGhost.warningH[1]}}',
  success = 'hover:text-{{=i.foreGhost.successH[0]}} dark:hover:text-{{=i.foreGhost.successH[1]}}',
  info = 'hover:text-{{=i.foreGhost.infoH[0]}} dark:hover:text-{{=i.foreGhost.infoH[1]}}',
  light = 'hover:text-{{=i.foreGhost.lightH[0]}} dark:hover:text-{{=i.foreGhost.lightH[1]}}',
  dark = 'hover:text-{{=i.foreGhost.darkH[0]}} dark:hover:text-{{=i.foreGhost.darkH[1]}} ',
  white = 'hover:text-{{=i.foreGhost.whiteH[0]}} dark:hover:text-{{=i.foreGhost.whiteH[1]}}',
  black = 'hover:text-{{=i.foreGhost.blackH[0]}} dark:hover:text-{{=i.foreGhost.blackH[1]}}'
}

export enum BgColor {
  unstyled = '',
  primary = 'bg-{{=i.bg.primary[0]}} dark:bg-{{=i.bg.primary[1]}}',
  secondary = 'bg-{{=i.bg.secondary[0]}} dark:bg-{{=i.bg.secondary[1]}}',
  tertiary = 'bg-{{=i.bg.tertiary[0]}} dark:bg-{{=i.bg.tertiary[1]}}',
  danger = 'bg-{{=i.bg.danger[0]}} dark:bg-{{=i.bg.danger[1]}}',
  warning = 'bg-{{=i.bg.warning[0]}} dark:bg-{{=i.bg.warning[1]}}',
  success = 'bg-{{=i.bg.success[0]}} dark:bg-{{=i.bg.success[1]}}',
  info = 'bg-{{=i.bg.info[0]}} dark:bg-{{=i.bg.info[1]}}',
  light = 'bg-{{=i.bg.light[0]}} dark:bg-{{=i.bg.light[1]}}',
  dark = 'bg-{{=i.bg.dark[0]}} dark:bg-{{=i.bg.dark[1]}} ',
  white = 'bg-{{=i.bg.white[0]}} dark:bg-{{=i.bg.white[1]}}',
  black = 'bg-{{=i.bg.black[0]}} dark:bg-{{=i.bg.black[1]}}',
}

export enum BgColorHover {
  unstyled = '',
  primary = 'hover:bg-{{=i.bg.primaryH[0]}} dark:hover:bg-{{=i.bg.primaryH[1]}}',
  secondary = 'hover:bg-{{=i.bg.secondaryH[0]}} dark:hover:bg-{{=i.bg.secondaryH[1]}}',
  tertiary = 'hover:bg-{{=i.bg.tertiaryH[0]}} dark:hover:bg-{{=i.bg.tertiaryH[1]}}',
  danger = 'hover:bg-{{=i.bg.dangerH[0]}} dark:hover:bg-{{=i.bg.dangerH[1]}}',
  warning = 'hover:bg-{{=i.bg.warningH[0]}} dark:hover:bg-{{=i.bg.warningH[1]}}',
  success = 'hover:bg-{{=i.bg.successH[0]}} dark:hover:bg-{{=i.bg.successH[1]}}',
  info = 'hover:bg-{{=i.bg.infoH[0]}} dark:hover:bg-{{=i.bg.infoH[1]}}',
  light = 'hover:bg-{{=i.bg.lightH[0]}} dark:hover:bg-{{=i.bg.lightH[1]}}',
  dark = 'hover:bg-{{=i.bg.darkH[0]}} dark:hover:bg-{{=i.bg.darkH[1]}} ',
  white = 'hover:bg-{{=i.bg.whiteH[0]}} dark:hover:bg-{{=i.bg.whiteH[1]}}',
  black = 'hover:bg-{{=i.bg.blackH[0]}} dark:hover:bg-{{=i.bg.blackH[1]}}',
}

export enum BgColorGroupHover {
  unstyled = '',
  primary = 'group-hover:bg-{{=i.bg.primaryH[0]}} dark:group-hover:bg-{{=i.bg.primaryH[1]}}',
  secondary = 'group-hover:bg-{{=i.bg.secondaryH[0]}} dark:group-hover:bg-{{=i.bg.secondaryH[1]}}',
  tertiary = 'group-hover:bg-{{=i.bg.tertiaryH[0]}} dark:group-hover:bg-{{=i.bg.tertiaryH[1]}}',
  danger = 'group-hover:bg-{{=i.bg.dangerH[0]}} dark:group-hover:bg-{{=i.bg.dangerH[1]}}',
  warning = 'group-hover:bg-{{=i.bg.warningH[0]}} dark:group-hover:bg-{{=i.bg.warningH[1]}}',
  success = 'group-hover:bg-{{=i.bg.successH[0]}} dark:group-hover:bg-{{=i.bg.successH[1]}}',
  info = 'group-hover:bg-{{=i.bg.infoH[0]}} dark:group-hover:bg-{{=i.bg.infoH[1]}}',
  light = 'group-hover:bg-{{=i.bg.lightH[0]}} dark:group-hover:bg-{{=i.bg.lightH[1]}}',
  dark = 'group-hover:bg-{{=i.bg.darkH[0]}} dark:group-hover:bg-{{=i.bg.darkH[1]}} ',
  white = 'group-hover:bg-{{=i.bg.whiteH[0]}} dark:group-hover:bg-{{=i.bg.whiteH[1]}}',
  black = 'group-hover:bg-{{=i.bg.blackH[0]}} dark:group-hover:bg-{{=i.bg.blackH[1]}}',
}

export enum BgColorSoft {
  unstyled = '',
  primary = 'bg-{{=i.bgSoft.primary[0]}} dark:bg-{{=i.bgSoft.primary[1]}}',
  secondary = 'bg-{{=i.bgSoft.secondary[0]}} dark:bg-{{=i.bgSoft.secondary[1]}}',
  tertiary = 'bg-{{=i.bgSoft.tertiary[0]}} dark:bg-{{=i.bgSoft.tertiary[1]}}',
  danger = 'bg-{{=i.bgSoft.danger[0]}} dark:bg-{{=i.bgSoft.danger[1]}}',
  warning = 'bg-{{=i.bgSoft.warning[0]}} dark:bg-{{=i.bgSoft.warning[1]}}',
  success = 'bg-{{=i.bgSoft.success[0]}} dark:bg-{{=i.bgSoft.success[1]}}',
  info = 'bg-{{=i.bgSoft.info[0]}} dark:bg-{{=i.bgSoft.info[1]}}',
  light = 'bg-{{=i.bgSoft.light[0]}} dark:bg-{{=i.bgSoft.light[1]}}',
  dark = 'bg-{{=i.bgSoft.dark[0]}} dark:bg-{{=i.bgSoft.dark[1]}} ',
  white = 'bg-{{=i.bgSoft.white[0]}} dark:bg-{{=i.bgSoft.white[1]}}',
  black = 'bg-{{=i.bgSoft.black[0]}} dark:bg-{{=i.bgSoft.black[1]}}',
}

export enum BgColorSoftHover {
  unstyled = '',
  primary = 'hover:bg-{{=i.bgSoft.primaryH[0]}} dark:hover:bg-{{=i.bgSoft.primaryH[1]}}',
  secondary = 'hover:bg-{{=i.bgSoft.secondaryH[0]}} dark:hover:bg-{{=i.bgSoft.secondaryH[1]}}',
  tertiary = 'hover:bg-{{=i.bgSoft.tertiaryH[0]}} dark:hover:bg-{{=i.bgSoft.tertiaryH[1]}}',
  danger = 'hover:bg-{{=i.bgSoft.dangerH[0]}} dark:hover:bg-{{=i.bgSoft.dangerH[1]}}',
  warning = 'hover:bg-{{=i.bgSoft.warningH[0]}} dark:hover:bg-{{=i.bgSoft.warningH[1]}}',
  success = 'hover:bg-{{=i.bgSoft.successH[0]}} dark:hover:bg-{{=i.bgSoft.successH[1]}}',
  info = 'hover:bg-{{=i.bgSoft.infoH[0]}} dark:hover:bg-{{=i.bgSoft.infoH[1]}}',
  light = 'hover:bg-{{=i.bgSoft.lightH[0]}} dark:hover:bg-{{=i.bgSoft.lightH[1]}}',
  dark = 'hover:bg-{{=i.bgSoft.darkH[0]}} dark:hover:bg-{{=i.bgSoft.darkH[1]}} ',
  white = 'hover:bg-{{=i.bgSoft.whiteH[0]}} dark:hover:bg-{{=i.bgSoft.whiteH[1]}}',
  black = 'hover:bg-{{=i.bgSoft.blackH[0]}} dark:hover:bg-{{=i.bgSoft.blackH[1]}}',
}

export enum BgColorGhostHover {
  unstyled = '',
  primary = 'hover:bg-{{=i.bgSoft.primary[0]}} dark:hover:bg-{{=i.bgSoft.primary[1]}}',
  secondary = 'hover:bg-{{=i.bgSoft.secondary[0]}} dark:hover:bg-{{=i.bgSoft.secondary[1]}}',
  tertiary = 'hover:bg-{{=i.bgSoft.tertiary[0]}} dark:hover:bg-{{=i.bgSoft.tertiary[1]}}',
  danger = 'hover:bg-{{=i.bgSoft.danger[0]}} dark:hover:bg-{{=i.bgSoft.danger[1]}}',
  warning = 'hover:bg-{{=i.bgSoft.warning[0]}} dark:hover:bg-{{=i.bgSoft.warning[1]}}',
  success = 'hover:bg-{{=i.bgSoft.success[0]}} dark:hover:bg-{{=i.bgSoft.success[1]}}',
  info = 'hover:bg-{{=i.bgSoft.info[0]}} dark:hover:bg-{{=i.bgSoft.info[1]}}',
  light = 'hover:bg-{{=i.bgSoft.light[0]}} dark:hover:bg-{{=i.bgSoft.light[1]}}',
  dark = 'hover:bg-{{=i.bgSoft.dark[0]}} dark:hover:bg-{{=i.bgSoft.dark[1]}} ',
  white = 'hover:bg-{{=i.bgSoft.white[0]}} dark:hover:bg-{{=i.bgSoft.white[1]}}',
  black = 'hover:bg-{{=i.bgSoft.black[0]}} dark:hover:bg-{{=i.bgSoft.black[1]}}',
}

export enum BgColorSoftGroupHover {
  unstyled = '',
  primary = 'group-hover:bg-{{=i.bgSoft.primaryH[0]}} dark:group-hover:bg-{{=i.bgSoft.primaryH[1]}}',
  secondary = 'group-hover:bg-{{=i.bgSoft.secondaryH[0]}} dark:group-hover:bg-{{=i.bgSoft.secondaryH[1]}}',
  tertiary = 'group-hover:bg-{{=i.bgSoft.tertiaryH[0]}} dark:group-hover:bg-{{=i.bgSoft.tertiaryH[1]}}',
  danger = 'group-hover:bg-{{=i.bgSoft.dangerH[0]}} dark:group-hover:bg-{{=i.bgSoft.dangerH[1]}}',
  warning = 'group-hover:bg-{{=i.bgSoft.warningH[0]}} dark:group-hover:bg-{{=i.bgSoft.warningH[1]}}',
  success = 'group-hover:bg-{{=i.bgSoft.successH[0]}} dark:group-hover:bg-{{=i.bgSoft.successH[1]}}',
  info = 'group-hover:bg-{{=i.bgSoft.infoH[0]}} dark:group-hover:bg-{{=i.bgSoft.infoH[1]}}',
  light = 'group-hover:bg-{{=i.bgSoft.lightH[0]}} dark:group-hover:bg-{{=i.bgSoft.lightH[1]}}',
  dark = 'group-hover:bg-{{=i.bgSoft.darkH[0]}} dark:group-hover:bg-{{=i.bgSoft.darkH[1]}} ',
  white = 'group-hover:bg-{{=i.bgSoft.whiteH[0]}} dark:group-hover:bg-{{=i.bgSoft.whiteH[1]}}',
  black = 'group-hover:bg-{{=i.bgSoft.blackH[0]}} dark:group-hover:bg-{{=i.bgSoft.blackH[1]}}',
}

export enum BgColorSelected {
  unstyled = '',
  primary = 'aria-selected:bg-{{=i.bgSelect.primary[0]}} dark:aria-selected:bg-{{=i.bgSelect.primary[1]}}',
  secondary = 'aria-selected:bg-{{=i.bgSelect.secondary[0]}} dark:aria-selected:bg-{{=i.bgSelect.secondary[1]}}',
  tertiary = 'aria-selected:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-selected:bg-{{=i.bgSelect.tertiary[1]}}',
  danger = 'aria-selected:bg-{{=i.bgSelect.danger[0]}} dark:aria-selected:bg-{{=i.bgSelect.danger[1]}}',
  warning = 'aria-selected:bg-{{=i.bgSelect.warning[0]}} dark:aria-selected:bg-{{=i.bgSelect.warning[1]}}',
  success = 'aria-selected:bg-{{=i.bgSelect.success[0]}} dark:aria-selected:bg-{{=i.bgSelect.success[1]}}',
  info = 'aria-selected:bg-{{=i.bgSelect.info[0]}} dark:aria-selected:bg-{{=i.bgSelect.info[1]}}',
  light = 'aria-selected:bg-{{=i.bgSelect.light[0]}} dark:aria-selected:bg-{{=i.bgSelect.light[1]}}',
  dark = 'aria-selected:bg-{{=i.bgSelect.dark[0]}} dark:aria-selected:bg-{{=i.bgSelect.dark[1]}} ',
  white = 'aria-selected:bg-{{=i.bgSelect.white[0]}} dark:aria-selected:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-selected:bg-{{=i.bgSelect.black[0]}} dark:aria-selected:bg-{{=i.bgSelect.black[1]}}',
}

export enum BgColorExpanded {
  unstyled = '',
  primary = 'aria-expanded:bg-{{=i.bgSelect.primary[0]}} dark:aria-expanded:bg-{{=i.bgSelect.primary[1]}}',
  secondary = 'aria-expanded:bg-{{=i.bgSelect.secondary[0]}} dark:aria-expanded:bg-{{=i.bgSelect.secondary[1]}}',
  tertiary = 'aria-expanded:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-expanded:bg-{{=i.bgSelect.tertiary[1]}}',
  danger = 'aria-expanded:bg-{{=i.bgSelect.danger[0]}} dark:aria-expanded:bg-{{=i.bgSelect.danger[1]}}',
  warning = 'aria-expanded:bg-{{=i.bgSelect.warning[0]}} dark:aria-expanded:bg-{{=i.bgSelect.warning[1]}}',
  success = 'aria-expanded:bg-{{=i.bgSelect.success[0]}} dark:aria-expanded:bg-{{=i.bgSelect.success[1]}}',
  info = 'aria-expanded:bg-{{=i.bgSelect.info[0]}} dark:aria-expanded:bg-{{=i.bgSelect.info[1]}}',
  light = 'aria-expanded:bg-{{=i.bgSelect.light[0]}} dark:aria-expanded:bg-{{=i.bgSelect.light[1]}}',
  dark = 'aria-expanded:bg-{{=i.bgSelect.dark[0]}} dark:aria-expanded:bg-{{=i.bgSelect.dark[1]}} ',
  white = 'aria-expanded:bg-{{=i.bgSelect.white[0]}} dark:aria-expanded:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-expanded:bg-{{=i.bgSelect.black[0]}} dark:aria-expanded:bg-{{=i.bgSelect.black[1]}}',
}

export enum BgColorChecked {
  unstyled = '',
  primary = 'aria-checked:bg-{{=i.bgSelect.primary[0]}} dark:aria-checked:bg-{{=i.bgSelect.primary[1]}}',
  secondary = 'aria-checked:bg-{{=i.bgSelect.secondary[0]}} dark:aria-checked:bg-{{=i.bgSelect.secondary[1]}}',
  tertiary = 'aria-checked:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-checked:bg-{{=i.bgSelect.tertiary[1]}}',
  danger = 'aria-checked:bg-{{=i.bgSelect.danger[0]}} dark:aria-checked:bg-{{=i.bgSelect.danger[1]}}',
  warning = 'aria-checked:bg-{{=i.bgSelect.warning[0]}} dark:aria-checked:bg-{{=i.bgSelect.warning[1]}}',
  success = 'aria-checked:bg-{{=i.bgSelect.success[0]}} dark:aria-checked:bg-{{=i.bgSelect.success[1]}}',
  info = 'aria-checked:bg-{{=i.bgSelect.info[0]}} dark:aria-checked:bg-{{=i.bgSelect.info[1]}}',
  light = 'aria-checked:bg-{{=i.bgSelect.light[0]}} dark:aria-checked:bg-{{=i.bgSelect.light[1]}}',
  dark = 'aria-checked:bg-{{=i.bgSelect.dark[0]}} dark:aria-checked:bg-{{=i.bgSelect.dark[1]}} ',
  white = 'aria-checked:bg-{{=i.bgSelect.white[0]}} dark:aria-checked:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-checked:bg-{{=i.bgSelect.black[0]}} dark:aria-checked:bg-{{=i.bgSelect.black[1]}}',
}

export enum BgColorCurrent {
  unstyled = '',
  primary = 'aria-[current="page"]:bg-{{=i.bgSelect.primary[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.primary[1]}}',
  secondary = 'aria-[current="page"]:bg-{{=i.bgSelect.secondary[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.secondary[1]}}',
  tertiary = 'aria-[current="page"]:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.tertiary[1]}}',
  danger = 'aria-[current="page"]:bg-{{=i.bgSelect.danger[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.danger[1]}}',
  warning = 'aria-[current="page"]:bg-{{=i.bgSelect.warning[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.warning[1]}}',
  success = 'aria-[current="page"]:bg-{{=i.bgSelect.success[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.success[1]}}',
  info = 'aria-[current="page"]:bg-{{=i.bgSelect.info[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.info[1]}}',
  light = 'aria-[current="page"]:bg-{{=i.bgSelect.light[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.light[1]}}',
  dark = 'aria-[current="page"]:bg-{{=i.bgSelect.dark[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.dark[1]}} ',
  white = 'aria-[current="page"]:bg-{{=i.bgSelect.white[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.white[1]}}',
  black = 'aria-[current="page"]:bg-{{=i.bgSelect.black[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.black[1]}}',
}

export enum OutlineColorFocus {
  unstyled = '',
  primary = 'focus:outline-{{=i.bgFocus.primary[0]}} dark:focus:outline-{{=i.bgFocus.primary[1]}}',
  secondary = 'focus:outline-{{=i.bgFocus.secondary[0]}} dark:focus:outline-{{=i.bgFocus.secondary[1]}}',
  tertiary = 'focus:outline-{{=i.bgFocus.tertiary[0]}} dark:focus:outline-{{=i.bgFocus.tertiary[1]}}',
  danger = 'focus:outline-{{=i.bgFocus.danger[0]}} dark:focus:outline-{{=i.bgFocus.danger[1]}}',
  warning = 'focus:outline-{{=i.bgFocus.warning[0]}} dark:focus:outline-{{=i.bgFocus.warning[1]}}',
  success = 'focus:outline-{{=i.bgFocus.success[0]}} dark:focus:outline-{{=i.bgFocus.success[1]}}',
  info = 'focus:outline-{{=i.bgFocus.info[0]}} dark:focus:outline-{{=i.bgFocus.info[1]}}',
  light = 'focus:outline-{{=i.bgFocus.light[0]}} dark:focus:outline-{{=i.bgFocus.light[1]}}',
  dark = 'focus:outline-{{=i.bgFocus.dark[0]}} dark:focus:outline-{{=i.bgFocus.dark[1]}} ',
  white = 'focus:outline-{{=i.bgFocus.white[0]}} dark:focus:outline-{{=i.bgFocus.white[1]}}',
  black = 'focus:outline-{{=i.bgFocus.black[0]}} dark:focus:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusVisible {
  unstyled = '',
  primary = 'focus-visible:outline-{{=i.bgFocus.primary[0]}} dark:focus-visible:outline-{{=i.bgFocus.primary[1]}}',
  secondary = 'focus-visible:outline-{{=i.bgFocus.secondary[0]}} dark:focus-visible:outline-{{=i.bgFocus.secondary[1]}}',
  tertiary = 'focus-visible:outline-{{=i.bgFocus.tertiary[0]}} dark:focus-visible:outline-{{=i.bgFocus.tertiary[1]}}',
  danger = 'focus-visible:outline-{{=i.bgFocus.danger[0]}} dark:focus-visible:outline-{{=i.bgFocus.danger[1]}}',
  warning = 'focus-visible:outline-{{=i.bgFocus.warning[0]}} dark:focus-visible:outline-{{=i.bgFocus.warning[1]}}',
  success = 'focus-visible:outline-{{=i.bgFocus.success[0]}} dark:focus-visible:outline-{{=i.bgFocus.success[1]}}',
  info = 'focus-visible:outline-{{=i.bgFocus.info[0]}} dark:focus-visible:outline-{{=i.bgFocus.info[1]}}',
  light = 'focus-visible:outline-{{=i.bgFocus.light[0]}} dark:focus-visible:outline-{{=i.bgFocus.light[1]}}',
  dark = 'focus-visible:outline-{{=i.bgFocus.dark[0]}} dark:focus-visible:outline-{{=i.bgFocus.dark[1]}} ',
  white = 'focus-visible:outline-{{=i.bgFocus.white[0]}} dark:focus-visible:outline-{{=i.bgFocus.white[1]}}',
  black = 'focus-visible:outline-{{=i.bgFocus.black[0]}} dark:focus-visible:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusGroup {
  unstyled = '',
  primary = 'group-focus:outline-{{=i.bgFocus.primary[0]}} dark:group-focus:outline-{{=i.bgFocus.primary[1]}}',
  secondary = 'group-focus:outline-{{=i.bgFocus.secondary[0]}} dark:group-focus:outline-{{=i.bgFocus.secondary[1]}}',
  tertiary = 'group-focus:outline-{{=i.bgFocus.tertiary[0]}} dark:group-focus:outline-{{=i.bgFocus.tertiary[1]}}',
  danger = 'group-focus:outline-{{=i.bgFocus.danger[0]}} dark:group-focus:outline-{{=i.bgFocus.danger[1]}}',
  warning = 'group-focus:outline-{{=i.bgFocus.warning[0]}} dark:group-focus:outline-{{=i.bgFocus.warning[1]}}',
  success = 'group-focus:outline-{{=i.bgFocus.success[0]}} dark:group-focus:outline-{{=i.bgFocus.success[1]}}',
  info = 'group-focus:outline-{{=i.bgFocus.info[0]}} dark:group-focus:outline-{{=i.bgFocus.info[1]}}',
  light = 'group-focus:outline-{{=i.bgFocus.light[0]}} dark:group-focus:outline-{{=i.bgFocus.light[1]}}',
  dark = 'group-focus:outline-{{=i.bgFocus.dark[0]}} dark:group-focus:outline-{{=i.bgFocus.dark[1]}} ',
  white = 'group-focus:outline-{{=i.bgFocus.white[0]}} dark:group-focus:outline-{{=i.bgFocus.white[1]}}',
  black = 'group-focus:outline-{{=i.bgFocus.black[0]}} dark:group-focus:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusWithin {
  unstyled = '',
  primary = 'focus-within:outline-{{=i.bgFocus.primary[0]}} dark:focus-within:outline-{{=i.bgFocus.primary[1]}}',
  secondary = 'focus-within:outline-{{=i.bgFocus.secondary[0]}} dark:focus-within:outline-{{=i.bgFocus.secondary[1]}}',
  tertiary = 'focus-within:outline-{{=i.bgFocus.tertiary[0]}} dark:focus-within:outline-{{=i.bgFocus.tertiary[1]}}',
  danger = 'focus-within:outline-{{=i.bgFocus.danger[0]}} dark:focus-within:outline-{{=i.bgFocus.danger[1]}}',
  warning = 'focus-within:outline-{{=i.bgFocus.warning[0]}} dark:focus-within:outline-{{=i.bgFocus.warning[1]}}',
  success = 'focus-within:outline-{{=i.bgFocus.success[0]}} dark:focus-within:outline-{{=i.bgFocus.success[1]}}',
  info = 'focus-within:outline-{{=i.bgFocus.info[0]}} dark:focus-within:outline-{{=i.bgFocus.info[1]}}',
  light = 'focus-within:outline-{{=i.bgFocus.light[0]}} dark:focus-within:outline-{{=i.bgFocus.light[1]}}',
  dark = 'focus-within:outline-{{=i.bgFocus.dark[0]}} dark:focus-within:outline-{{=i.bgFocus.dark[1]}} ',
  white = 'focus-within:outline-{{=i.bgFocus.white[0]}} dark:focus-within:outline-{{=i.bgFocus.white[1]}}',
  black = 'focus-within:outline-{{=i.bgFocus.black[0]}} dark:focus-within:outline-{{=i.bgFocus.black[1]}}',
}

export enum OutlineColorFocusPeer {
  unstyled = '',
  primary = 'peer-focus:outline-{{=i.bgFocus.primary[0]}} dark:peer-focus:outline-{{=i.bgFocus.primary[1]}}',
  secondary = 'peer-focus:outline-{{=i.bgFocus.secondary[0]}} dark:peer-focus:outline-{{=i.bgFocus.secondary[1]}}',
  tertiary = 'peer-focus:outline-{{=i.bgFocus.tertiary[0]}} dark:peer-focus:outline-{{=i.bgFocus.tertiary[1]}}',
  danger = 'peer-focus:outline-{{=i.bgFocus.danger[0]}} dark:peer-focus:outline-{{=i.bgFocus.danger[1]}}',
  warning = 'peer-focus:outline-{{=i.bgFocus.warning[0]}} dark:peer-focus:outline-{{=i.bgFocus.warning[1]}}',
  success = 'peer-focus:outline-{{=i.bgFocus.success[0]}} dark:peer-focus:outline-{{=i.bgFocus.success[1]}}',
  info = 'peer-focus:outline-{{=i.bgFocus.info[0]}} dark:peer-focus:outline-{{=i.bgFocus.info[1]}}',
  light = 'peer-focus:outline-{{=i.bgFocus.light[0]}} dark:peer-focus:outline-{{=i.bgFocus.light[1]}}',
  dark = 'peer-focus:outline-{{=i.bgFocus.dark[0]}} dark:peer-focus:outline-{{=i.bgFocus.dark[1]}} ',
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

export const colors = Object.keys(BgColor) as ThemeColor[];