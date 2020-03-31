import React, { ReactNode, useContext, useMemo } from 'react';
import { useStyles } from 'sku/react-treat';

import { useText } from '../../hooks/typography';
import { useLineHeightContainer } from '../../hooks/useLineHeightContainer/useLineHeightContainer';
import { Box } from '../Box/Box';
import { BulletListContext } from '../BulletList/BulletList';
import { useStackItem } from '../Stack/Stack';
import TextContext from '../Text/TextContext';

import * as styleRefs from './Bullet.treat';

export interface BulletProps {
  children: ReactNode;
}

const component = 'li';

export const Bullet = ({ children }: BulletProps) => {
  const styles = useStyles(styleRefs);
  const { size, space, tone } = useContext(BulletListContext);

  // Prevent re-renders when context values haven't changed
  const textContextValue = useMemo(
    () => ({
      size,
      tone,
      baseline: true,
    }),
    [tone, size],
  );

  return (
    <TextContext.Provider value={textContextValue}>
      <Box
        component={component}
        className={[
          useText({
            size,
            baseline: true,
            tone,
          }),
          useStackItem({
            component,
            space,
            align: 'left',
          }),
        ]}
      >
        <Box display="flex">
          <Box
            display="flex"
            alignItems="center"
            className={useLineHeightContainer(size)}
          >
            <Box
              borderRadius="full"
              className={[styles.currentColor, styles.size[size]]}
            />
          </Box>
          <Box paddingLeft={size === 'xsmall' ? 'xsmall' : 'small'}>
            {children}
          </Box>
        </Box>
      </Box>
    </TextContext.Provider>
  );
};
