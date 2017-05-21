/* eslint no-unused-expressions: 0 */

import { injectGlobal } from 'styled-components';
import theme from './theme';

export default function () {
  injectGlobal`
    ${''/* Resetting box-sizing to border-box */}
    html {
      box-sizing: border-box;
    }

    ${''/*
      Make all elements inherit from the parent box-sizing
      This make it easier to change the box-sizing in plugins or other components
      that leverage other behavior
      See: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
    */}
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      font-family: sans-serif;
      color: ${theme.color.black};
    }
  `;
}
