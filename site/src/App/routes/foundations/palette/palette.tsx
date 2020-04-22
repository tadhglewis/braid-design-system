import React from 'react';
import {
  Box,
  Text,
  Columns,
  Column,
  Heading,
  Stack,
  useColor,
  BackgroundProvider,
} from '../../../../../../lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import { Page } from '../../../../types';
import { ThemedExample } from '../../../ThemeSetting';
import { isLight } from '../../../../../../lib/utils';

const Color = ({
  value,
  label,
}: {
  value: string;
  label?: string | number;
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    style={{ height: 60, backgroundColor: value }}
  >
    {label ? (
      <BackgroundProvider type={isLight(value) ? 'light' : 'dark'}>
        <Text size="small" tone="secondary">
          {label}
        </Text>
      </BackgroundProvider>
    ) : null}
  </Box>
);

type ColorName = keyof ReturnType<typeof useColor>['palette'];
const Swatch = ({ colorName }: { colorName: ColorName }) => {
  const { palette } = useColor();
  const color = palette[colorName];

  if (!color) {
    return <Text>Nothing to see here...</Text>;
  }

  return typeof color === 'string' ? (
    <Color value={color} />
  ) : (
    <Columns space="none" collapseBelow="desktop">
      {Object.keys(color).map((tint) => (
        <Column key={tint}>
          <Color value={color[tint as keyof typeof color]} label={tint} />
        </Column>
      ))}
    </Columns>
  );
};

function TonePage() {
  const { palette } = useColor();

  return (
    <TextStack>
      <Heading level="2">Palette</Heading>

      {Object.keys(palette).map((colorName) => (
        <Stack key={colorName} space="small">
          <Text weight="strong">{colorName}</Text>
          <ThemedExample>
            <Swatch colorName={colorName as keyof typeof palette} />
          </ThemedExample>
        </Stack>
      ))}
    </TextStack>
  );
}

const page: Page = {
  title: 'Palette',
  component: TonePage,
};

export default page;
