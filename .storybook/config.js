/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import 'normalize.css/normalize.css';
import applyGlobalStyles from '../client/configs/globalStyles';
import theme from '../client/configs/theme';

function loadStories() {
  require('../client/ui/.stories');
}

applyGlobalStyles();

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);
