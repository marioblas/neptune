/* eslint no-unused-expressions: 0 */

import { injectGlobal } from 'styled-components';
import theme from './theme';

export default function () {
  injectGlobal`
    body {
      font-family: sans-serif;
      color: ${theme.color.black};
    }
  `;
}
