import React, { PropTypes } from 'react';

const Footer = ({ currentYear }) => (
  <footer className="main-footer">
    Neptune &copy; {currentYear}
  </footer>
);

Footer.propTypes = {
  currentYear: PropTypes.number.isRequired,
};

export default Footer;
