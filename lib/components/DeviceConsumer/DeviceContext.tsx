import React, { createContext, useContext, ReactNode } from 'react';
import { isMobile } from 'is-mobile';

interface DeviceContext {
  isNative: boolean;
}
const defaultDeviceContext = {
  isNative: false,
};
const DeviceContext = createContext<DeviceContext>(defaultDeviceContext);

interface DeviceProviderProps {
  userAgent?: string;
  children: ReactNode;
}
export const DeviceProvider = ({
  userAgent,
  children,
}: DeviceProviderProps) => {
  const isNative = isMobile({ tablet: true, ua: userAgent });

  return (
    <DeviceContext.Provider value={{ isNative }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
