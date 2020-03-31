import React, { ReactNode } from 'react';

import { Box } from '../Box/Box';
import { Column } from '../Column/Column';
import { Columns } from '../Columns/Columns';
import { Text } from '../Text/Text';
import { IconInfo, IconCritical, IconPositive, IconPromote } from '../icons';

type Tone = 'promote' | 'info' | 'positive' | 'critical';

export type NoticeProps = {
  tone?: Tone;
  children: ReactNode;
};

const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  critical: IconCritical,
};

export const Notice = ({ tone = 'info', children }: NoticeProps) => {
  const Icon = icons[tone];

  return (
    <Box role="alert" aria-live="polite">
      <Columns space="xsmall">
        <Column width="content">
          <Icon tone={tone} />
        </Column>
        <Column>
          <Text tone={tone} baseline={false}>
            {children}
          </Text>
        </Column>
      </Columns>
    </Box>
  );
};
