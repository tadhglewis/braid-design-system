import { ReactElement } from 'react';

type HeaderLink = {
  href: string;
  text: string;
};

export type HeaderVariant = Readonly<{
  logo: ReactElement;
  menuLabel: string;
  tabs: Array<{
    id: string;
    href: string;
    text: string;
    icon?: ReactElement;
  }>;
  callToAction: HeaderLink;
  secondaryActions: Array<HeaderLink>;
  authenticatedLinks: Array<HeaderLink>;
}>;
