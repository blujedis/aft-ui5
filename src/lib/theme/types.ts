export type FocusType = keyof typeof FocusTypes;
export type SelectType = keyof typeof SelectTypes;
export type ThemeColor = keyof typeof FontColor;

export const build = ['avatar', 'badge', 'button', 'icon', 'image', 'stack'];

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
xl2: 'rounded-xl2',
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
}

export const BadgePaddingX = {
unstyled: '',
xs: 'px-1',
sm: 'px-1.5 ',
md: 'px-1.5',
lg: 'px-2',
xl: 'px-2 ',
xl2: 'px-2.5'
}

export const IconSize = {
unstyled: '',
xs: 'h-4 w-4',
sm: 'h-5 w-5',
md: 'h-6 w-6',
lg: 'h-8 w-8',
xl: 'h-10 w-10',
xl2: 'h-12 w-12',
full: 'w-full h-full'
}

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
}


export const ButtonFontSize = {
unstyled: '',
xs: FontSize.xs,
sm: FontSize.sm,
md: FontSize.sm,
lg: FontSize.md,
xl: FontSize.lg,
xl2: FontSize.xl
}

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
}

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
}

export const FillColor = {
unstyled: '',
primary: 'text-primary-500 dark:text-primary-500',
secondary: 'text-secondary-500 dark:text-secondary-500',
tertiary: 'text-tertiary-500 dark:text-tertiary-500',
danger: 'text-danger-500 dark:text-danger-500',
warning: 'text-warning-500 dark:text-warning-500',
success: 'text-success-500 dark:text-success-500',
info: 'text-info-500 dark:text-info-500',
light: 'text-frame-400 dark:text-frame-400',
dark: 'text-frame-600 dark:text-frame-500 ',
white: 'text-white dark:text-white',
}

export const FillColorHover = {
unstyled: '',
primary: 'hover:text-primary-600 dark:hover:text-primary-600',
secondary: 'hover:text-secondary-600 dark:hover:text-secondary-600',
tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-600',
danger: 'hover:text-danger-600 dark:hover:text-danger-600',
warning: 'hover:text-warning-600 dark:hover:text-warning-600',
success: 'hover:text-success-600 dark:hover:text-success-600',
info: 'hover:text-info-600 dark:hover:text-info-600',
light: 'hover:text-frame-500 dark:hover:text-frame-500',
dark: 'hover:text-frame-700 dark:hover:text-frame-600 ',
white: 'hover:text-frame-100 dark:hover:text-frame-100',
}

export const FillColorSoft = {
unstyled: '',
primary: 'text-primary-100 dark:text-primary-800',
secondary: 'text-secondary-100 dark:text-secondary-800',
tertiary: 'text-tertiary-100 dark:text-tertiary-800',
danger: 'text-danger-100 dark:text-danger-800',
warning: 'text-warning-100 dark:text-warning-800',
success: 'text-success-100 dark:text-success-800',
info: 'text-info-100 dark:text-info-800',
light: 'text-frame-200 dark:text-frame-500',
dark: 'text-frame-500 dark:text-frame-800 ',
white: 'text-white dark:text-white',
}

export const FillColorSoftHover = {
unstyled: '',
primary: 'hover:text-primary-200 dark:hover:text-primary-900',
secondary: 'hover:text-secondary-200 dark:hover:text-secondary-900',
tertiary: 'hover:text-tertiary-200 dark:hover:text-tertiary-900',
danger: 'hover:text-danger-200 dark:hover:text-danger-900',
warning: 'hover:text-warning-200 dark:hover:text-warning-900',
success: 'hover:text-success-200 dark:hover:text-success-900',
info: 'hover:text-info-200 dark:hover:text-info-900',
light: 'hover:text-frame-300 dark:hover:text-frame-600',
dark: 'hover:text-frame-600 dark:hover:text-frame-950/50 ',
white: 'hover:text-frame-200 dark:hover:text-frame-200',
}

