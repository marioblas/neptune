import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from './StyledLink';
import StyledA from './StyledA';

const Link = ({ to, href, ...rest }) => (
  to
    ? <StyledLink to={to} {...rest} />
    : <StyledA href={href} target="_blank" rel="noopener noreferrer" {...rest} />
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  href: PropTypes.string,
};

Link.defaultProps = {
  to: null,
  href: null,
};

export default Link;
