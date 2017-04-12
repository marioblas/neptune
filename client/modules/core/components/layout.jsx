import React from 'react';
import PropTypes from 'prop-types';
import App from './app';
import DocHead from './dochead';
import Header from './header';
import MainContent from './main-content';
import Footer from '../containers/footer';

const Layout = ({ content }) => (
  <App>
    <DocHead />
    <Header />
    <MainContent>
      {content()}
    </MainContent>
    <Footer />
  </App>
);

Layout.propTypes = {
  content: PropTypes.func,
};

Layout.defaultProps = {
  content: () => null,
};

export default Layout;
