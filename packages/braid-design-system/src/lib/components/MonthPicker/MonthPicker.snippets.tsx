import source from '@braid-design-system/source.macro';

import { IconHelp, MonthPicker } from '../../playroom/components';
import { TextLink } from '../TextLink/TextLink';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<MonthPicker label="Month" />),
  },
  {
    name: 'With additional labels',
    code: source(
      <MonthPicker
        label="Label"
        secondaryLabel="optional"
        tertiaryLabel={
          <TextLink href="#" icon={<IconHelp />}>
            Help
          </TextLink>
        }
      />,
    ),
  },
  {
    name: 'With a description',
    code: source(
      <MonthPicker
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      <MonthPicker label="Month" tone="critical" message="Critical message" />,
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      <MonthPicker label="Month" tone="positive" message="Positive message" />,
    ),
  },
  {
    name: 'With a neutral message',
    code: source(
      <MonthPicker label="Month" tone="neutral" message="Neutral message" />,
    ),
  },
  {
    name: 'With custom months and years',
    code: source(
      <MonthPicker
        label="Started"
        monthLabel="MM"
        yearLabel="YYYY"
        monthNames={[
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
          '12',
        ]}
      />,
    ),
  },
];
