export type FocusType = keyof typeof FocusTypes;
export type SelectType = keyof typeof SelectTypes;
export type ThemeColor = keyof typeof FontColor;

export const build = {{~i.$components}}

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
};

export const Animate = {
unstyled: '',
none: 'animate-none',
bounce: 'motion-safe:animate-bounce',
ping: 'motion-safe:animate-ping',
pulse: 'motion-safe:animate-pulse',
spin: 'motion-safe:animate-spin'
};


export const AlertIcons = {
// primary: '',
// secondary: '',
// tertiary: '',
danger: 'mdi:dangerous',
warning: 'mdi:alert-outline',
info: 'mdi:information-outline',
success: 'mdi:check',
// white: '',
// light: '',
// dark: '',
// unstyled: ''
};

export const Size = {
unstyled: '',
xs: 'xs',
sm: 'sm',
md: 'md',
lg: 'lg',
xl: 'xl',
xl2: 'xl2',
};

export const ImageSize = {
unstyled: '',
xs: 'size-8',
sm: 'size-12',
md: 'size-20',
lg: 'size-28',
xl: 'size-36',
xl2: 'size-48',
xl3: 'size-56',
xl4: 'size-64',
xl5: 'size-80',
xl6: 'size-96',
min: 'size-min',
max: 'size-max',
fit: 'size-fit',
full: 'size-full',
auto: 'size-auto',
'1/4': 'size-1/4',
'1/2': 'size-1/2',
'1/3': 'size-1/3',
'2/3': 'size-2/3',
'3/4': 'size-3/4',
};

export const ImageAspect = {
unstyled: '',
auto: 'aspect-auto',
square: 'aspect-square',
video: 'aspect-video'
}

export const Rounded = {
unstyled: '',
none: 'rounded-none',
xs: 'rounded-xs',
sm: 'rounded-sm',
md: 'rounded-md',
lg: 'rounded-lg',
xl: 'rounded-xl',
xl2: 'rounded-2xl',
full: 'rounded-full',
}

export const RingWidth = {
unstyled: '',
none: 'ring-0',
sm: 'ring-1',
md: 'ring-2',
lg: 'ring',
xl: 'ring-4',
xl2: 'ring-8'
}

export const RingOffset = {
unstyled: '',
inset: 'ring-inset',
none: 'ring-offset-0',
one: 'ring-offset-1',
two: 'ring-offset-2',
three: 'ring-offset-[3px]',
four: 'ring-offset-4',
eight: 'ring-offset-8'
}


export const OutlineWidth = {
unstyled: '',
none: 'outline-0',
sm: 'outline-1',
md: 'outline-2',
lg: 'outline-[3px]',
xl: 'outline-4',
xl2: 'outline-8'
}

export const OutlineOffset = {
unstyled: '',
none: 'outline-offset-0',
one: 'outline-offset-1',
two: 'outline-offset-2',
three: 'outline-offset-[3px]',
four: 'outline-offset-4',
eight: 'outline-offset-8'
}

export const Border = {
unstyled: '',
transparent: 'border-transparent',
hidden: 'border-hidden',
none: 'border-0',
xs: 'border',
sm: 'border-2',
md: 'border-4',
lg: 'border-6',
xl: 'border-8',
xl2: 'border-10'
}

export const Shadow = {
unstyled: '',
inner: 'shadow-inner',
none: 'shadow-none',
xs: 'shadow-xs',
sm: 'shadow',
md: 'shadow-md',
lg: 'shadow-lg',
xl: 'shadow-xl',
xl2: 'shadow-2xl'
}

export const DropShadow = {
unstyled: '',
none: 'drop-shadow-none',
xs: 'drop-shadow-xs',
sm: 'drop-shadow',
md: 'drop-shadow-md',
lg: 'drop-shadow-lg',
xl: 'drop-shadow-xl',
xl2: 'drop-shadow-2xl'
}

export const FieldPaddingY = {
unstyled: '',
xs: 'py-0.5',
sm: 'py-1',
md: 'py-1.5',
lg: 'py-2',
xl: 'py-2.5',
xl2: 'py-3'
}

export const FieldPaddingX = {
unstyled: '',
xs: 'px-2',
sm: 'px-2.5',
md: 'px-3',
lg: 'px-3.5',
xl: 'px-5',
xl2: 'px-6'
}

export const ButtonPaddingX = {
unstyled: '',
xs: 'px-3',
sm: 'px-3.5',
md: 'px-5',
lg: 'px-6',
xl: 'px-7',
xl2: 'px-8'
};

export const BadgePaddingX = {
unstyled: '',
xs: 'px-1',
sm: 'px-1.5 ',
md: 'px-1.5',
lg: 'px-2',
xl: 'px-2 ',
xl2: 'px-2.5'
};

export const AlertPadding = {
unstyled: '',
xs: 'p-2.5',
sm: 'p-3',
md: 'p-4',
lg: 'p-5',
xl: 'p-6',
xl2: 'p-7'
};

export const IconSize = {
unstyled: '',
xs: 'h-4 w-4',
sm: 'h-5 w-5',
md: 'h-6 w-6',
lg: 'h-8 w-8',
xl: 'h-10 w-10',
xl2: 'h-12 w-12',
full: 'w-full h-full'
};

export const AlertIconSize = {
unstyled: '',
xs: 'h-4 w-4',
sm: 'h-4.5 w-4.5',
md: 'h-5 w-5',
lg: 'h-6 w-6',
xl: 'h-7 w-7',
xl2: 'h-8 w-8'
};


export const FontSize = {
unstyled: '',
xss: 'text-[10px]',
xs: 'text-xs',
sm: 'text-sm',
md: 'text-base',
lg: 'text-lg',
xl: 'text-xl',
xl2: 'text-2xl',
xl3: 'text-3xl',
xl4: 'text-4xl',
xl5: 'text-5xl',
xl6: 'text-6xl',
xl7: 'text-7xl',
xl8: 'text-8xl',
xl9: 'text-9xl'
};


export const ButtonFontSize = {
unstyled: '',
xs: FontSize.xs,
sm: FontSize.sm,
md: FontSize.sm,
lg: FontSize.md,
xl: FontSize.lg,
xl2: FontSize.xl
};

export const BadgeFontSize = {
unstyled: '',
xs: 'text-[10px]', // leading-3
sm: FontSize.xs,
md: FontSize.sm,
lg: FontSize.md,
xl: FontSize.lg,
xl2: FontSize.xl
};

export const AvatarSize = {
unstyled: '',
xs: 'h-8 w-8',
sm: 'h-10 w-10',
md: 'h-12 w-12',
lg: 'h-16 w-16',
xl: 'h-20 w-20',
xl2: 'h-28 w-28'
};

export const FontWeight = {
unstyled: '',
thin: 'font-thin',
extralight: 'font-extralight',
light: 'font-light',
normal: 'font-normal',
medium: 'font-medium',
semibold: 'font-semibold',
bold: 'font-bold',
extrabold: 'font-extrabold',
};

export const FontLeading = {
unstyled: '',
none: 'leading-none',
xs: 'leading-3',
sm: 'leading-4',
md: 'leading-5',
lg: 'leading-6',
xl: 'leading-7',
xl2: 'leading-8',
xl3: 'leading-9',
xl4: 'leading-10',
tight: 'leading-tight',
snug: 'leading-snug',
normal: 'leading-normal',
relaxed: 'leading-relaxed',
loose: 'leading-loose'
};

