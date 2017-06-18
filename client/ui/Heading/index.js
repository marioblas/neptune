import React from 'react';
import PropTypes from 'prop-types';
import H1 from './StyledH1';
import H2 from './StyledH2';
import H3 from './StyledH3';

const levels = { 1: H1, 2: H2, 3: H3 };

const Heading = ({ level, tag, ...rest }) => {
  const Component = tag
    ? levels[level].withComponent(tag)
    : levels[level];

  return <Component {...rest} />;
};

Heading.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3']),
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
  level: '1',
  tag: null,
};

export default Heading;
