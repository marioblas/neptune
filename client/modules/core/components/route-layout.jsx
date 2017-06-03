import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Layout from './layout';

const RouteLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (<Layout><Component {...props} /></Layout>)}
  />
);

RouteLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

RouteLayout.defaultProps = {};

export default RouteLayout;