export const StrokeColor = {
unstyled: '',
primary: 'stroke-primary-500 dark:stroke-primary-500',
secondary: 'stroke-secondary-500 dark:stroke-secondary-500',
tertiary: 'stroke-tertiary-500 dark:stroke-tertiary-500',
danger: 'stroke-danger-500 dark:stroke-danger-500',
warning: 'stroke-warning-500 dark:stroke-warning-500',
success: 'stroke-success-500 dark:stroke-success-500',
info: 'stroke-info-500 dark:stroke-info-500',
light: 'stroke-frame-400 dark:stroke-frame-400',
dark: 'stroke-frame-600 dark:stroke-frame-500 ',
white: 'stroke-white dark:stroke-white',
}

export const StrokeColorHover = {
unstyled: '',
primary: 'hover:stroke-primary-600 dark:hover:stroke-primary-600',
secondary: 'hover:stroke-secondary-600 dark:hover:stroke-secondary-600',
tertiary: 'hover:stroke-tertiary-600 dark:hover:stroke-tertiary-600',
danger: 'hover:stroke-danger-600 dark:hover:stroke-danger-600',
warning: 'hover:stroke-warning-600 dark:hover:stroke-warning-600',
success: 'hover:stroke-success-600 dark:hover:stroke-success-600',
info: 'hover:stroke-info-600 dark:hover:stroke-info-600',
light: 'hover:stroke-frame-500 dark:hover:stroke-frame-500',
dark: 'hover:stroke-frame-700 dark:hover:stroke-frame-600 ',
white: 'hover:stroke-frame-100 dark:hover:stroke-frame-100',
}


export const StrokeColorSoft = {
unstyled: '',
primary: 'stroke-primary-100 dark:stroke-primary-800',
secondary: 'stroke-secondary-100 dark:stroke-secondary-800',
tertiary: 'stroke-tertiary-100 dark:stroke-tertiary-800',
danger: 'stroke-danger-100 dark:stroke-danger-800',
warning: 'stroke-warning-100 dark:stroke-warning-800',
success: 'stroke-success-100 dark:stroke-success-800',
info: 'stroke-info-100 dark:stroke-info-800',
light: 'stroke-frame-200 dark:stroke-frame-500',
dark: 'stroke-frame-500 dark:stroke-frame-800 ',
white: 'stroke-white dark:stroke-white',

}

export const StrokeColorSoftHover = {
unstyled: '',
primary: 'hover:stroke-primary-200 dark:hover:stroke-primary-900',
secondary: 'hover:stroke-secondary-200 dark:hover:stroke-secondary-900',
tertiary: 'hover:stroke-tertiary-200 dark:hover:stroke-tertiary-900',
danger: 'hover:stroke-danger-200 dark:hover:stroke-danger-900',
warning: 'hover:stroke-warning-200 dark:hover:stroke-warning-900',
success: 'hover:stroke-success-200 dark:hover:stroke-success-900',
info: 'hover:stroke-info-200 dark:hover:stroke-info-900',
light: 'hover:stroke-frame-300 dark:hover:stroke-frame-600',
dark: 'hover:stroke-frame-600 dark:hover:stroke-frame-950/50 ',
white: 'hover:stroke-frame-200 dark:hover:stroke-frame-200',
}


export const FontColor = {
unstyled: '',
primary: 'text-primary-500 dark:text-primary-200',
secondary: 'text-secondary-500 dark:text-secondary-200',
tertiary: 'text-tertiary-500 dark:text-tertiary-200',
danger: 'text-danger-500 dark:text-danger-200',
warning: 'text-warning-500 dark:text-warning-200',
success: 'text-success-500 dark:text-success-200',
info: 'text-info-500 dark:text-info-200',
light: 'text-frame-400 dark:text-frame-200',
dark: 'text-frame-600 dark:text-frame-200 ',
white: 'text-white dark:text-white',

}

export const FontColorHover = {
unstyled: '',
primary: 'hover:text-primary-600 dark:hover:text-primary-300',
secondary: 'hover:text-secondary-600 dark:hover:text-secondary-300',
tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
danger: 'hover:text-danger-600 dark:hover:text-danger-300',
warning: 'hover:text-warning-600 dark:hover:text-warning-300',
success: 'hover:text-success-600 dark:hover:text-success-300',
info: 'hover:text-info-600 dark:hover:text-info-300',
light: 'hover:text-frame-500 dark:hover:text-frame-300',
dark: 'hover:text-frame-700 dark:hover:text-frame-300 ',
white: 'hover:text-frame-100 dark:hover:text-frame-100',

}

