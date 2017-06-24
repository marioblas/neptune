import React from 'react';
import { storiesOf } from '@storybook/react';

import Img from '../Img';

storiesOf('Img', module)
  .add('default', () => (
    <Img src="https://source.unsplash.com/random/800x600" alt="Unsplash random photo" />
  ))