export const FillColor = {
unstyled: '',
primary: 'text-{{=i.icon.primary[0]}} dark:text-{{=i.icon.primary[1]}}',
secondary: 'text-{{=i.icon.secondary[0]}} dark:text-{{=i.icon.secondary[1]}}',
tertiary: 'text-{{=i.icon.tertiary[0]}} dark:text-{{=i.icon.tertiary[1]}}',
danger: 'text-{{=i.icon.danger[0]}} dark:text-{{=i.icon.danger[1]}}',
warning: 'text-{{=i.icon.warning[0]}} dark:text-{{=i.icon.warning[1]}}',
success: 'text-{{=i.icon.success[0]}} dark:text-{{=i.icon.success[1]}}',
info: 'text-{{=i.icon.info[0]}} dark:text-{{=i.icon.info[1]}}',
light: 'text-{{=i.icon.light[0]}} dark:text-{{=i.icon.light[1]}}',
dark: 'text-{{=i.icon.dark[0]}} dark:text-{{=i.icon.dark[1]}} ',
white: 'text-{{=i.icon.white[0]}} dark:text-{{=i.icon.white[1]}}',
};

export const FillColorHover = {
unstyled: '',
primary: 'hover:text-{{=i.icon.primaryH[0]}} dark:hover:text-{{=i.icon.primaryH[1]}}',
secondary: 'hover:text-{{=i.icon.secondaryH[0]}} dark:hover:text-{{=i.icon.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.icon.tertiaryH[0]}} dark:hover:text-{{=i.icon.tertiaryH[1]}}',
danger: 'hover:text-{{=i.icon.dangerH[0]}} dark:hover:text-{{=i.icon.dangerH[1]}}',
warning: 'hover:text-{{=i.icon.warningH[0]}} dark:hover:text-{{=i.icon.warningH[1]}}',
success: 'hover:text-{{=i.icon.successH[0]}} dark:hover:text-{{=i.icon.successH[1]}}',
info: 'hover:text-{{=i.icon.infoH[0]}} dark:hover:text-{{=i.icon.infoH[1]}}',
light: 'hover:text-{{=i.icon.lightH[0]}} dark:hover:text-{{=i.icon.lightH[1]}}',
dark: 'hover:text-{{=i.icon.darkH[0]}} dark:hover:text-{{=i.icon.darkH[1]}} ',
white: 'hover:text-{{=i.icon.whiteH[0]}} dark:hover:text-{{=i.icon.whiteH[1]}}',
};

export const FillColorSoft = {
unstyled: '',
primary: 'text-{{=i.iconSoft.primary[0]}} dark:text-{{=i.iconSoft.primary[1]}}',
secondary: 'text-{{=i.iconSoft.secondary[0]}} dark:text-{{=i.iconSoft.secondary[1]}}',
tertiary: 'text-{{=i.iconSoft.tertiary[0]}} dark:text-{{=i.iconSoft.tertiary[1]}}',
danger: 'text-{{=i.iconSoft.danger[0]}} dark:text-{{=i.iconSoft.danger[1]}}',
warning: 'text-{{=i.iconSoft.warning[0]}} dark:text-{{=i.iconSoft.warning[1]}}',
success: 'text-{{=i.iconSoft.success[0]}} dark:text-{{=i.iconSoft.success[1]}}',
info: 'text-{{=i.iconSoft.info[0]}} dark:text-{{=i.iconSoft.info[1]}}',
light: 'text-{{=i.iconSoft.light[0]}} dark:text-{{=i.iconSoft.light[1]}}',
dark: 'text-{{=i.iconSoft.dark[0]}} dark:text-{{=i.iconSoft.dark[1]}} ',
white: 'text-{{=i.iconSoft.white[0]}} dark:text-{{=i.iconSoft.white[1]}}',
};

export const FillColorSoftHover = {
unstyled: '',
primary: 'hover:text-{{=i.iconSoft.primaryH[0]}} dark:hover:text-{{=i.iconSoft.primaryH[1]}}',
secondary: 'hover:text-{{=i.iconSoft.secondaryH[0]}} dark:hover:text-{{=i.iconSoft.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.iconSoft.tertiaryH[0]}} dark:hover:text-{{=i.iconSoft.tertiaryH[1]}}',
danger: 'hover:text-{{=i.iconSoft.dangerH[0]}} dark:hover:text-{{=i.iconSoft.dangerH[1]}}',
warning: 'hover:text-{{=i.iconSoft.warningH[0]}} dark:hover:text-{{=i.iconSoft.warningH[1]}}',
success: 'hover:text-{{=i.iconSoft.successH[0]}} dark:hover:text-{{=i.iconSoft.successH[1]}}',
info: 'hover:text-{{=i.iconSoft.infoH[0]}} dark:hover:text-{{=i.iconSoft.infoH[1]}}',
light: 'hover:text-{{=i.iconSoft.lightH[0]}} dark:hover:text-{{=i.iconSoft.lightH[1]}}',
dark: 'hover:text-{{=i.iconSoft.darkH[0]}} dark:hover:text-{{=i.iconSoft.darkH[1]}} ',
white: 'hover:text-{{=i.iconSoft.whiteH[0]}} dark:hover:text-{{=i.iconSoft.whiteH[1]}}',
};

export const StrokeColor = {
unstyled: '',
primary: 'stroke-{{=i.icon.primary[0]}} dark:stroke-{{=i.icon.primary[1]}}',
secondary: 'stroke-{{=i.icon.secondary[0]}} dark:stroke-{{=i.icon.secondary[1]}}',
tertiary: 'stroke-{{=i.icon.tertiary[0]}} dark:stroke-{{=i.icon.tertiary[1]}}',
danger: 'stroke-{{=i.icon.danger[0]}} dark:stroke-{{=i.icon.danger[1]}}',
warning: 'stroke-{{=i.icon.warning[0]}} dark:stroke-{{=i.icon.warning[1]}}',
success: 'stroke-{{=i.icon.success[0]}} dark:stroke-{{=i.icon.success[1]}}',
info: 'stroke-{{=i.icon.info[0]}} dark:stroke-{{=i.icon.info[1]}}',
light: 'stroke-{{=i.icon.light[0]}} dark:stroke-{{=i.icon.light[1]}}',
dark: 'stroke-{{=i.icon.dark[0]}} dark:stroke-{{=i.icon.dark[1]}} ',
white: 'stroke-{{=i.icon.white[0]}} dark:stroke-{{=i.icon.white[1]}}',
};

export const StrokeColorHover = {
unstyled: '',
primary: 'hover:stroke-{{=i.icon.primaryH[0]}} dark:hover:stroke-{{=i.icon.primaryH[1]}}',
secondary: 'hover:stroke-{{=i.icon.secondaryH[0]}} dark:hover:stroke-{{=i.icon.secondaryH[1]}}',
tertiary: 'hover:stroke-{{=i.icon.tertiaryH[0]}} dark:hover:stroke-{{=i.icon.tertiaryH[1]}}',
danger: 'hover:stroke-{{=i.icon.dangerH[0]}} dark:hover:stroke-{{=i.icon.dangerH[1]}}',
warning: 'hover:stroke-{{=i.icon.warningH[0]}} dark:hover:stroke-{{=i.icon.warningH[1]}}',
success: 'hover:stroke-{{=i.icon.successH[0]}} dark:hover:stroke-{{=i.icon.successH[1]}}',
info: 'hover:stroke-{{=i.icon.infoH[0]}} dark:hover:stroke-{{=i.icon.infoH[1]}}',
light: 'hover:stroke-{{=i.icon.lightH[0]}} dark:hover:stroke-{{=i.icon.lightH[1]}}',
dark: 'hover:stroke-{{=i.icon.darkH[0]}} dark:hover:stroke-{{=i.icon.darkH[1]}} ',
white: 'hover:stroke-{{=i.icon.whiteH[0]}} dark:hover:stroke-{{=i.icon.whiteH[1]}}',
};

