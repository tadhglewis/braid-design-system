import React from 'react';
import { useStyles } from 'sku/react-treat';

import { Box } from '../../Box/Box';

import * as styleRefs from './Highlight.treat';

export interface HighlightProps {
  children: string;
}

export const Highlight = ({ children }: HighlightProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component="mark"
      borderRadius="standard"
      background="critical"
      className={styles.root}
    >
      {children}
    </Box>
  );
};
