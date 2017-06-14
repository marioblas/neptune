// Export a set of utility functions, you can import them anywhere in your app
// including inside actions, components, and containers...

import ReactGA from 'react-ga';

class GoogleAnalytics {
  /**
   * Sends a pageview hit to Google Analytics and includes the path of the current page
   * @param {Object} context  - FlowRouter context
   * @see https://github.com/react-ga/react-ga
   * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference?hl=es-419
   */
  static pageView(context) {
    if (context.path) {
      const page = context.path;
      ReactGA.set({ page });
      ReactGA.pageview(page);
    }
  }
}

export default GoogleAnalytics;
