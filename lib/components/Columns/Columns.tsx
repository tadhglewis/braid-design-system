import React, { ReactNode, Fragment } from 'react';
import Box from '../Box/Box';

export interface ColumnsProps {
  children: ReactNode;
}

const Columns: React.StatelessComponent<ColumnsProps> = ({ children }) => {
  return (
    <Box display="flexOnDesktop">
      {React.Children.map(children, (child, index) => (
        <Fragment key={index}>
          {/* <Box style={{ flex: 1 }}>hello gavin</Box> */}
          {child}
          {/* <Hidden mobile>
                    <Space size="small" />
                </Hidden> */}
        </Fragment>
      ))}
    </Box>
  );
};

export default Columns;
