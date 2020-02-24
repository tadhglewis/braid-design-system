import React, { useReducer } from 'react';
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
  const { variant = defaultVariant, activeTabId } = props;

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
          <Hidden below="desktop">
            <Columns space="large" alignY="center">
              <Column width="content">
                {props.authenticationStatus === 'unauthenticated' ? (
                  <Columns space="medium">
                    {variant.secondaryActions.map(({ href, text }) => (
                      <Column key={text}>
                        <Text baseline={false} tone="info">
                          <TextLink href={href} hitArea="large">
                            <span style={{ whiteSpace: 'nowrap' }}>{text}</span>
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
          <Box display="flex" flexDirection="row" cursor="pointer">
            <Box
              component="input"
              type="checkbox"
              id={checkboxId}
              className={styles.menuCheckbox}
            />
            <Box
              component="label"
              cursor="pointer"
              htmlFor={checkboxId}
              className={styles.menuCheckboxLabel}
            >
              <Text baseline={false}>
                {(() => {
                  switch (props.authenticationStatus) {
                    case 'authenticated': {
                      return props.userName;
                    }
                    case 'pending': {
                      return '';
                    }
                    default: {
                      return variant.menuLabel;
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
            <Box
              className={styles.menuContents}
              transition="fast"
              pointerEvents="none"
              position="relative"
            >
              <Hidden below="tablet">
                <Box
                  position="absolute"
                  background="card"
                  boxShadow="medium"
                  borderRadius="standard"
                  marginTop="small"
                  transition="fast"
                  style={{ right: 0, top: 0, width: 200 }}
                >
                  {variant.authenticatedLinks.map(({ href, text }) => (
                    <Box
                      key={text}
                      component="a"
                      display="block"
                      href={href}
                      height="touchable"
                      paddingX="small"
                    >
                      <Text baseline={false}>{text}</Text>
                    </Box>
                  ))}
                </Box>
              </Hidden>
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
        </Column>
      </Columns>
    </Box>
  );
};