export const ForeColorText = {
unstyled: '',
primary: 'text-primary-500 dark:text-primary-200',
secondary: 'text-secondary-500 dark:text-secondary-200',
tertiary: 'text-tertiary-500 dark:text-tertiary-200',
danger: 'text-danger-500 dark:text-danger-200',
warning: 'text-warning-500 dark:text-warning-200',
success: 'text-success-500 dark:text-success-200',
info: 'text-info-500 dark:text-info-200',
light: 'text-frame-600 dark:text-frame-200',
dark: 'text-frame-600 dark:text-frame-200 ',
white: 'text-frame-600 dark:text-white',

}

export const ForeColorTextHover = {
unstyled: '',
primary: 'hover:text-primary-600 dark:hover:text-primary-300',
secondary: 'hover:text-secondary-600 dark:hover:text-secondary-300',
tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
danger: 'hover:text-danger-600 dark:hover:text-danger-300',
warning: 'hover:text-warning-600 dark:hover:text-warning-300',
success: 'hover:text-success-600 dark:hover:text-success-300',
info: 'hover:text-info-600 dark:hover:text-info-300',
light: 'hover:text-frame-700 dark:hover:text-frame-300',
dark: 'hover:text-frame-700 dark:hover:text-frame-300 ',
white: 'hover:text-frame-700 dark:hover:text-frame-100',

}

export const ForeColorFilled = {
unstyled: '',
primary: 'text-primary-50 dark:text-primary-50',
secondary: 'text-secondary-50 dark:text-secondary-50',
tertiary: 'text-tertiary-50 dark:text-tertiary-50',
danger: 'text-danger-50 dark:text-danger-50',
warning: 'text-warning-50 dark:text-warning-50',
success: 'text-success-50 dark:text-success-50',
info: 'text-info-50 dark:text-info-50',
light: 'text-frame-600 dark:text-frame-800',
dark: 'text-frame-50 dark:text-frame-50 ',
white: 'text-frame-600 dark:text-frame-600',

}

export const ForeColorFilledHover = {
unstyled: '',
primary: 'hover:text-primary-100 dark:hover:text-primary-100',
secondary: 'hover:text-secondary-100 dark:hover:text-secondary-100',
tertiary: 'hover:text-tertiary-100 dark:hover:text-tertiary-100',
danger: 'hover:text-danger-100 dark:hover:text-danger-100',
warning: 'hover:text-warning-100 dark:hover:text-warning-100',
success: 'hover:text-success-100 dark:hover:text-success-100',
info: 'hover:text-info-100 dark:hover:text-info-100',
light: 'hover:text-frame-700 dark:hover:text-frame-900',
dark: 'hover:text-frame-100 dark:hover:text-frame-100 ',
white: 'hover:text-frame-700 dark:hover:text-frame-700',

}

export const ForeColorSoft = {
unstyled: '',
primary: 'text-primary-500 dark:text-primary-200',
secondary: 'text-secondary-500 dark:text-secondary-200',
tertiary: 'text-tertiary-500 dark:text-tertiary-200',
danger: 'text-danger-500 dark:text-danger-200',
warning: 'text-warning-500 dark:text-warning-200',
success: 'text-success-500 dark:text-success-200',
info: 'text-info-500 dark:text-info-200',
light: 'text-frame-600 dark:text-frame-200',
dark: 'text-frame-50 dark:text-frame-200 ',
white: 'text-frame-600 dark:text-frame-600',

}
export const ForeColorSoftHover = {
unstyled: '',
primary: 'hover:text-primary-600 dark:hover:text-primary-300',
secondary: 'hover:text-secondary-600 dark:hover:text-secondary-300',
tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
danger: 'hover:text-danger-600 dark:hover:text-danger-300',
warning: 'hover:text-warning-600 dark:hover:text-warning-300',
success: 'hover:text-success-600 dark:hover:text-success-300',
info: 'hover:text-info-600 dark:hover:text-info-300',
light: 'hover:text-frame-700 dark:hover:text-frame-300',
dark: 'hover:text-frame-100 dark:hover:text-frame-300 ',
white: 'hover:text-frame-700 dark:hover:text-frame-700',

}

