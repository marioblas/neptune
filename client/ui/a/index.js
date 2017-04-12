import styled from 'styled-components';
import { tint } from 'polished';

const A = styled.a`
  color: ${props => props.theme.color.alternate};
  text-decoration: none;

  &:hover {
    color: ${props => tint(0.8, props.theme.color.alternate)};
  }
`;

export default A;
