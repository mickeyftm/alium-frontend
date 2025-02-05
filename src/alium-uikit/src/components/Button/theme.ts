import { darkColors, lightColors } from '../../theme/colors'
import { ButtonTheme, variants } from './types'

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS, DEFAULT } = variants

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: `none`,
    borderColorHover: 'currentColor',
    boxShadow: 'inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
    boxShadowActive: 'inset 0px -1px 0px rgba(14, 14, 44, 0.4)',
    color: '#FFFFFF',
  },
  [SECONDARY]: {
    background: 'transparent',
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: `1px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: lightColors.primary,
    colorHover: '#fff',
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primary,
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: lightColors.primary,
    colorHover: '#fff',
  },
  [TEXT]: {
    background: 'transparent',
    backgroundActive: 'transparent',
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: lightColors.primary,
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: '#F29900', // darkten 10%
    backgroundHover: '#FFB12B', // lighten 10%
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: '#F27400',
    boxShadowActive: 'none',
    color: '#FFFFFF',
  },
  [SUBTLE]: {
    background: lightColors.textSubtle,
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover: `${lightColors.textSubtle}B3`, // 85% opacity
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#FFFFFF',
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#FFFFFF',
  },
  [DEFAULT]: {
    background: 'white',
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: 'currentColor',
    boxShadow: 'none',
    boxShadowActive: 'none',
    color: '#24BA7B',
  },
}

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [DEFAULT]: {
    ...light.default,
  },
}