export const StrokeColorSoft = {
unstyled: '',
primary: 'stroke-{{=i.iconSoft.primary[0]}} dark:stroke-{{=i.iconSoft.primary[1]}}',
secondary: 'stroke-{{=i.iconSoft.secondary[0]}} dark:stroke-{{=i.iconSoft.secondary[1]}}',
tertiary: 'stroke-{{=i.iconSoft.tertiary[0]}} dark:stroke-{{=i.iconSoft.tertiary[1]}}',
danger: 'stroke-{{=i.iconSoft.danger[0]}} dark:stroke-{{=i.iconSoft.danger[1]}}',
warning: 'stroke-{{=i.iconSoft.warning[0]}} dark:stroke-{{=i.iconSoft.warning[1]}}',
success: 'stroke-{{=i.iconSoft.success[0]}} dark:stroke-{{=i.iconSoft.success[1]}}',
info: 'stroke-{{=i.iconSoft.info[0]}} dark:stroke-{{=i.iconSoft.info[1]}}',
light: 'stroke-{{=i.iconSoft.light[0]}} dark:stroke-{{=i.iconSoft.light[1]}}',
dark: 'stroke-{{=i.iconSoft.dark[0]}} dark:stroke-{{=i.iconSoft.dark[1]}} ',
white: 'stroke-{{=i.iconSoft.white[0]}} dark:stroke-{{=i.iconSoft.white[1]}}',
};

export const StrokeColorSoftHover = {
unstyled: '',
primary: 'hover:stroke-{{=i.iconSoft.primaryH[0]}} dark:hover:stroke-{{=i.iconSoft.primaryH[1]}}',
secondary: 'hover:stroke-{{=i.iconSoft.secondaryH[0]}} dark:hover:stroke-{{=i.iconSoft.secondaryH[1]}}',
tertiary: 'hover:stroke-{{=i.iconSoft.tertiaryH[0]}} dark:hover:stroke-{{=i.iconSoft.tertiaryH[1]}}',
danger: 'hover:stroke-{{=i.iconSoft.dangerH[0]}} dark:hover:stroke-{{=i.iconSoft.dangerH[1]}}',
warning: 'hover:stroke-{{=i.iconSoft.warningH[0]}} dark:hover:stroke-{{=i.iconSoft.warningH[1]}}',
success: 'hover:stroke-{{=i.iconSoft.successH[0]}} dark:hover:stroke-{{=i.iconSoft.successH[1]}}',
info: 'hover:stroke-{{=i.iconSoft.infoH[0]}} dark:hover:stroke-{{=i.iconSoft.infoH[1]}}',
light: 'hover:stroke-{{=i.iconSoft.lightH[0]}} dark:hover:stroke-{{=i.iconSoft.lightH[1]}}',
dark: 'hover:stroke-{{=i.iconSoft.darkH[0]}} dark:hover:stroke-{{=i.iconSoft.darkH[1]}} ',
white: 'hover:stroke-{{=i.iconSoft.whiteH[0]}} dark:hover:stroke-{{=i.iconSoft.whiteH[1]}}',
};


export const FontColor = {
unstyled: '',
primary: 'text-{{=i.font.primary[0]}} dark:text-{{=i.font.primary[1]}}',
secondary: 'text-{{=i.font.secondary[0]}} dark:text-{{=i.font.secondary[1]}}',
tertiary: 'text-{{=i.font.tertiary[0]}} dark:text-{{=i.font.tertiary[1]}}',
danger: 'text-{{=i.font.danger[0]}} dark:text-{{=i.font.danger[1]}}',
warning: 'text-{{=i.font.warning[0]}} dark:text-{{=i.font.warning[1]}}',
success: 'text-{{=i.font.success[0]}} dark:text-{{=i.font.success[1]}}',
info: 'text-{{=i.font.info[0]}} dark:text-{{=i.font.info[1]}}',
light: 'text-{{=i.font.light[0]}} dark:text-{{=i.font.light[1]}}',
dark: 'text-{{=i.font.dark[0]}} dark:text-{{=i.font.dark[1]}} ',
white: 'text-{{=i.font.white[0]}} dark:text-{{=i.font.white[1]}}',
};

export const FontColorHover = {
unstyled: '',
primary: 'hover:text-{{=i.font.primaryH[0]}} dark:hover:text-{{=i.font.primaryH[1]}}',
secondary: 'hover:text-{{=i.font.secondaryH[0]}} dark:hover:text-{{=i.font.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.font.tertiaryH[0]}} dark:hover:text-{{=i.font.tertiaryH[1]}}',
danger: 'hover:text-{{=i.font.dangerH[0]}} dark:hover:text-{{=i.font.dangerH[1]}}',
warning: 'hover:text-{{=i.font.warningH[0]}} dark:hover:text-{{=i.font.warningH[1]}}',
success: 'hover:text-{{=i.font.successH[0]}} dark:hover:text-{{=i.font.successH[1]}}',
info: 'hover:text-{{=i.font.infoH[0]}} dark:hover:text-{{=i.font.infoH[1]}}',
light: 'hover:text-{{=i.font.lightH[0]}} dark:hover:text-{{=i.font.lightH[1]}}',
dark: 'hover:text-{{=i.font.darkH[0]}} dark:hover:text-{{=i.font.darkH[1]}} ',
white: 'hover:text-{{=i.font.whiteH[0]}} dark:hover:text-{{=i.font.whiteH[1]}}',
};

export const ForeColorText = {
unstyled: '',
primary: 'text-{{=i.foreText.primary[0]}} dark:text-{{=i.foreText.primary[1]}}',
secondary: 'text-{{=i.foreText.secondary[0]}} dark:text-{{=i.foreText.secondary[1]}}',
tertiary: 'text-{{=i.foreText.tertiary[0]}} dark:text-{{=i.foreText.tertiary[1]}}',
danger: 'text-{{=i.foreText.danger[0]}} dark:text-{{=i.foreText.danger[1]}}',
warning: 'text-{{=i.foreText.warning[0]}} dark:text-{{=i.foreText.warning[1]}}',
success: 'text-{{=i.foreText.success[0]}} dark:text-{{=i.foreText.success[1]}}',
info: 'text-{{=i.foreText.info[0]}} dark:text-{{=i.foreText.info[1]}}',
light: 'text-{{=i.foreText.light[0]}} dark:text-{{=i.foreText.light[1]}}',
dark: 'text-{{=i.foreText.dark[0]}} dark:text-{{=i.foreText.dark[1]}} ',
white: 'text-{{=i.foreText.white[0]}} dark:text-{{=i.foreText.white[1]}}',
};

export const ForeColorTextHover = {
unstyled: '',
primary: 'hover:text-{{=i.foreText.primaryH[0]}} dark:hover:text-{{=i.foreText.primaryH[1]}}',
secondary: 'hover:text-{{=i.foreText.secondaryH[0]}} dark:hover:text-{{=i.foreText.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.foreText.tertiaryH[0]}} dark:hover:text-{{=i.foreText.tertiaryH[1]}}',
danger: 'hover:text-{{=i.foreText.dangerH[0]}} dark:hover:text-{{=i.foreText.dangerH[1]}}',
warning: 'hover:text-{{=i.foreText.warningH[0]}} dark:hover:text-{{=i.foreText.warningH[1]}}',
success: 'hover:text-{{=i.foreText.successH[0]}} dark:hover:text-{{=i.foreText.successH[1]}}',
info: 'hover:text-{{=i.foreText.infoH[0]}} dark:hover:text-{{=i.foreText.infoH[1]}}',
light: 'hover:text-{{=i.foreText.lightH[0]}} dark:hover:text-{{=i.foreText.lightH[1]}}',
dark: 'hover:text-{{=i.foreText.darkH[0]}} dark:hover:text-{{=i.foreText.darkH[1]}} ',
white: 'hover:text-{{=i.foreText.whiteH[0]}} dark:hover:text-{{=i.foreText.whiteH[1]}}',
};

