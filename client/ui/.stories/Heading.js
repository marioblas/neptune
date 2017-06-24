import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../Heading';

storiesOf('Heading', module)
  .add('default', () => (
    <Heading>Heading 1</Heading>
  ))
  .add('with custom level', () => (
    <Heading level="2">Heading 2</Heading>
  ))
  .add('with custom tag', () => (
    <Heading tag="h3">{'Heading 1 with <h3>'}</Heading>
  ));
