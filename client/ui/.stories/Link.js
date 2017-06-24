import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';

import Link from '../Link';

storiesOf('Link', module)
  .add('as anchor', () => (
    <Link
      href="https://github.com/marioblas/neptune"
      target="_blank"
      rel="noopener noreferrer"
    >
      Nepune on Github
    </Link>
  ))
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('as link', () => (
    <Link to="/">Go to root</Link>
  ));
