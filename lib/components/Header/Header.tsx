import React from 'react';
import { useStyles } from 'sku/react-treat';
import {
  Box,
  Hidden,
  Columns,
  Column,
  ButtonRenderer,
  Text,
  TextLink,
  IconChevron,
} from '../';
import { HeaderVariant } from './HeaderVariant';
import * as styleRefs from './Header.treat';

import defaultVariant from './variants/seek-candidate-au-en';
import { Inline } from '../Inline/Inline';
import { useTouchableSpace } from '../../hooks/typography';
import { Overlay } from '../private/Overlay/Overlay';
import { useVirtualTouchable } from '../private/touchable/useVirtualTouchable';

type HeaderProps = {
  variant?: HeaderVariant;
  activeTabId?: string; // Type this properly
} & (
  | { authenticationStatus: 'unauthenticated' }
  | { authenticationStatus: 'pending' }
  | {
      authenticationStatus: 'authenticated';
      userName: string;
    }
);

const checkboxId = '_bh';

export const Header = (props: HeaderProps) => {
  const styles = useStyles(styleRefs);
  const { variant = defaultVariant, activeTabId, authenticationStatus } = props;
  const standardTouchableSpace = useTouchableSpace('standard');
  const virtualTouchable = useVirtualTouchable();

  return (
    <Box background="card" paddingX="medium" width="full">
      <Columns space="large" alignY="center">
        <Column>
          <Inline space="none">
            <Box
              display="flex"
              alignItems="center"
              paddingRight="large"
              className={styles.headerHeight}
            >
              {variant.logo}
            </Box>
            <Box display={['none', 'flex']} className={styles.headerHeight}>
              {variant.tabs.map(({ href, text, id }) => (
                <Box
                  key={id}
                  component="a"
                  href={href}
                  display="flex"
                  alignItems="center"
                  height="full"
                  paddingX="small"
                  cursor="pointer"
                  className={[styles.headerHeight, styles.selectionOnHover]}
                >
                  <Text
                    tone={activeTabId === id ? 'link' : 'neutral'}
                    baseline={false}
                    weight={activeTabId === id ? 'strong' : 'medium'}
                  >
                    {text}
                  </Text>
                </Box>
              ))}
            </Box>
          </Inline>
        </Column>
        <Column width="content">
          <Box display="flex" alignItems="center">
            <Hidden
              above={
                authenticationStatus === 'unauthenticated' ||
                authenticationStatus === 'pending'
                  ? 'mobile'
                  : undefined
              }
            >
              <Box display="flex" flexDirection="row">
                <Box
                  component="input"
                  type="checkbox"
                  id={checkboxId}
                  className={styles.menuCheckbox}
                />
                <Box position="relative" className={styles.menuCheckboxLabel}>
                  <Overlay
                    boxShadow="outlineFocus"
                    borderRadius="standard"
                    transition="fast"
                    onlyVisibleForKeyboardNavigation
                    className={styles.menuCheckboxLabelFocus}
                  />
                  <Box component="label" cursor="pointer" htmlFor={checkboxId}>
                    <Box className={virtualTouchable}>
                      <Text baseline={false}>
                        {(() => {
                          switch (props.authenticationStatus) {
                            case 'authenticated': {
                              return props.userName ?? variant.strings.Menu;
                            }
                            case 'pending': {
                              return '';
                            }
                            default: {
                              return variant.strings.Menu;
                            }
                          }
                        })()}
                        <Box display="inlineBlock" paddingLeft="xxsmall">
                          <Box className={styles.menuChevron} transition="fast">
                            <IconChevron direction="down" alignY="lowercase" />
                          </Box>
                        </Box>
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className={styles.menuContents}

                  // position="relative"
                >
                  <Hidden above="tablet">
                    <Box
                      position="fixed"
                      background="card"
                      left={0}
                      right={0}
                      bottom={0}
                      pointerEvents="none"
                      transition="fast"
                      className={styles.mobileMenu}
                    >
                      {variant.authenticatedLinks.map(({ href, text }) => (
                        <Box
                          key={text}
                          component="a"
                          display="block"
                          href={href}
                          height="touchable"
                          paddingX="small"
                          className={[styles.menuItem, standardTouchableSpace]}
                        >
                          <Text baseline={false}>{text}</Text>
                        </Box>
                      ))}
                    </Box>
                  </Hidden>
                  <Box
                    display={['none', 'block']}
                    position="relative"
                    height="full"
                  >
                    <Box
                      position="absolute"
                      marginTop="small"
                      transition="fast"
                      height="full"
                      pointerEvents="none"
                      className={styles.desktopMenu}
                    >
                      <Box
                        position="absolute"
                        background="card"
                        boxShadow="medium"
                        borderRadius="standard"
                        top={0}
                        right={0}
                        style={{ width: 200 }}
                      >
                        {variant.authenticatedLinks.map(({ href, text }) => (
                          <Box
                            key={text}
                            component="a"
                            display="block"
                            href={href}
                            height="touchable"
                            paddingX="small"
                            className={[
                              styles.menuItem,
                              standardTouchableSpace,
                            ]}
                          >
                            <Text baseline={false}>{text}</Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  component="label"
                  htmlFor={checkboxId}
                  className={styles.menuBackdrop}
                  position="fixed"
                  display="none"
                  width="full"
                  height="full"
                  aria-hidden
                />
              </Box>
            </Hidden>
            <Hidden below="desktop">
              <Columns space="medium" alignY="center">
                <Column width="content">
                  {props.authenticationStatus === 'unauthenticated' ? (
                    <Columns space="medium">
                      {variant.secondaryActions.map(({ href, text }) => (
                        <Column width="content" key={text}>
                          <Text baseline={false} tone="info">
                            <TextLink href={href} hitArea="large">
                              <span style={{ whiteSpace: 'nowrap' }}>
                                {text}
                              </span>
                            </TextLink>
                          </Text>
                        </Column>
                      ))}
                    </Columns>
                  ) : null}
                </Column>
                <Column width="content">
                  <ButtonRenderer weight="weak">
                    {(ButtonChildren, buttonProps) => (
                      <a href={variant.callToAction.href} {...buttonProps}>
                        <ButtonChildren>
                          {variant.callToAction.text}
                        </ButtonChildren>
                      </a>
                    )}
                  </ButtonRenderer>
                </Column>
              </Columns>
            </Hidden>
          </Box>
        </Column>
      </Columns>
    </Box>
  );
};
