import React, { useState, useEffect, ComponentType } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../Box/Box';
import { useIcon, UseIconProps } from './useIcon';
import * as styleRefs from './FillableIcon.treat';

const useMountedState = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export type FillableIconProps = UseIconProps & {
  active?: boolean;
  transition?: boolean;
};

type PrivateFillableIconProps = FillableIconProps & {
  activeSvgComponent: ComponentType<UseIconProps>;
  inactiveSvgComponent: ComponentType<UseIconProps>;
};

export const FillableIcon = ({
  active = false,
  transition = true,
  activeSvgComponent: ActiveSvgComponent,
  inactiveSvgComponent: InactiveSvgComponent,
  ...props
}: PrivateFillableIconProps) => {
  const styles = useStyles(styleRefs);
  const mounted = useMountedState();
  const iconProps = useIcon(props);
  const iconContainerProps = useIcon(props, { container: true });

  return !mounted || !transition ? (
    // Optimise markup size for SSR since the transition can only occur once JavaScript is running
    <Box
      component={active ? ActiveSvgComponent : InactiveSvgComponent}
      {...iconProps}
    />
  ) : (
    <Box {...iconContainerProps} position="relative">
      <Box component={InactiveSvgComponent} {...iconProps} />
      <Box
        {...iconContainerProps}
        position="absolute"
        top={0}
        left={0}
        transition="touchable"
        opacity={!active ? 0 : undefined}
        className={[
          iconContainerProps.className,
          !active ? styles.scaled : undefined,
        ]}
      >
        <Box component={ActiveSvgComponent} {...iconProps} />
      </Box>
    </Box>
  );
};