export const ForeColorFilled = {
unstyled: '',
primary: 'text-{{=i.foreFill.primary[0]}} dark:text-{{=i.foreFill.primary[1]}}',
secondary: 'text-{{=i.foreFill.secondary[0]}} dark:text-{{=i.foreFill.secondary[1]}}',
tertiary: 'text-{{=i.foreFill.tertiary[0]}} dark:text-{{=i.foreFill.tertiary[1]}}',
danger: 'text-{{=i.foreFill.danger[0]}} dark:text-{{=i.foreFill.danger[1]}}',
warning: 'text-{{=i.foreFill.warning[0]}} dark:text-{{=i.foreFill.warning[1]}}',
success: 'text-{{=i.foreFill.success[0]}} dark:text-{{=i.foreFill.success[1]}}',
info: 'text-{{=i.foreFill.info[0]}} dark:text-{{=i.foreFill.info[1]}}',
light: 'text-{{=i.foreFill.light[0]}} dark:text-{{=i.foreFill.light[1]}}',
dark: 'text-{{=i.foreFill.dark[0]}} dark:text-{{=i.foreFill.dark[1]}} ',
white: 'text-{{=i.foreFill.white[0]}} dark:text-{{=i.foreFill.white[1]}}',
};

export const ForeColorFilledHover = {
unstyled: '',
primary: 'hover:text-{{=i.foreFill.primaryH[0]}} dark:hover:text-{{=i.foreFill.primaryH[1]}}',
secondary: 'hover:text-{{=i.foreFill.secondaryH[0]}} dark:hover:text-{{=i.foreFill.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.foreFill.tertiaryH[0]}} dark:hover:text-{{=i.foreFill.tertiaryH[1]}}',
danger: 'hover:text-{{=i.foreFill.dangerH[0]}} dark:hover:text-{{=i.foreFill.dangerH[1]}}',
warning: 'hover:text-{{=i.foreFill.warningH[0]}} dark:hover:text-{{=i.foreFill.warningH[1]}}',
success: 'hover:text-{{=i.foreFill.successH[0]}} dark:hover:text-{{=i.foreFill.successH[1]}}',
info: 'hover:text-{{=i.foreFill.infoH[0]}} dark:hover:text-{{=i.foreFill.infoH[1]}}',
light: 'hover:text-{{=i.foreFill.lightH[0]}} dark:hover:text-{{=i.foreFill.lightH[1]}}',
dark: 'hover:text-{{=i.foreFill.darkH[0]}} dark:hover:text-{{=i.foreFill.darkH[1]}} ',
white: 'hover:text-{{=i.foreFill.whiteH[0]}} dark:hover:text-{{=i.foreFill.whiteH[1]}}',
};

export const ForeColorSoft = {
unstyled: '',
primary: 'text-{{=i.foreSoft.primary[0]}} dark:text-{{=i.foreSoft.primary[1]}}',
secondary: 'text-{{=i.foreSoft.secondary[0]}} dark:text-{{=i.foreSoft.secondary[1]}}',
tertiary: 'text-{{=i.foreSoft.tertiary[0]}} dark:text-{{=i.foreSoft.tertiary[1]}}',
danger: 'text-{{=i.foreSoft.danger[0]}} dark:text-{{=i.foreSoft.danger[1]}}',
warning: 'text-{{=i.foreSoft.warning[0]}} dark:text-{{=i.foreSoft.warning[1]}}',
success: 'text-{{=i.foreSoft.success[0]}} dark:text-{{=i.foreSoft.success[1]}}',
info: 'text-{{=i.foreSoft.info[0]}} dark:text-{{=i.foreSoft.info[1]}}',
light: 'text-{{=i.foreSoft.light[0]}} dark:text-{{=i.foreSoft.light[1]}}',
dark: 'text-{{=i.foreSoft.dark[0]}} dark:text-{{=i.foreSoft.dark[1]}} ',
white: 'text-{{=i.foreSoft.white[0]}} dark:text-{{=i.foreSoft.white[1]}}',
};

export const ForeColorSoftHover = {
unstyled: '',
primary: 'hover:text-{{=i.foreSoft.primaryH[0]}} dark:hover:text-{{=i.foreSoft.primaryH[1]}}',
secondary: 'hover:text-{{=i.foreSoft.secondaryH[0]}} dark:hover:text-{{=i.foreSoft.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.foreSoft.tertiaryH[0]}} dark:hover:text-{{=i.foreSoft.tertiaryH[1]}}',
danger: 'hover:text-{{=i.foreSoft.dangerH[0]}} dark:hover:text-{{=i.foreSoft.dangerH[1]}}',
warning: 'hover:text-{{=i.foreSoft.warningH[0]}} dark:hover:text-{{=i.foreSoft.warningH[1]}}',
success: 'hover:text-{{=i.foreSoft.successH[0]}} dark:hover:text-{{=i.foreSoft.successH[1]}}',
info: 'hover:text-{{=i.foreSoft.infoH[0]}} dark:hover:text-{{=i.foreSoft.infoH[1]}}',
light: 'hover:text-{{=i.foreSoft.lightH[0]}} dark:hover:text-{{=i.foreSoft.lightH[1]}}',
dark: 'hover:text-{{=i.foreSoft.darkH[0]}} dark:hover:text-{{=i.foreSoft.darkH[1]}} ',
white: 'hover:text-{{=i.foreSoft.whiteH[0]}} dark:hover:text-{{=i.foreSoft.whiteH[1]}}',
};

export const ForeColorGhost = {
unstyled: '',
primary: 'text-{{=i.foreGhost.primary[0]}} dark:text-{{=i.foreGhost.primary[1]}}',
secondary: 'text-{{=i.foreGhost.secondary[0]}} dark:text-{{=i.foreGhost.secondary[1]}}',
tertiary: 'text-{{=i.foreGhost.tertiary[0]}} dark:text-{{=i.foreGhost.tertiary[1]}}',
danger: 'text-{{=i.foreGhost.danger[0]}} dark:text-{{=i.foreGhost.danger[1]}}',
warning: 'text-{{=i.foreGhost.warning[0]}} dark:text-{{=i.foreGhost.warning[1]}}',
success: 'text-{{=i.foreGhost.success[0]}} dark:text-{{=i.foreGhost.success[1]}}',
info: 'text-{{=i.foreGhost.info[0]}} dark:text-{{=i.foreGhost.info[1]}}',
light: 'text-{{=i.foreGhost.light[0]}} dark:text-{{=i.foreGhost.light[1]}}',
dark: 'text-{{=i.foreGhost.dark[0]}} dark:text-{{=i.foreGhost.dark[1]}} ',
white: 'text-{{=i.foreGhost.white[0]}} dark:text-{{=i.foreGhost.white[1]}}',
};

export const ForeColorGhostHover = {
unstyled: '',
primary: 'hover:text-{{=i.foreGhost.primaryH[0]}} dark:hover:text-{{=i.foreGhost.primaryH[1]}}',
secondary: 'hover:text-{{=i.foreGhost.secondaryH[0]}} dark:hover:text-{{=i.foreGhost.secondaryH[1]}}',
tertiary: 'hover:text-{{=i.foreGhost.tertiaryH[0]}} dark:hover:text-{{=i.foreGhost.tertiaryH[1]}}',
danger: 'hover:text-{{=i.foreGhost.dangerH[0]}} dark:hover:text-{{=i.foreGhost.dangerH[1]}}',
warning: 'hover:text-{{=i.foreGhost.warningH[0]}} dark:hover:text-{{=i.foreGhost.warningH[1]}}',
success: 'hover:text-{{=i.foreGhost.successH[0]}} dark:hover:text-{{=i.foreGhost.successH[1]}}',
info: 'hover:text-{{=i.foreGhost.infoH[0]}} dark:hover:text-{{=i.foreGhost.infoH[1]}}',
light: 'hover:text-{{=i.foreGhost.lightH[0]}} dark:hover:text-{{=i.foreGhost.lightH[1]}}',
dark: 'hover:text-{{=i.foreGhost.darkH[0]}} dark:hover:text-{{=i.foreGhost.darkH[1]}} ',
white: 'hover:text-{{=i.foreGhost.whiteH[0]}} dark:hover:text-{{=i.foreGhost.whiteH[1]}}',
};

