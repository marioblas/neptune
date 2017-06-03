import React from 'react';
import RouteLayout from '/client/modules/core/components/route-layout';
import Home from './components/home';
// import Secrets from './components/secrets';

export default function () {
  return [
    <RouteLayout exact path="/home" component={Home} />,
    // <RouteLayout exact path="/secrets" component={Secrets} />,
  ];
}
