import React, { ReactNode } from 'react';
import { TreatProvider } from 'sku/treat';
import ThemeNameContext from '../ThemeNameConsumer/ThemeNameContext';
import { DeviceProvider } from '../DeviceConsumer/DeviceContext';
import { Theme } from '../../themes/theme';

export interface BraidProviderProps {
  theme: Theme;
  userAgent?: string;
  children: ReactNode;
}

export const BraidProvider = ({
  theme,
  userAgent,
  children,
}: BraidProviderProps) => (
  <DeviceProvider userAgent={userAgent}>
    <ThemeNameContext.Provider value={theme.name}>
      <TreatProvider theme={theme.treatTheme}>{children}</TreatProvider>
    </ThemeNameContext.Provider>
  </DeviceProvider>
);
