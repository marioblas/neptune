import React from 'react';
import PropTypes from 'prop-types';
import App from './app';
import DocHead from './dochead';
import Header from './header';
import MainContent from './main-content';
import Footer from '../containers/footer';

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
