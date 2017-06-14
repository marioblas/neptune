import React from 'react';
import Helmet from 'react-helmet';

const DocHead = () => (
  <Helmet
    defaultTitle="Neptune"
    titleTemplate="%s | Neptune"
  >
    <html lang="en" />
    <meta name="description" content="A Neptune application" />
    {/* Color the status bar on mobile devices (you can use any valid CSS color) */}
    <meta name="theme-color" content="" />
  </Helmet>
);

export default DocHead;
