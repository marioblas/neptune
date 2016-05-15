import React from 'react';

import Header from './header.jsx';
import Footer from '../containers/footer.jsx';

const Layout = ({ content = () => null }) => (
  <div className="app-container">
    <Header />
    <div className="main-content">
      {content()}
    </div>
    <Footer />
  </div>
);

export default Layout;
