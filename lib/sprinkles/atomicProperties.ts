import { themeVars } from '../themes/themeVars.css';

const sizes = {
  full: '100%',
  touchable: themeVars.touchableSize,
};

const space = {
  ...themeVars.space,
  none: 0,
} as const;

const { width: borderWidth, color } = themeVars.border;
const boxShadow = {
  ...themeVars.shadows,
  outlineFocus: `0 0 0 ${borderWidth.large} ${color.focus}`,
  borderField: `inset 0 0 0 ${borderWidth.standard} ${color.field}`,
  borderStandard: `inset 0 0 0 ${borderWidth.standard} ${color.standard}`,
  borderStandardInverted: `inset 0 0 0 ${borderWidth.standard} ${color.standardInverted}`,
  borderCritical: `inset 0 0 0 ${borderWidth.standard} ${color.critical}`,
  borderCriticalLarge: `inset 0 0 0 ${borderWidth.large} ${color.critical}`,
  borderCaution: `inset 0 0 0 ${borderWidth.standard} ${color.caution}`,
  borderPositive: `inset 0 0 0 ${borderWidth.standard} ${color.positive}`,
  borderInfo: `inset 0 0 0 ${borderWidth.standard} ${color.info}`,
  borderPromote: `inset 0 0 0 ${borderWidth.standard} ${color.promote}`,
  borderFormHover: `inset 0 0 0 ${borderWidth.standard} ${color.formHover}`,
  borderFormAccent: `inset 0 0 0 ${borderWidth.standard} ${color.formAccent}`,
  borderFormAccentLarge: `inset 0 0 0 ${borderWidth.large} ${color.formAccent}`,
  borderBrandAccentLarge: `inset 0 0 0 ${borderWidth.large} ${color.brandAccent}`,
  borderStandardInvertedLarge: `inset 0 0 0 ${borderWidth.large} ${color.standardInverted}`,
};

export const pseudoProperties = {
  transform: themeVars.transforms,
} as const;

export type PseudoProperties = keyof typeof pseudoProperties;

export const unresponsiveProperties = {
  background: themeVars.color.background,
  overflow: ['hidden', 'scroll', 'visible', 'auto'],
  userSelect: ['none'],
  outline: ['none'],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400,
  },
  boxShadow,
  cursor: ['default', 'pointer'],
  pointerEvents: ['none'],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  height: sizes,
  width: sizes,
  minWidth: {
    0: '0%',
  },
  maxWidth: themeVars.contentWidth,
  transition: themeVars.transitions,
} as const;

export type UnresponsiveProperties = keyof typeof unresponsiveProperties;

export const responsiveProperties = {
  display: {
    none: 'none',
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
  },
  position: ['relative', 'absolute', 'fixed'],
  borderRadius: {
    none: '0px',
    full: '50%',
    ...themeVars.border.radius,
  },
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  alignItems: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
  },
  justifyContent: {
    flexStart: 'flex-start',
    center: 'center',
    flexEnd: 'flex-end',
    spaceBetween: 'space-between',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
  flexWrap: {
    wrap: 'wrap',
    nowrap: 'nowrap',
  },
  flexShrink: [0],
  flexGrow: [0, 1],
  textAlign: ['left', 'center', 'right'],
} as const;

export type ResponsiveProperties = keyof typeof responsiveProperties;