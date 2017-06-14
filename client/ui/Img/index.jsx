import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ src, alt }) => (
  <img src={src} alt={alt} />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Img.defaultProps = {};

export default Img;
