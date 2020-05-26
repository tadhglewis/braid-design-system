import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import assert from 'assert';
import classnames from 'classnames';

import { OptionalTitle } from '../../icons/SVGTypes';
import { BoxProps } from '../../Box/Box';
import TextContext from '../../Text/TextContext';
import HeadingContext from '../../Heading/HeadingContext';
import {
  useTextSize,
  useTextTone,
  UseTextProps,
} from '../../../hooks/typography';
import { useLineHeightContainer } from '../../../hooks/useLineHeightContainer/useLineHeightContainer';
import * as styleRefs from './useIcon.treat';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface UseIconSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const useIconSize = ({ size = 'standard' }: UseIconSizeProps = {}) => {
  const styles = useStyles(styleRefs);

  return classnames(styles.size, useTextSize(size));
};

export interface UseIconContainerSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const useIconContainerSize = (
  size: Exclude<IconSize, 'fill'> = 'standard',
) => {
  const styles = useStyles(styleRefs);
  return classnames(styles.blockWidths[size], useLineHeightContainer(size));
};

export type UseIconProps = {
  size?: IconSize;
  tone?: UseTextProps['tone'];
  alignY?: 'uppercase' | 'lowercase';
} & OptionalTitle;

type PrivateIconProps = {
  container?: boolean;
  verticalCorrection?: {
    lowercase: keyof typeof styleRefs.alignY.lowercase;
    uppercase: keyof typeof styleRefs.alignY.uppercase;
  };
};

const detaultVerticalCorrection = {
  uppercase: 'none',
  lowercase: 'none',
} as const;

export const useIcon = (
  { size, tone, alignY, ...titleProps }: UseIconProps,
  {
    container = false,
    verticalCorrection = detaultVerticalCorrection,
  }: PrivateIconProps = {},
): BoxProps => {
  const styles = useStyles(styleRefs);
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone =
    textContext && textContext.tone ? textContext.tone : 'neutral';
  const resolvedTone = useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;
  const blockSizeStyles = useIconContainerSize(
    size !== 'fill' ? size : 'standard',
  );

  assert(
    !(size && isInline),
    `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${
      textContext ? 'Text' : 'Heading'
    }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/`,
  );

  assert(
    !(alignY && !isInline),
    `Specifying \`alignY\` for an \`Icon\` outside of a text component is invalid.`,
  );

  if (size === 'fill') {
    return {
      width: 'full',
      height: 'full',
      display: 'block',
      ...(container
        ? null
        : {
            className: resolvedTone,
            ...titleProps,
          }),
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [
      resolvedTone,
      styles.size,
      isInline
        ? [
            styles.inline,
            container
              ? null
              : styles.alignY[alignY || 'uppercase'][
                  verticalCorrection[alignY || 'uppercase']
                ],
          ]
        : blockSizeStyles,
    ],
    ...titleProps,
  };
};