export const ForeColorGhost = {
unstyled: '',
primary: 'text-primary-500 dark:text-primary-200',
secondary: 'text-secondary-500 dark:text-secondary-200',
tertiary: 'text-tertiary-500 dark:text-tertiary-200',
danger: 'text-danger-500 dark:text-danger-200',
warning: 'text-warning-500 dark:text-warning-200',
success: 'text-success-500 dark:text-success-200',
info: 'text-info-500 dark:text-info-200',
light: 'text-frame-600 dark:text-frame-200',
dark: 'text-frame-700 dark:text-frame-200 ',
white: 'text-frame-600 dark:text-white',

}

export const ForeColorGhostHover = {
unstyled: '',
primary: 'hover:text-primary-600 dark:hover:text-primary-300',
secondary: 'hover:text-secondary-600 dark:hover:text-secondary-300',
tertiary: 'hover:text-tertiary-600 dark:hover:text-tertiary-300',
danger: 'hover:text-danger-600 dark:hover:text-danger-300',
warning: 'hover:text-warning-600 dark:hover:text-warning-300',
success: 'hover:text-success-600 dark:hover:text-success-300',
info: 'hover:text-info-600 dark:hover:text-info-300',
light: 'hover:text-frame-700 dark:hover:text-frame-200',
dark: 'hover:text-frame-50 dark:hover:text-frame-300 ',
white: 'hover:text-frame-700 dark:hover:text-frame-700',

}

export const BgColor = {
unstyled: '',
primary: 'bg-primary-500 dark:bg-primary-500',
secondary: 'bg-secondary-500 dark:bg-secondary-500',
tertiary: 'bg-tertiary-500 dark:bg-tertiary-500',
danger: 'bg-danger-500 dark:bg-danger-500',
warning: 'bg-warning-500 dark:bg-warning-500',
success: 'bg-success-500 dark:bg-success-500',
info: 'bg-info-500 dark:bg-info-500',
light: 'bg-frame-200 dark:bg-frame-300',
dark: 'bg-frame-600 dark:bg-frame-700 ',
white: 'bg-white dark:bg-white',

}

export const BgColorHover = {
unstyled: '',
primary: 'hover:bg-primary-600 dark:hover:bg-primary-600',
secondary: 'hover:bg-secondary-600 dark:hover:bg-secondary-600',
tertiary: 'hover:bg-tertiary-600 dark:hover:bg-tertiary-600',
danger: 'hover:bg-danger-600 dark:hover:bg-danger-600',
warning: 'hover:bg-warning-600 dark:hover:bg-warning-600',
success: 'hover:bg-success-600 dark:hover:bg-success-600',
info: 'hover:bg-info-600 dark:hover:bg-info-600',
light: 'hover:bg-frame-300 dark:hover:bg-frame-400',
dark: 'hover:bg-frame-700 dark:hover:bg-frame-800 ',
white: 'hover:bg-frame-200 dark:hover:bg-frame-200',

}

export const BgColorGroupHover = {
unstyled: '',
primary: 'group-hover:bg-primary-600 dark:group-hover:bg-primary-600',
secondary: 'group-hover:bg-secondary-600 dark:group-hover:bg-secondary-600',
tertiary: 'group-hover:bg-tertiary-600 dark:group-hover:bg-tertiary-600',
danger: 'group-hover:bg-danger-600 dark:group-hover:bg-danger-600',
warning: 'group-hover:bg-warning-600 dark:group-hover:bg-warning-600',
success: 'group-hover:bg-success-600 dark:group-hover:bg-success-600',
info: 'group-hover:bg-info-600 dark:group-hover:bg-info-600',
light: 'group-hover:bg-frame-300 dark:group-hover:bg-frame-400',
dark: 'group-hover:bg-frame-700 dark:group-hover:bg-frame-800 ',
white: 'group-hover:bg-frame-200 dark:group-hover:bg-frame-200',

}

