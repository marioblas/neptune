import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '/client/ui/Link';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Footer = ({ currentYear }) => (
  <StyledFooter>
    <div>Neptune &copy; {currentYear}</div>
    <div>
      built with <span role="img" aria-label="keyboard">⌨️</span> by&nbsp;
      <Link href="https://github.com/marioblas">@marioblas</Link>
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  currentYear: PropTypes.number.isRequired,
};

export default Footer;