export const BgColor = {
unstyled: '',
primary: 'bg-{{=i.bg.primary[0]}} dark:bg-{{=i.bg.primary[1]}}',
secondary: 'bg-{{=i.bg.secondary[0]}} dark:bg-{{=i.bg.secondary[1]}}',
tertiary: 'bg-{{=i.bg.tertiary[0]}} dark:bg-{{=i.bg.tertiary[1]}}',
danger: 'bg-{{=i.bg.danger[0]}} dark:bg-{{=i.bg.danger[1]}}',
warning: 'bg-{{=i.bg.warning[0]}} dark:bg-{{=i.bg.warning[1]}}',
success: 'bg-{{=i.bg.success[0]}} dark:bg-{{=i.bg.success[1]}}',
info: 'bg-{{=i.bg.info[0]}} dark:bg-{{=i.bg.info[1]}}',
light: 'bg-{{=i.bg.light[0]}} dark:bg-{{=i.bg.light[1]}}',
dark: 'bg-{{=i.bg.dark[0]}} dark:bg-{{=i.bg.dark[1]}} ',
white: 'bg-{{=i.bg.white[0]}} dark:bg-{{=i.bg.white[1]}}',
};

export const BgColorHover = {
unstyled: '',
primary: 'hover:bg-{{=i.bg.primaryH[0]}} dark:hover:bg-{{=i.bg.primaryH[1]}}',
secondary: 'hover:bg-{{=i.bg.secondaryH[0]}} dark:hover:bg-{{=i.bg.secondaryH[1]}}',
tertiary: 'hover:bg-{{=i.bg.tertiaryH[0]}} dark:hover:bg-{{=i.bg.tertiaryH[1]}}',
danger: 'hover:bg-{{=i.bg.dangerH[0]}} dark:hover:bg-{{=i.bg.dangerH[1]}}',
warning: 'hover:bg-{{=i.bg.warningH[0]}} dark:hover:bg-{{=i.bg.warningH[1]}}',
success: 'hover:bg-{{=i.bg.successH[0]}} dark:hover:bg-{{=i.bg.successH[1]}}',
info: 'hover:bg-{{=i.bg.infoH[0]}} dark:hover:bg-{{=i.bg.infoH[1]}}',
light: 'hover:bg-{{=i.bg.lightH[0]}} dark:hover:bg-{{=i.bg.lightH[1]}}',
dark: 'hover:bg-{{=i.bg.darkH[0]}} dark:hover:bg-{{=i.bg.darkH[1]}} ',
white: 'hover:bg-{{=i.bg.whiteH[0]}} dark:hover:bg-{{=i.bg.whiteH[1]}}',
};

export const BgColorGroupHover = {
unstyled: '',
primary: 'group-hover:bg-{{=i.bg.primaryH[0]}} dark:group-hover:bg-{{=i.bg.primaryH[1]}}',
secondary: 'group-hover:bg-{{=i.bg.secondaryH[0]}} dark:group-hover:bg-{{=i.bg.secondaryH[1]}}',
tertiary: 'group-hover:bg-{{=i.bg.tertiaryH[0]}} dark:group-hover:bg-{{=i.bg.tertiaryH[1]}}',
danger: 'group-hover:bg-{{=i.bg.dangerH[0]}} dark:group-hover:bg-{{=i.bg.dangerH[1]}}',
warning: 'group-hover:bg-{{=i.bg.warningH[0]}} dark:group-hover:bg-{{=i.bg.warningH[1]}}',
success: 'group-hover:bg-{{=i.bg.successH[0]}} dark:group-hover:bg-{{=i.bg.successH[1]}}',
info: 'group-hover:bg-{{=i.bg.infoH[0]}} dark:group-hover:bg-{{=i.bg.infoH[1]}}',
light: 'group-hover:bg-{{=i.bg.lightH[0]}} dark:group-hover:bg-{{=i.bg.lightH[1]}}',
dark: 'group-hover:bg-{{=i.bg.darkH[0]}} dark:group-hover:bg-{{=i.bg.darkH[1]}} ',
white: 'group-hover:bg-{{=i.bg.whiteH[0]}} dark:group-hover:bg-{{=i.bg.whiteH[1]}}',
};

export const BgColorSoft = {
unstyled: '',
primary: 'bg-{{=i.bgSoft.primary[0]}} dark:bg-{{=i.bgSoft.primary[1]}}',
secondary: 'bg-{{=i.bgSoft.secondary[0]}} dark:bg-{{=i.bgSoft.secondary[1]}}',
tertiary: 'bg-{{=i.bgSoft.tertiary[0]}} dark:bg-{{=i.bgSoft.tertiary[1]}}',
danger: 'bg-{{=i.bgSoft.danger[0]}} dark:bg-{{=i.bgSoft.danger[1]}}',
warning: 'bg-{{=i.bgSoft.warning[0]}} dark:bg-{{=i.bgSoft.warning[1]}}',
success: 'bg-{{=i.bgSoft.success[0]}} dark:bg-{{=i.bgSoft.success[1]}}',
info: 'bg-{{=i.bgSoft.info[0]}} dark:bg-{{=i.bgSoft.info[1]}}',
light: 'bg-{{=i.bgSoft.light[0]}} dark:bg-{{=i.bgSoft.light[1]}}',
dark: 'bg-{{=i.bgSoft.dark[0]}} dark:bg-{{=i.bgSoft.dark[1]}} ',
white: 'bg-{{=i.bgSoft.white[0]}} dark:bg-{{=i.bgSoft.white[1]}}',
};

export const BgColorSoftHover = {
unstyled: '',
primary: 'hover:bg-{{=i.bgSoft.primaryH[0]}} dark:hover:bg-{{=i.bgSoft.primaryH[1]}}',
secondary: 'hover:bg-{{=i.bgSoft.secondaryH[0]}} dark:hover:bg-{{=i.bgSoft.secondaryH[1]}}',
tertiary: 'hover:bg-{{=i.bgSoft.tertiaryH[0]}} dark:hover:bg-{{=i.bgSoft.tertiaryH[1]}}',
danger: 'hover:bg-{{=i.bgSoft.dangerH[0]}} dark:hover:bg-{{=i.bgSoft.dangerH[1]}}',
warning: 'hover:bg-{{=i.bgSoft.warningH[0]}} dark:hover:bg-{{=i.bgSoft.warningH[1]}}',
success: 'hover:bg-{{=i.bgSoft.successH[0]}} dark:hover:bg-{{=i.bgSoft.successH[1]}}',
info: 'hover:bg-{{=i.bgSoft.infoH[0]}} dark:hover:bg-{{=i.bgSoft.infoH[1]}}',
light: 'hover:bg-{{=i.bgSoft.lightH[0]}} dark:hover:bg-{{=i.bgSoft.lightH[1]}}',
dark: 'hover:bg-{{=i.bgSoft.darkH[0]}} dark:hover:bg-{{=i.bgSoft.darkH[1]}} ',
white: 'hover:bg-{{=i.bgSoft.whiteH[0]}} dark:hover:bg-{{=i.bgSoft.whiteH[1]}}',
};

export const BgColorGhostHover = {
unstyled: '',
primary: 'hover:bg-{{=i.bgGhost.primary[0]}} dark:hover:bg-{{=i.bgGhost.primary[1]}}',
secondary: 'hover:bg-{{=i.bgGhost.secondary[0]}} dark:hover:bg-{{=i.bgGhost.secondary[1]}}',
tertiary: 'hover:bg-{{=i.bgGhost.tertiary[0]}} dark:hover:bg-{{=i.bgGhost.tertiary[1]}}',
danger: 'hover:bg-{{=i.bgGhost.danger[0]}} dark:hover:bg-{{=i.bgGhost.danger[1]}}',
warning: 'hover:bg-{{=i.bgGhost.warning[0]}} dark:hover:bg-{{=i.bgGhost.warning[1]}}',
success: 'hover:bg-{{=i.bgGhost.success[0]}} dark:hover:bg-{{=i.bgGhost.success[1]}}',
info: 'hover:bg-{{=i.bgGhost.info[0]}} dark:hover:bg-{{=i.bgGhost.info[1]}}',
light: 'hover:bg-{{=i.bgGhost.light[0]}} dark:hover:bg-{{=i.bgGhost.light[1]}}',
dark: 'hover:bg-{{=i.bgGhost.dark[0]}} dark:hover:bg-{{=i.bgGhost.dark[1]}} ',
white: 'hover:bg-{{=i.bgGhost.white[0]}} dark:hover:bg-{{=i.bgGhost.white[1]}}',
};

