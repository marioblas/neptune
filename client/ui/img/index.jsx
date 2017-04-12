import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Img.defaultProps = {
  className: '',
};

export default Img;
