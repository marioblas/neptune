import React from 'react';
import Helmet from 'react-helmet';
import Heading from '/client/ui/Heading';

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Heading>Welcome to Neptune</Heading>
  </div>
);

export default Home;
