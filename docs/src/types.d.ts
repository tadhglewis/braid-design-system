import { ComponentType, ReactNode, SyntheticEvent } from 'react';

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
}

export interface RenderContext {
  html: string;
  publicPath: string;
  routerBasename: string;
  appConfig: AppConfig;
}

export interface ComponentDocs {
  storybook?: boolean;
  examples: Array<ComponentExample>;
}

export interface ComponentExample {
  label?: string;
  render?: (args: {
    id: string;
    handler: (value: any) => void;
    value: (intialValue?: any) => any;
  }) => ReactNode;
  code?: string;
}
