import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Hello world</Button>
  ))
  .add('primary', () => (
    <Button primary onClick={action('clicked')}>Hello world</Button>
  ))
