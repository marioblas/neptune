import React from 'react';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';

const Home = () => (
  <div className="home">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <H1>Welcome to Neptune</H1>
  </div>
);

export default Home;
