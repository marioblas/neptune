import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from '/client/ui/a';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Footer = ({ currentYear }) => (
  <StyledFooter>
    <div>Neptune &copy; {currentYear}</div>
    <div>built with ⌨️ by <A href="https://github.com/marioblas" target="_blank" rel="noopener noreferrer">@marioblas</A></div>
  </StyledFooter>
);

Footer.propTypes = {
  currentYear: PropTypes.number.isRequired,
};

export default Footer;
