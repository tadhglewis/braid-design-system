import React, { Children, ReactNode } from 'react';

import { Box } from '../Box/Box';

import ActionsContext from './ActionsContext';

export interface ActionsProps {
  children: ReactNode;
}

export const Actions = ({ children }: ActionsProps) => (
  <ActionsContext.Provider value={true}>
    <Box display="flex" flexDirection={['column', 'row']}>
      {Children.map(children, (child, index) =>
        index === 0 ? (
          <div>{child}</div>
        ) : (
          <Box paddingLeft={['none', 'xsmall']} paddingTop={['xsmall', 'none']}>
            {child}
          </Box>
        ),
      )}
    </Box>
  </ActionsContext.Provider>
);