export const BgColorSoft = {
unstyled: '',
primary: 'bg-primary-100 dark:bg-primary-800',
secondary: 'bg-secondary-100 dark:bg-secondary-800',
tertiary: 'bg-tertiary-100 dark:bg-tertiary-800',
danger: 'bg-danger-100 dark:bg-danger-800',
warning: 'bg-warning-100 dark:bg-warning-800',
success: 'bg-success-100 dark:bg-success-800',
info: 'bg-info-100 dark:bg-info-800',
light: 'bg-frame-200 dark:bg-frame-500',
dark: 'bg-frame-500 dark:bg-frame-800 ',
white: 'bg-white dark:bg-white',

}

export const BgColorSoftHover = {
unstyled: '',
primary: 'hover:bg-primary-200 dark:hover:bg-primary-900',
secondary: 'hover:bg-secondary-200 dark:hover:bg-secondary-900',
tertiary: 'hover:bg-tertiary-200 dark:hover:bg-tertiary-900',
danger: 'hover:bg-danger-200 dark:hover:bg-danger-900',
warning: 'hover:bg-warning-200 dark:hover:bg-warning-900',
success: 'hover:bg-success-200 dark:hover:bg-success-900',
info: 'hover:bg-info-200 dark:hover:bg-info-900',
light: 'hover:bg-frame-300 dark:hover:bg-frame-600',
dark: 'hover:bg-frame-600 dark:hover:bg-frame-950/50 ',
white: 'hover:bg-frame-200 dark:hover:bg-frame-200',

}

export const BgColorGhostHover = {
unstyled: '',
primary: 'hover:bg-primary-100 dark:hover:bg-primary-800',
secondary: 'hover:bg-secondary-100 dark:hover:bg-secondary-800',
tertiary: 'hover:bg-tertiary-100 dark:hover:bg-tertiary-800',
danger: 'hover:bg-danger-100 dark:hover:bg-danger-800',
warning: 'hover:bg-warning-100 dark:hover:bg-warning-800',
success: 'hover:bg-success-100 dark:hover:bg-success-800',
info: 'hover:bg-info-100 dark:hover:bg-info-800',
light: 'hover:bg-frame-200 dark:hover:bg-frame-500',
dark: 'hover:bg-frame-500 dark:hover:bg-frame-800 ',
white: 'hover:bg-white dark:hover:bg-white',

}

export const BgColorSoftGroupHover = {
unstyled: '',
primary: 'group-hover:bg-primary-200 dark:group-hover:bg-primary-900',
secondary: 'group-hover:bg-secondary-200 dark:group-hover:bg-secondary-900',
tertiary: 'group-hover:bg-tertiary-200 dark:group-hover:bg-tertiary-900',
danger: 'group-hover:bg-danger-200 dark:group-hover:bg-danger-900',
warning: 'group-hover:bg-warning-200 dark:group-hover:bg-warning-900',
success: 'group-hover:bg-success-200 dark:group-hover:bg-success-900',
info: 'group-hover:bg-info-200 dark:group-hover:bg-info-900',
light: 'group-hover:bg-frame-300 dark:group-hover:bg-frame-600',
dark: 'group-hover:bg-frame-600 dark:group-hover:bg-frame-950/50 ',
white: 'group-hover:bg-frame-200 dark:group-hover:bg-frame-200',

}

export const BgColorSelected = {
unstyled: '',
primary: 'aria-selected:bg-primary-500 dark:aria-selected:bg-primary-500',
secondary: 'aria-selected:bg-secondary-500 dark:aria-selected:bg-secondary-500',
tertiary: 'aria-selected:bg-tertiary-500 dark:aria-selected:bg-tertiary-500',
danger: 'aria-selected:bg-danger-500 dark:aria-selected:bg-danger-500',
warning: 'aria-selected:bg-warning-500 dark:aria-selected:bg-warning-500',
success: 'aria-selected:bg-success-500 dark:aria-selected:bg-success-500',
info: 'aria-selected:bg-info-500 dark:aria-selected:bg-info-500',
light: 'aria-selected:bg-frame-200 dark:aria-selected:bg-frame-300',
dark: 'aria-selected:bg-frame-600 dark:aria-selected:bg-frame-700 ',
white: 'aria-selected:bg-white dark:aria-selected:bg-white',

}

