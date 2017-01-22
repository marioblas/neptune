/* eslint no-unused-expressions: 0 */

import { injectGlobal } from 'styled-components';

export default function () {
  injectGlobal`
    .app-container {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    .main-content {
      flex: 1 0 auto;
    }
  `;
}