export const BgColorSoftGroupHover = {
unstyled: '',
primary: 'group-hover:bg-{{=i.bgSoft.primaryH[0]}} dark:group-hover:bg-{{=i.bgSoft.primaryH[1]}}',
secondary: 'group-hover:bg-{{=i.bgSoft.secondaryH[0]}} dark:group-hover:bg-{{=i.bgSoft.secondaryH[1]}}',
tertiary: 'group-hover:bg-{{=i.bgSoft.tertiaryH[0]}} dark:group-hover:bg-{{=i.bgSoft.tertiaryH[1]}}',
danger: 'group-hover:bg-{{=i.bgSoft.dangerH[0]}} dark:group-hover:bg-{{=i.bgSoft.dangerH[1]}}',
warning: 'group-hover:bg-{{=i.bgSoft.warningH[0]}} dark:group-hover:bg-{{=i.bgSoft.warningH[1]}}',
success: 'group-hover:bg-{{=i.bgSoft.successH[0]}} dark:group-hover:bg-{{=i.bgSoft.successH[1]}}',
info: 'group-hover:bg-{{=i.bgSoft.infoH[0]}} dark:group-hover:bg-{{=i.bgSoft.infoH[1]}}',
light: 'group-hover:bg-{{=i.bgSoft.lightH[0]}} dark:group-hover:bg-{{=i.bgSoft.lightH[1]}}',
dark: 'group-hover:bg-{{=i.bgSoft.darkH[0]}} dark:group-hover:bg-{{=i.bgSoft.darkH[1]}} ',
white: 'group-hover:bg-{{=i.bgSoft.whiteH[0]}} dark:group-hover:bg-{{=i.bgSoft.whiteH[1]}}',
};

export const BgColorSelected = {
unstyled: '',
primary: 'aria-selected:bg-{{=i.bgSelect.primary[0]}} dark:aria-selected:bg-{{=i.bgSelect.primary[1]}}',
secondary: 'aria-selected:bg-{{=i.bgSelect.secondary[0]}} dark:aria-selected:bg-{{=i.bgSelect.secondary[1]}}',
tertiary: 'aria-selected:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-selected:bg-{{=i.bgSelect.tertiary[1]}}',
danger: 'aria-selected:bg-{{=i.bgSelect.danger[0]}} dark:aria-selected:bg-{{=i.bgSelect.danger[1]}}',
warning: 'aria-selected:bg-{{=i.bgSelect.warning[0]}} dark:aria-selected:bg-{{=i.bgSelect.warning[1]}}',
success: 'aria-selected:bg-{{=i.bgSelect.success[0]}} dark:aria-selected:bg-{{=i.bgSelect.success[1]}}',
info: 'aria-selected:bg-{{=i.bgSelect.info[0]}} dark:aria-selected:bg-{{=i.bgSelect.info[1]}}',
light: 'aria-selected:bg-{{=i.bgSelect.light[0]}} dark:aria-selected:bg-{{=i.bgSelect.light[1]}}',
dark: 'aria-selected:bg-{{=i.bgSelect.dark[0]}} dark:aria-selected:bg-{{=i.bgSelect.dark[1]}} ',
white: 'aria-selected:bg-{{=i.bgSelect.white[0]}} dark:aria-selected:bg-{{=i.bgSelect.white[1]}}',
};

export const BgColorExpanded = {
unstyled: '',
primary: 'aria-expanded:bg-{{=i.bgSelect.primary[0]}} dark:aria-expanded:bg-{{=i.bgSelect.primary[1]}}',
secondary: 'aria-expanded:bg-{{=i.bgSelect.secondary[0]}} dark:aria-expanded:bg-{{=i.bgSelect.secondary[1]}}',
tertiary: 'aria-expanded:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-expanded:bg-{{=i.bgSelect.tertiary[1]}}',
danger: 'aria-expanded:bg-{{=i.bgSelect.danger[0]}} dark:aria-expanded:bg-{{=i.bgSelect.danger[1]}}',
warning: 'aria-expanded:bg-{{=i.bgSelect.warning[0]}} dark:aria-expanded:bg-{{=i.bgSelect.warning[1]}}',
success: 'aria-expanded:bg-{{=i.bgSelect.success[0]}} dark:aria-expanded:bg-{{=i.bgSelect.success[1]}}',
info: 'aria-expanded:bg-{{=i.bgSelect.info[0]}} dark:aria-expanded:bg-{{=i.bgSelect.info[1]}}',
light: 'aria-expanded:bg-{{=i.bgSelect.light[0]}} dark:aria-expanded:bg-{{=i.bgSelect.light[1]}}',
dark: 'aria-expanded:bg-{{=i.bgSelect.dark[0]}} dark:aria-expanded:bg-{{=i.bgSelect.dark[1]}} ',
white: 'aria-expanded:bg-{{=i.bgSelect.white[0]}} dark:aria-expanded:bg-{{=i.bgSelect.white[1]}}',
};

export const BgColorChecked = {
unstyled: '',
primary: 'aria-checked:bg-{{=i.bgSelect.primary[0]}} dark:aria-checked:bg-{{=i.bgSelect.primary[1]}}',
secondary: 'aria-checked:bg-{{=i.bgSelect.secondary[0]}} dark:aria-checked:bg-{{=i.bgSelect.secondary[1]}}',
tertiary: 'aria-checked:bg-{{=i.bgSelect.tertiary[0]}} dark:aria-checked:bg-{{=i.bgSelect.tertiary[1]}}',
danger: 'aria-checked:bg-{{=i.bgSelect.danger[0]}} dark:aria-checked:bg-{{=i.bgSelect.danger[1]}}',
warning: 'aria-checked:bg-{{=i.bgSelect.warning[0]}} dark:aria-checked:bg-{{=i.bgSelect.warning[1]}}',
success: 'aria-checked:bg-{{=i.bgSelect.success[0]}} dark:aria-checked:bg-{{=i.bgSelect.success[1]}}',
info: 'aria-checked:bg-{{=i.bgSelect.info[0]}} dark:aria-checked:bg-{{=i.bgSelect.info[1]}}',
light: 'aria-checked:bg-{{=i.bgSelect.light[0]}} dark:aria-checked:bg-{{=i.bgSelect.light[1]}}',
dark: 'aria-checked:bg-{{=i.bgSelect.dark[0]}} dark:aria-checked:bg-{{=i.bgSelect.dark[1]}} ',
white: 'aria-checked:bg-{{=i.bgSelect.white[0]}} dark:aria-checked:bg-{{=i.bgSelect.white[1]}}',
};

export const BgColorCurrent = {
unstyled: '',
primary: 'aria-[current="page"]:bg-{{=i.bgSelect.primary[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.primary[1]}}',
secondary: 'aria-[current="page"]:bg-{{=i.bgSelect.secondary[0]}}
dark:aria-[current="page"]:bg-{{=i.bgSelect.secondary[1]}}',
tertiary: 'aria-[current="page"]:bg-{{=i.bgSelect.tertiary[0]}}
dark:aria-[current="page"]:bg-{{=i.bgSelect.tertiary[1]}}',
danger: 'aria-[current="page"]:bg-{{=i.bgSelect.danger[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.danger[1]}}',
warning: 'aria-[current="page"]:bg-{{=i.bgSelect.warning[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.warning[1]}}',
success: 'aria-[current="page"]:bg-{{=i.bgSelect.success[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.success[1]}}',
info: 'aria-[current="page"]:bg-{{=i.bgSelect.info[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.info[1]}}',
light: 'aria-[current="page"]:bg-{{=i.bgSelect.light[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.light[1]}}',
dark: 'aria-[current="page"]:bg-{{=i.bgSelect.dark[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.dark[1]}} ',
white: 'aria-[current="page"]:bg-{{=i.bgSelect.white[0]}} dark:aria-[current="page"]:bg-{{=i.bgSelect.white[1]}}',
};

