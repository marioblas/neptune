import React from 'react';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';

const NotFound = () => (
  <div className="not-found">
    <Helmet title="Not found" />
    <H1>Page not found</H1>
  </div>
);

export default NotFound;
