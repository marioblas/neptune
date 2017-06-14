import React from 'react';
import Helmet from 'react-helmet';
import H1 from '/client/ui/H1';

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <H1>Welcome to Neptune</H1>
  </div>
);

export default Home;
