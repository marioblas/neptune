import React from 'react';
import RouteLayout from '/client/modules/core/components/route-layout';
import Home from './components/Home';

export default function () {
  return [
    <RouteLayout exact path="/home" component={Home} />,
  ];
}