export const BgColorExpanded = {
unstyled: '',
primary: 'aria-expanded:bg-primary-500 dark:aria-expanded:bg-primary-500',
secondary: 'aria-expanded:bg-secondary-500 dark:aria-expanded:bg-secondary-500',
tertiary: 'aria-expanded:bg-tertiary-500 dark:aria-expanded:bg-tertiary-500',
danger: 'aria-expanded:bg-danger-500 dark:aria-expanded:bg-danger-500',
warning: 'aria-expanded:bg-warning-500 dark:aria-expanded:bg-warning-500',
success: 'aria-expanded:bg-success-500 dark:aria-expanded:bg-success-500',
info: 'aria-expanded:bg-info-500 dark:aria-expanded:bg-info-500',
light: 'aria-expanded:bg-frame-200 dark:aria-expanded:bg-frame-300',
dark: 'aria-expanded:bg-frame-600 dark:aria-expanded:bg-frame-700 ',
white: 'aria-expanded:bg-white dark:aria-expanded:bg-white',

}

export const BgColorChecked = {
unstyled: '',
primary: 'aria-checked:bg-primary-500 dark:aria-checked:bg-primary-500',
secondary: 'aria-checked:bg-secondary-500 dark:aria-checked:bg-secondary-500',
tertiary: 'aria-checked:bg-tertiary-500 dark:aria-checked:bg-tertiary-500',
danger: 'aria-checked:bg-danger-500 dark:aria-checked:bg-danger-500',
warning: 'aria-checked:bg-warning-500 dark:aria-checked:bg-warning-500',
success: 'aria-checked:bg-success-500 dark:aria-checked:bg-success-500',
info: 'aria-checked:bg-info-500 dark:aria-checked:bg-info-500',
light: 'aria-checked:bg-frame-200 dark:aria-checked:bg-frame-300',
dark: 'aria-checked:bg-frame-600 dark:aria-checked:bg-frame-700 ',
white: 'aria-checked:bg-white dark:aria-checked:bg-white',

}

export const BgColorCurrent = {
unstyled: '',
primary: 'aria-[current="page"]:bg-primary-500 dark:aria-[current="page"]:bg-primary-500',
secondary: 'aria-[current="page"]:bg-secondary-500dark:aria-[current="page"]:bg-secondary-500',
tertiary: 'aria-[current="page"]:bg-tertiary-500dark:aria-[current="page"]:bg-tertiary-500',
danger: 'aria-[current="page"]:bg-danger-500 dark:aria-[current="page"]:bg-danger-500',
warning: 'aria-[current="page"]:bg-warning-500 dark:aria-[current="page"]:bg-warning-500',
success: 'aria-[current="page"]:bg-success-500 dark:aria-[current="page"]:bg-success-500',
info: 'aria-[current="page"]:bg-info-500 dark:aria-[current="page"]:bg-info-500',
light: 'aria-[current="page"]:bg-frame-200 dark:aria-[current="page"]:bg-frame-300',
dark: 'aria-[current="page"]:bg-frame-600 dark:aria-[current="page"]:bg-frame-700 ',
white: 'aria-[current="page"]:bg-white dark:aria-[current="page"]:bg-white',

}

export const RingColor = {
unstyled: '',
primary: 'ring-primary-500 dark:ring-primary-500',
secondary: 'ring-secondary-500 dark:ring-secondary-500',
tertiary: 'ring-tertiary-500 dark:ring-tertiary-500',
danger: 'ring-danger-500 dark:ring-danger-500',
warning: 'ring-warning-500 dark:ring-warning-500',
success: 'ring-success-500 dark:ring-success-500',
info: 'ring-info-500 dark:ring-info-500',
light: 'ring-frame-400 dark:ring-frame-400',
dark: 'ring-frame-600 dark:ring-frame-500',
white: 'ring-white dark:ring-white',

}

