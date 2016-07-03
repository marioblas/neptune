import React from 'react';

const Footer = ({ currentYear }) => (
  <footer className="main-footer">
    Neptune &copy; {currentYear}
  </footer>
);

Footer.propTypes = {
  currentYear: React.PropTypes.number.isRequired,
};

export default Footer;
