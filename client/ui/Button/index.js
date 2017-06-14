import React from 'react';
import PropTypes from 'prop-types';
import StyledA from './styled-a';
import StyledButton from './styled-button';

/**
 * Renders a link if href is specified, otherwise renders a button
 */
const Button = (props) => {
  const Component = props.href ? StyledA : StyledButton;

  return (
    <Component {...props}>
      {props.children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: null,
};

export default Button;
