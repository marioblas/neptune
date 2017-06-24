import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router';

import Button from '../Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Default</Button>
  ))
  .add('primary', () => (
    <Button primary onClick={action('clicked')}>Primary</Button>
  ))
  .add('as anchor', () => (
    <Button
      href="https://github.com/marioblas/neptune"
      target="_blank"
      rel="noopener noreferrer"
    >
      Nepune on Github
    </Button>
  ))
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('as link', () => (
    <Button to="/">Go to root</Button>
  ));
