import styled, { css } from 'styled-components';
import { shade } from 'polished';

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.5em 1em;
  background: rgba(255, 255, 255, 0.5);
  color: ${props => props.theme.color.primary};
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${shade(0.85, '#fff')};
  }

  ${props => props.primary && css`
    background: ${props.theme.color.primary};
    color: ${props.theme.color.white};
    &:hover {
      background: ${shade(0.85, props.theme.color.primary)};
    }
  `}
`;

export default StyledButton;