export const RingColorHover = {
unstyled: '',
primary: 'hover:ring-primary-600 dark:hover:ring-primary-600',
secondary: 'hover:ring-secondary-600 dark:hover:ring-secondary-600',
tertiary: 'hover:ring-tertiary-600 dark:hover:ring-tertiary-600',
danger: 'hover:ring-danger-600 dark:hover:ring-danger-600',
warning: 'hover:ring-warning-600 dark:hover:ring-warning-600',
success: 'hover:ring-success-600 dark:hover:ring-success-600',
info: 'hover:ring-info-600 dark:hover:ring-info-600',
light: 'hover:ring-frame-500 dark:hover:ring-frame-500',
dark: 'hover:ring-frame-700 dark:hover:ring-frame-600',
white: 'hover:ring-frame-200 dark:hover:ring-frame-200',

}

export const BorderColor = {
unstyled: '',
primary: 'border-primary-500 dark:border-primary-500',
secondary: 'border-secondary-500 dark:border-secondary-500',
tertiary: 'border-tertiary-500 dark:border-tertiary-500',
danger: 'border-danger-500 dark:border-danger-500',
warning: 'border-warning-500 dark:border-warning-500',
success: 'border-success-500 dark:border-success-500',
info: 'border-info-500 dark:border-info-500',
light: 'border-frame-400 dark:border-frame-400',
dark: 'border-frame-600 dark:border-frame-500',
white: 'border-white dark:border-white',

}

export const BorderColorHover = {
unstyled: '',
primary: 'hover:border-primary-600 dark:hover:border-primary-600',
secondary: 'hover:border-secondary-600 dark:hover:border-secondary-600',
tertiary: 'hover:border-tertiary-600 dark:hover:border-tertiary-600',
danger: 'hover:border-danger-600 dark:hover:border-danger-600',
warning: 'hover:border-warning-600 dark:hover:border-warning-600',
success: 'hover:border-success-600 dark:hover:border-success-600',
info: 'hover:border-info-600 dark:hover:border-info-600',
light: 'hover:border-frame-500 dark:hover:border-frame-500',
dark: 'hover:border-frame-700 dark:hover:border-frame-600',
white: 'hover:border-frame-200 dark:hover:border-frame-200',

}

export const DivideColor = {
unstyled: '',
primary: 'divide-primary-500 dark:divide-primary-500',
secondary: 'divide-secondary-500 dark:divide-secondary-500',
tertiary: 'divide-tertiary-500 dark:divide-tertiary-500',
danger: 'divide-danger-500 dark:divide-danger-500',
warning: 'divide-warning-500 dark:divide-warning-500',
success: 'divide-success-500 dark:divide-success-500',
info: 'divide-info-500 dark:divide-info-500',
light: 'divide-frame-400 dark:divide-frame-400',
dark: 'divide-frame-600 dark:divide-frame-500',
white: 'divide-white dark:divide-white',

}


export const OutlineColorFocus = {
unstyled: '',
primary: 'focus:outline-primary-500/70 dark:focus:outline-primary-500/70',
secondary: 'focus:outline-secondary-500/70 dark:focus:outline-secondary-500/70',
tertiary: 'focus:outline-tertiary-500/70 dark:focus:outline-tertiary-500/70',
danger: 'focus:outline-danger-500/70 dark:focus:outline-danger-500/70',
warning: 'focus:outline-warning-500/70 dark:focus:outline-warning-500/70',
success: 'focus:outline-success-500/70 dark:focus:outline-success-500/70',
info: 'focus:outline-info-500/70 dark:focus:outline-info-500/70',
light: 'focus:outline-frame-500/70 dark:focus:outline-frame-500/70',
dark: 'focus:outline-frame-500/70 dark:focus:outline-frame-500/70 ',
white: 'focus:outline-white/70 dark:focus:outline-white/70',

}

