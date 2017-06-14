import StyledButton from './StyledButton';

const StyledA = StyledButton.withComponent('a').extend`
  text-decoration: none;
`;

export default StyledA;
