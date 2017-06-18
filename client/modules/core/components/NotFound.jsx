import React from 'react';
import Helmet from 'react-helmet';
import Heading from '/client/ui/Heading';

const NotFound = () => (
  <div>
    <Helmet>
      <title>Not found</title>
    </Helmet>
    <Heading>Page not found</Heading>
  </div>
);

export default NotFound;
