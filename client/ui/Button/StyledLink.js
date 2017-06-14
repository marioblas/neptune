/* eslint react/prop-types: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import StyledA from './StyledA';

/**
 * Temporary fix for `Warning: Unknown props...`
 * @see https://github.com/styled-components/styled-components/issues/135
 * @see https://github.com/styled-components/styled-components/issues/305
 * @see https://github.com/styled-components/styled-components/issues/439
 */
const LinkElement = ({ primary, ...rest }) => <Link {...rest} />;

const StyledLink = StyledA.withComponent(LinkElement);

export default StyledLink;
