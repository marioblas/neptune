import React from 'react';
import { Route } from 'react-router-dom';

export default function () {
  return [
    <Route exact path="/" component={() => <h1>Hello world!</h1>} />,
  ];
}
