import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;

const Img = ({ src, alt, ...rest }) => (
  <StyledImg src={src} alt={alt} {...rest} />
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Img.defaultProps = {};

export default Img;