export const RingColor = {
unstyled: '',
primary: 'ring-{{=i.outline.primary[0]}} dark:ring-{{=i.outline.primary[1]}}',
secondary: 'ring-{{=i.outline.secondary[0]}} dark:ring-{{=i.outline.secondary[1]}}',
tertiary: 'ring-{{=i.outline.tertiary[0]}} dark:ring-{{=i.outline.tertiary[1]}}',
danger: 'ring-{{=i.outline.danger[0]}} dark:ring-{{=i.outline.danger[1]}}',
warning: 'ring-{{=i.outline.warning[0]}} dark:ring-{{=i.outline.warning[1]}}',
success: 'ring-{{=i.outline.success[0]}} dark:ring-{{=i.outline.success[1]}}',
info: 'ring-{{=i.outline.info[0]}} dark:ring-{{=i.outline.info[1]}}',
light: 'ring-{{=i.outline.light[0]}} dark:ring-{{=i.outline.light[1]}}',
dark: 'ring-{{=i.outline.dark[0]}} dark:ring-{{=i.outline.dark[1]}}',
white: 'ring-{{=i.outline.white[0]}} dark:ring-{{=i.outline.white[1]}}',
};

export const RingColorHover = {
unstyled: '',
primary: 'hover:ring-{{=i.outline.primaryH[0]}} dark:hover:ring-{{=i.outline.primaryH[1]}}',
secondary: 'hover:ring-{{=i.outline.secondaryH[0]}} dark:hover:ring-{{=i.outline.secondaryH[1]}}',
tertiary: 'hover:ring-{{=i.outline.tertiaryH[0]}} dark:hover:ring-{{=i.outline.tertiaryH[1]}}',
danger: 'hover:ring-{{=i.outline.dangerH[0]}} dark:hover:ring-{{=i.outline.dangerH[1]}}',
warning: 'hover:ring-{{=i.outline.warningH[0]}} dark:hover:ring-{{=i.outline.warningH[1]}}',
success: 'hover:ring-{{=i.outline.successH[0]}} dark:hover:ring-{{=i.outline.successH[1]}}',
info: 'hover:ring-{{=i.outline.infoH[0]}} dark:hover:ring-{{=i.outline.infoH[1]}}',
light: 'hover:ring-{{=i.outline.lightH[0]}} dark:hover:ring-{{=i.outline.lightH[1]}}',
dark: 'hover:ring-{{=i.outline.darkH[0]}} dark:hover:ring-{{=i.outline.darkH[1]}}',
white: 'hover:ring-{{=i.outline.whiteH[0]}} dark:hover:ring-{{=i.outline.whiteH[1]}}',
};

export const BorderColor = {
unstyled: '',
primary: 'border-{{=i.outline.primary[0]}} dark:border-{{=i.outline.primary[1]}}',
secondary: 'border-{{=i.outline.secondary[0]}} dark:border-{{=i.outline.secondary[1]}}',
tertiary: 'border-{{=i.outline.tertiary[0]}} dark:border-{{=i.outline.tertiary[1]}}',
danger: 'border-{{=i.outline.danger[0]}} dark:border-{{=i.outline.danger[1]}}',
warning: 'border-{{=i.outline.warning[0]}} dark:border-{{=i.outline.warning[1]}}',
success: 'border-{{=i.outline.success[0]}} dark:border-{{=i.outline.success[1]}}',
info: 'border-{{=i.outline.info[0]}} dark:border-{{=i.outline.info[1]}}',
light: 'border-{{=i.outline.light[0]}} dark:border-{{=i.outline.light[1]}}',
dark: 'border-{{=i.outline.dark[0]}} dark:border-{{=i.outline.dark[1]}}',
white: 'border-{{=i.outline.white[0]}} dark:border-{{=i.outline.white[1]}}',
};

export const BorderColorHover = {
unstyled: '',
primary: 'hover:border-{{=i.outline.primaryH[0]}} dark:hover:border-{{=i.outline.primaryH[1]}}',
secondary: 'hover:border-{{=i.outline.secondaryH[0]}} dark:hover:border-{{=i.outline.secondaryH[1]}}',
tertiary: 'hover:border-{{=i.outline.tertiaryH[0]}} dark:hover:border-{{=i.outline.tertiaryH[1]}}',
danger: 'hover:border-{{=i.outline.dangerH[0]}} dark:hover:border-{{=i.outline.dangerH[1]}}',
warning: 'hover:border-{{=i.outline.warningH[0]}} dark:hover:border-{{=i.outline.warningH[1]}}',
success: 'hover:border-{{=i.outline.successH[0]}} dark:hover:border-{{=i.outline.successH[1]}}',
info: 'hover:border-{{=i.outline.infoH[0]}} dark:hover:border-{{=i.outline.infoH[1]}}',
light: 'hover:border-{{=i.outline.lightH[0]}} dark:hover:border-{{=i.outline.lightH[1]}}',
dark: 'hover:border-{{=i.outline.darkH[0]}} dark:hover:border-{{=i.outline.darkH[1]}}',
white: 'hover:border-{{=i.outline.whiteH[0]}} dark:hover:border-{{=i.outline.whiteH[1]}}',
};

export const DivideColor = {
unstyled: '',
primary: 'divide-{{=i.outline.primary[0]}} dark:divide-{{=i.outline.primary[1]}}',
secondary: 'divide-{{=i.outline.secondary[0]}} dark:divide-{{=i.outline.secondary[1]}}',
tertiary: 'divide-{{=i.outline.tertiary[0]}} dark:divide-{{=i.outline.tertiary[1]}}',
danger: 'divide-{{=i.outline.danger[0]}} dark:divide-{{=i.outline.danger[1]}}',
warning: 'divide-{{=i.outline.warning[0]}} dark:divide-{{=i.outline.warning[1]}}',
success: 'divide-{{=i.outline.success[0]}} dark:divide-{{=i.outline.success[1]}}',
info: 'divide-{{=i.outline.info[0]}} dark:divide-{{=i.outline.info[1]}}',
light: 'divide-{{=i.outline.light[0]}} dark:divide-{{=i.outline.light[1]}}',
dark: 'divide-{{=i.outline.dark[0]}} dark:divide-{{=i.outline.dark[1]}}',
white: 'divide-{{=i.outline.white[0]}} dark:divide-{{=i.outline.white[1]}}',
};


export const OutlineColorFocus = {
unstyled: '',
primary: 'focus:outline-{{=i.outlineFocus.primary[0]}} dark:focus:outline-{{=i.outlineFocus.primary[1]}}',
secondary: 'focus:outline-{{=i.outlineFocus.secondary[0]}} dark:focus:outline-{{=i.outlineFocus.secondary[1]}}',
tertiary: 'focus:outline-{{=i.outlineFocus.tertiary[0]}} dark:focus:outline-{{=i.outlineFocus.tertiary[1]}}',
danger: 'focus:outline-{{=i.outlineFocus.danger[0]}} dark:focus:outline-{{=i.outlineFocus.danger[1]}}',
warning: 'focus:outline-{{=i.outlineFocus.warning[0]}} dark:focus:outline-{{=i.outlineFocus.warning[1]}}',
success: 'focus:outline-{{=i.outlineFocus.success[0]}} dark:focus:outline-{{=i.outlineFocus.success[1]}}',
info: 'focus:outline-{{=i.outlineFocus.info[0]}} dark:focus:outline-{{=i.outlineFocus.info[1]}}',
light: 'focus:outline-{{=i.outlineFocus.light[0]}} dark:focus:outline-{{=i.outlineFocus.light[1]}}',
dark: 'focus:outline-{{=i.outlineFocus.dark[0]}} dark:focus:outline-{{=i.outlineFocus.dark[1]}} ',
white: 'focus:outline-{{=i.outlineFocus.white[0]}} dark:focus:outline-{{=i.outlineFocus.white[1]}}',
};

