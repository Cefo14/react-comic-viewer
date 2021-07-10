import { MemoryRouter } from 'react-router';
import { addDecorator } from '@storybook/react';

import Theme from '../theme';

import '../index.css';

const ThemeDecorator = (story: any) => (
  <Theme>
    { story() }
  </Theme>
);

const HistoryDecorator = (story: any) => (
  <MemoryRouter initialEntries={['/']}>
    { story() }
  </MemoryRouter>
);

addDecorator(ThemeDecorator);
addDecorator(HistoryDecorator);
