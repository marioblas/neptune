import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import DocHead from './DocHead';
import Header from './Header';
import MainContent from './MainContent';
import Footer from '../containers/Footer';

const Layout = ({ children }) => (
  <App>
    <DocHead />
    <Header />
    <MainContent>
      {children}
    </MainContent>
    <Footer />
  </App>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {};

export default Layout;