export const OutlineColorFocusVisible = {
unstyled: '',
primary: 'focus-visible:outline-{{=i.outlineFocus.primary[0]}}
dark:focus-visible:outline-{{=i.outlineFocus.primary[1]}}',
secondary: 'focus-visible:outline-{{=i.outlineFocus.secondary[0]}}
dark:focus-visible:outline-{{=i.outlineFocus.secondary[1]}}',
tertiary: 'focus-visible:outline-{{=i.outlineFocus.tertiary[0]}}
dark:focus-visible:outline-{{=i.outlineFocus.tertiary[1]}}',
danger: 'focus-visible:outline-{{=i.outlineFocus.danger[0]}} dark:focus-visible:outline-{{=i.outlineFocus.danger[1]}}',
warning: 'focus-visible:outline-{{=i.outlineFocus.warning[0]}}
dark:focus-visible:outline-{{=i.outlineFocus.warning[1]}}',
success: 'focus-visible:outline-{{=i.outlineFocus.success[0]}}
dark:focus-visible:outline-{{=i.outlineFocus.success[1]}}',
info: 'focus-visible:outline-{{=i.outlineFocus.info[0]}} dark:focus-visible:outline-{{=i.outlineFocus.info[1]}}',
light: 'focus-visible:outline-{{=i.outlineFocus.light[0]}} dark:focus-visible:outline-{{=i.outlineFocus.light[1]}}',
dark: 'focus-visible:outline-{{=i.outlineFocus.dark[0]}} dark:focus-visible:outline-{{=i.outlineFocus.dark[1]}} ',
white: 'focus-visible:outline-{{=i.outlineFocus.white[0]}} dark:focus-visible:outline-{{=i.outlineFocus.white[1]}}',
};

export const OutlineColorFocusGroup = {
unstyled: '',
primary: 'group-focus:outline-{{=i.outlineFocus.primary[0]}} dark:group-focus:outline-{{=i.outlineFocus.primary[1]}}',
secondary: 'group-focus:outline-{{=i.outlineFocus.secondary[0]}}
dark:group-focus:outline-{{=i.outlineFocus.secondary[1]}}',
tertiary: 'group-focus:outline-{{=i.outlineFocus.tertiary[0]}}
dark:group-focus:outline-{{=i.outlineFocus.tertiary[1]}}',
danger: 'group-focus:outline-{{=i.outlineFocus.danger[0]}} dark:group-focus:outline-{{=i.outlineFocus.danger[1]}}',
warning: 'group-focus:outline-{{=i.outlineFocus.warning[0]}} dark:group-focus:outline-{{=i.outlineFocus.warning[1]}}',
success: 'group-focus:outline-{{=i.outlineFocus.success[0]}} dark:group-focus:outline-{{=i.outlineFocus.success[1]}}',
info: 'group-focus:outline-{{=i.outlineFocus.info[0]}} dark:group-focus:outline-{{=i.outlineFocus.info[1]}}',
light: 'group-focus:outline-{{=i.outlineFocus.light[0]}} dark:group-focus:outline-{{=i.outlineFocus.light[1]}}',
dark: 'group-focus:outline-{{=i.outlineFocus.dark[0]}} dark:group-focus:outline-{{=i.outlineFocus.dark[1]}} ',
white: 'group-focus:outline-{{=i.outlineFocus.white[0]}} dark:group-focus:outline-{{=i.outlineFocus.white[1]}}',
};

export const OutlineColorFocusWithin = {
unstyled: '',
primary: 'focus-within:outline-{{=i.outlineFocus.primary[0]}} dark:focus-within:outline-{{=i.outlineFocus.primary[1]}}',
secondary: 'focus-within:outline-{{=i.outlineFocus.secondary[0]}}
dark:focus-within:outline-{{=i.outlineFocus.secondary[1]}}',
tertiary: 'focus-within:outline-{{=i.outlineFocus.tertiary[0]}}
dark:focus-within:outline-{{=i.outlineFocus.tertiary[1]}}',
danger: 'focus-within:outline-{{=i.outlineFocus.danger[0]}} dark:focus-within:outline-{{=i.outlineFocus.danger[1]}}',
warning: 'focus-within:outline-{{=i.outlineFocus.warning[0]}} dark:focus-within:outline-{{=i.outlineFocus.warning[1]}}',
success: 'focus-within:outline-{{=i.outlineFocus.success[0]}} dark:focus-within:outline-{{=i.outlineFocus.success[1]}}',
info: 'focus-within:outline-{{=i.outlineFocus.info[0]}} dark:focus-within:outline-{{=i.outlineFocus.info[1]}}',
light: 'focus-within:outline-{{=i.outlineFocus.light[0]}} dark:focus-within:outline-{{=i.outlineFocus.light[1]}}',
dark: 'focus-within:outline-{{=i.outlineFocus.dark[0]}} dark:focus-within:outline-{{=i.outlineFocus.dark[1]}} ',
white: 'focus-within:outline-{{=i.outlineFocus.white[0]}} dark:focus-within:outline-{{=i.outlineFocus.white[1]}}',
};

export const OutlineColorFocusPeer = {
unstyled: '',
primary: 'peer-focus:outline-{{=i.outlineFocus.primary[0]}} dark:peer-focus:outline-{{=i.outlineFocus.primary[1]}}',
secondary: 'peer-focus:outline-{{=i.outlineFocus.secondary[0]}}
dark:peer-focus:outline-{{=i.outlineFocus.secondary[1]}}',
tertiary: 'peer-focus:outline-{{=i.outlineFocus.tertiary[0]}} dark:peer-focus:outline-{{=i.outlineFocus.tertiary[1]}}',
danger: 'peer-focus:outline-{{=i.outlineFocus.danger[0]}} dark:peer-focus:outline-{{=i.outlineFocus.danger[1]}}',
warning: 'peer-focus:outline-{{=i.outlineFocus.warning[0]}} dark:peer-focus:outline-{{=i.outlineFocus.warning[1]}}',
success: 'peer-focus:outline-{{=i.outlineFocus.success[0]}} dark:peer-focus:outline-{{=i.outlineFocus.success[1]}}',
info: 'peer-focus:outline-{{=i.outlineFocus.info[0]}} dark:peer-focus:outline-{{=i.outlineFocus.info[1]}}',
light: 'peer-focus:outline-{{=i.outlineFocus.light[0]}} dark:peer-focus:outline-{{=i.outlineFocus.light[1]}}',
dark: 'peer-focus:outline-{{=i.outlineFocus.dark[0]}} dark:peer-focus:outline-{{=i.outlineFocus.dark[1]}} ',
white: 'peer-focus:outline-{{=i.outlineFocus.white[0]}} dark:peer-focus:outline-{{=i.outlineFocus.white[1]}}',
};

export const FocusTypes = {
unstyled: Placeholder,
focus: OutlineColorFocus,
visible: OutlineColorFocusVisible,
within: OutlineColorFocusWithin,
group: OutlineColorFocusGroup,
peer: OutlineColorFocusPeer
};

export const SelectTypes = {
unstyled: Placeholder,
selected: BgColorSelected,
expanded: BgColorExpanded,
checked: BgColorChecked,
current: BgColorCurrent
};

export interface GlobalOptions {
focusOffset: keyof typeof OutlineOffset;
focusWidth: keyof typeof OutlineWidth;
rounded: boolean; // when true rounding are permitted.
shadow: boolean; // when true shadows are permitted.
transition: string | false | undefined | null;
};

export const colors = Object.keys(BgColor) as ThemeColor[];