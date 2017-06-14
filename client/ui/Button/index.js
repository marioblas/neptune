import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';
import StyledA from './StyledA';
import StyledButton from './StyledButton';

/**
 * Renders a Link if `to` is specified.
 * Renders an A if `href` is specified.
 * Otherwise renders a Button.
 */
const Button = ({ to, href, type, ...rest }) => {
  if (to) {
    return <StyledLink to={to} {...rest} />;
  }
  if (href) {
    return <StyledA href={href} {...rest} />;
  }
  return <StyledButton type={type} {...rest} />;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  href: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  to: null,
  href: null,
  type: 'button',
};

export default Button;
