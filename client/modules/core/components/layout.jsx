import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '/client/configs/theme';
import App from './app';
import DocHead from './dochead';
import Header from './header';
import MainContent from './main-content';
import Footer from '../containers/footer';

const Layout = ({ content }) => (
  <ThemeProvider theme={theme}>
    <App>
      <DocHead />
      <Header />
      <MainContent>
        {content()}
      </MainContent>
      <Footer />
    </App>
  </ThemeProvider>
);

Layout.propTypes = {
  content: PropTypes.func,
};

Layout.defaultProps = {
  content: () => null,
};

export default Layout;
