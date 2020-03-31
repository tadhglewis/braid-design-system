import '../../../lib/reset';
import map from 'lodash/map';
import React, { StrictMode } from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { BraidProvider, ToastProvider } from '../../../lib/components';

import { Navigation } from './Navigation/Navigation';
import { ThemeSettingProvider } from './ThemeSetting';
import components from './routes/components';
import foundations from './routes/foundations';
import guides from './routes/guides';
import home from './routes/home';

import { theme as docsSiteTheme } from '../theme/theme.treat';

export const App = () => (
  <StrictMode>
    <ThemeSettingProvider>
      <BraidProvider theme={docsSiteTheme}>
        <ToastProvider>
          <Navigation>
            <Switch>
              {map(
                { ...home, ...guides, ...foundations, ...components },
                (routeProps, path) => (
                  <Route key={path} {...routeProps} path={path} />
                ),
              )}
              <Redirect path="/components" exact to="/" />
            </Switch>
          </Navigation>
        </ToastProvider>
      </BraidProvider>
    </ThemeSettingProvider>
  </StrictMode>
);
