import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function () {
  return [
    <Route exact path="/" component={() => <Redirect to="/home" />} />,
  ];
}
