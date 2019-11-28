import bulletDocs from '../Bullet/Bullet.docs';
import dedent from 'dedent';
import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Content',
  examples: bulletDocs.examples,
  patterns: [
    {
      name: 'Xsmall Space',
      code: dedent`
        <BulletList space="xsmall">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      `,
    },
    {
      name: 'Small Space',
      code: dedent`
        <BulletList space="small">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      `,
    },
    {
      name: 'Medium Space',
      code: dedent`
        <BulletList space="medium">
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
          <Bullet>Bullet</Bullet>
        </BulletList>
      `,
    },
  ],
};

export default docs;