export const OutlineColorFocusVisible = {
unstyled: '',
primary: 'focus-visible:outline-primary-500/70dark:focus-visible:outline-primary-500/70',
secondary: 'focus-visible:outline-secondary-500/70dark:focus-visible:outline-secondary-500/70',
tertiary: 'focus-visible:outline-tertiary-500/70dark:focus-visible:outline-tertiary-500/70',
danger: 'focus-visible:outline-danger-500/70 dark:focus-visible:outline-danger-500/70',
warning: 'focus-visible:outline-warning-500/70dark:focus-visible:outline-warning-500/70',
success: 'focus-visible:outline-success-500/70dark:focus-visible:outline-success-500/70',
info: 'focus-visible:outline-info-500/70 dark:focus-visible:outline-info-500/70',
light: 'focus-visible:outline-frame-500/70 dark:focus-visible:outline-frame-500/70',
dark: 'focus-visible:outline-frame-500/70 dark:focus-visible:outline-frame-500/70 ',
white: 'focus-visible:outline-white/70 dark:focus-visible:outline-white/70',

}

export const OutlineColorFocusGroup = {
unstyled: '',
primary: 'group-focus:outline-primary-500/70 dark:group-focus:outline-primary-500/70',
secondary: 'group-focus:outline-secondary-500/70dark:group-focus:outline-secondary-500/70',
tertiary: 'group-focus:outline-tertiary-500/70dark:group-focus:outline-tertiary-500/70',
danger: 'group-focus:outline-danger-500/70 dark:group-focus:outline-danger-500/70',
warning: 'group-focus:outline-warning-500/70 dark:group-focus:outline-warning-500/70',
success: 'group-focus:outline-success-500/70 dark:group-focus:outline-success-500/70',
info: 'group-focus:outline-info-500/70 dark:group-focus:outline-info-500/70',
light: 'group-focus:outline-frame-500/70 dark:group-focus:outline-frame-500/70',
dark: 'group-focus:outline-frame-500/70 dark:group-focus:outline-frame-500/70 ',
white: 'group-focus:outline-white/70 dark:group-focus:outline-white/70',

}

export const OutlineColorFocusWithin = {
unstyled: '',
primary: 'focus-within:outline-primary-500/70 dark:focus-within:outline-primary-500/70',
secondary: 'focus-within:outline-secondary-500/70dark:focus-within:outline-secondary-500/70',
tertiary: 'focus-within:outline-tertiary-500/70dark:focus-within:outline-tertiary-500/70',
danger: 'focus-within:outline-danger-500/70 dark:focus-within:outline-danger-500/70',
warning: 'focus-within:outline-warning-500/70 dark:focus-within:outline-warning-500/70',
success: 'focus-within:outline-success-500/70 dark:focus-within:outline-success-500/70',
info: 'focus-within:outline-info-500/70 dark:focus-within:outline-info-500/70',
light: 'focus-within:outline-frame-500/70 dark:focus-within:outline-frame-500/70',
dark: 'focus-within:outline-frame-500/70 dark:focus-within:outline-frame-500/70 ',
white: 'focus-within:outline-white/70 dark:focus-within:outline-white/70',

}

export const OutlineColorFocusPeer = {
unstyled: '',
primary: 'peer-focus:outline-primary-500/70 dark:peer-focus:outline-primary-500/70',
secondary: 'peer-focus:outline-secondary-500/70dark:peer-focus:outline-secondary-500/70',
tertiary: 'peer-focus:outline-tertiary-500/70 dark:peer-focus:outline-tertiary-500/70',
danger: 'peer-focus:outline-danger-500/70 dark:peer-focus:outline-danger-500/70',
warning: 'peer-focus:outline-warning-500/70 dark:peer-focus:outline-warning-500/70',
success: 'peer-focus:outline-success-500/70 dark:peer-focus:outline-success-500/70',
info: 'peer-focus:outline-info-500/70 dark:peer-focus:outline-info-500/70',
light: 'peer-focus:outline-frame-500/70 dark:peer-focus:outline-frame-500/70',
dark: 'peer-focus:outline-frame-500/70 dark:peer-focus:outline-frame-500/70 ',
white: 'peer-focus:outline-white/70 dark:peer-focus:outline-white/70',

}

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
shadows: boolean; // when true shadows are permitted.
transition: string | false | undefined | null;
}

export const colors = Object.keys(BgColor) as ThemeColor[];