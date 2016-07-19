import React from 'react';
import DocHead from './dochead';
import Header from './header';
import Footer from '../containers/footer';

const Layout = ({ content = () => null }) => (
  <div className="app-container">
    <DocHead />
    <Header />
    <div className="main-content">
      {content()}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  content: React.PropTypes.func,
};

export default Layout;
