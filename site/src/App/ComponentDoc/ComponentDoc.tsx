import React, { ReactNode, Fragment, useRef, useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Route, Switch, useRouteMatch } from 'react-router';
import domtoimage from 'dom-to-image';
import { ComponentProps } from './ComponentProps';
import {
  Box,
  Heading,
  Stack,
  Text,
  TextLink,
  Alert,
  Inline,
  Badge,
  Button,
  Column,
  Columns,
} from '../../../../lib/components';

import {
  ComponentDocs,
  ComponentExample as ComponentExampleType,
} from '../../types';
import Code from '../Code/Code';
import { ThemedExample } from '../ThemeSetting';
import { useConfig } from '../ConfigContext';
import { getHistory } from '../Updates';
import { Markdown } from '../Markdown/Markdown';
import { Navigation, NavigationItem } from './Navigation/Navigation';
import { PageTitle } from '../Seo/PageTitle';

const handler = () => {
  /* No-op for docs examples */
};

const DefaultContainer = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

interface ComponentDocProps {
  componentName: string;
  subfolder?: string;
  docs: ComponentDocs;
}

export const ComponentDoc = ({
  componentName,
  subfolder = '',
  docs,
}: ComponentDocProps) => {
  const { sourceUrlPrefix } = useConfig();

  const componentFolder = `lib/components/${
    subfolder ? `${subfolder}/` : ''
  }${componentName}`;
  const examples = docs.examples || [];

  const sourceUrl = `${sourceUrlPrefix}/${componentFolder}`;
  const migrationGuideUrl = `${sourceUrlPrefix}/${componentFolder}/${componentName}.migration.md`;

  const filteredExamples = examples.filter(
    (example) => example.docsSite !== false,
  );

  const propsToDocument = docs.subComponents
    ? [componentName, ...docs.subComponents]
    : componentName;

  const relevantNames = docs.subComponents
    ? [componentName, ...docs.subComponents]
    : [componentName];

  const history = getHistory(...relevantNames);
  const updateCount = history.filter((item) => item.isRecent).length;

  const propsRouteActive =
    useRouteMatch({
      path: `/components/${componentName}/props`,
      exact: true,
    }) !== null;

  return (
    <Stack space={['xlarge', 'xxlarge']}>
      <Stack space={['large', 'xlarge']}>
        <Heading level="2" component="h1">
          {componentName}
        </Heading>
        <Navigation title="Subnavigation">
          <NavigationItem
            active={
              useRouteMatch({
                path: `/components/${componentName}`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}`}
          >
            Details
          </NavigationItem>
          {componentName.indexOf('use') !== 0 ? (
            <NavigationItem
              active={propsRouteActive}
              href={`/components/${componentName}/props`}
            >
              Props
            </NavigationItem>
          ) : null}
          <NavigationItem
            active={
              useRouteMatch({
                path: `/components/${componentName}/releases`,
                exact: true,
              }) !== null
            }
            href={`/components/${componentName}/releases`}
            badge={
              updateCount > 0 ? (
                <Badge
                  tone="promote"
                  weight="strong"
                  title={`${updateCount} release${
                    updateCount === 1 ? '' : 's'
                  } in the last two months`}
                >
                  {String(updateCount)}
                </Badge>
              ) : undefined
            }
          >
            Releases
          </NavigationItem>
        </Navigation>
        {docs.deprecationWarning ? (
          <Alert tone="caution">{docs.deprecationWarning}</Alert>
        ) : null}
      </Stack>
      <Switch>
        <Route exact path={`/components/${componentName}`}>
          <PageTitle title={componentName} />
          <Stack space="xxlarge">
            {docs.description}

            {filteredExamples.map((example, index) => (
              <ComponentExample
                key={index}
                index={index}
                exampleCount={filteredExamples.length}
                category={docs.category}
                {...example}
              />
            ))}
          </Stack>
        </Route>
        <Route path={`/components/${componentName}/props`}>
          <PageTitle title={`${componentName} Props`} />

          <Stack space="xxlarge">
            {Array.isArray(propsToDocument) ? (
              propsToDocument.map((c) => (
                <Stack space="large" key={c}>
                  <Heading level="3">{c}</Heading>
                  <ComponentProps componentName={c} />
                </Stack>
              ))
            ) : (
              <ComponentProps componentName={componentName} />
            )}

            <Stack space="large">
              <Heading level="3" component="h4">
                Further References
              </Heading>
              <Text>
                <TextLink href={sourceUrl}>View Source</TextLink>
              </Text>
              <Text>
                {docs.migrationGuide ? (
                  <TextLink href={migrationGuideUrl}>Migration Guide</TextLink>
                ) : null}
              </Text>
            </Stack>
          </Stack>
        </Route>
        <Route path={`/components/${componentName}/releases`}>
          <PageTitle title={`${componentName} Releases`} />

          <Stack space="xlarge">
            {history.length > 0 ? (
              history.map((item, index) => (
                <Box key={index} paddingTop={index > 0 ? 'medium' : undefined}>
                  <Stack space="large">
                    <Inline space="small" alignY="center">
                      <Heading level="3">v{item.version}</Heading>
                      {item.time ? (
                        <Badge
                          bleedY
                          tone={item.isRecent ? 'promote' : 'neutral'}
                        >
                          {item.time}
                        </Badge>
                      ) : null}
                    </Inline>
                    <Markdown>{item.summary}</Markdown>
                  </Stack>
                </Box>
              ))
            ) : (
              <Stack space="large">
                <Heading level="3">No release notes available</Heading>
                <Text>
                  This component hasn’t had any releases since we introduced{' '}
                  <TextLink href="https://github.com/atlassian/changesets">
                    a proper release notes system.
                  </TextLink>
                </Text>
              </Stack>
            )}
          </Stack>
        </Route>
      </Switch>
    </Stack>
  );
};

interface ComponentExampleProps extends ComponentExampleType {
  index: number;
  exampleCount: number;
  category: ComponentDocs['category'];
}
function ComponentExample({
  index,
  exampleCount,
  category,
  label,
  Example,
  code,
  Container = DefaultContainer,
  background = 'body',
  showCodeByDefault = false,
  playroom,
  description,
}: ComponentExampleProps) {
  const exampleRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<string>();
  const codeAsString =
    Example && !code
      ? reactElementToJSXString(
          Example({ id: 'id', handler }), // eslint-disable-line new-cap
          {
            useBooleanShorthandSyntax: false,
            showDefaultProps: false,
            showFunctions: false,
            filterProps: ['onChange', 'onBlur', 'onFocus'],
          },
        )
      : code;

  const copyJpg = () => {
    if (exampleRef.current) {
      domtoimage
        .toJpeg(exampleRef.current, { bgcolor: 'white' })
        .then((dataUrl) => {
          setImage(dataUrl);
        });
    }
  };

  const copyPng = () => {
    if (exampleRef.current) {
      domtoimage.toPng(exampleRef.current).then((dataUrl) => {
        setImage(dataUrl);
      });
    }
  };

  return (
    <Box>
      <Stack space="large">
        {label && exampleCount > 1 ? (
          <Heading level="3">{label}</Heading>
        ) : null}
        {description ?? null}
        <Columns space="medium">
          <Column>
            <Button onClick={copyPng}>PNG</Button>
          </Column>
          <Column>
            <Button onClick={copyJpg}>JPG</Button>
          </Column>
        </Columns>

        {image ? <img src={image} /> : null}
        <Stack space="xxsmall">
          {Example ? (
            <ThemedExample background={background}>
              <Container>
                <div ref={exampleRef}>
                  <Example id={`${index}`} handler={handler} />
                </div>
              </Container>
            </ThemedExample>
          ) : null}
          {codeAsString ? (
            <Code
              collapsedByDefault={
                !showCodeByDefault &&
                Example !== undefined &&
                category !== 'Logic'
              }
              playroom={playroom}
            >
              {codeAsString}
            </Code>
          ) : null}
        </Stack>
      </Stack>
    </Box>
  );
}
