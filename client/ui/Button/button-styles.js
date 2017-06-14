import { css } from 'styled-components';
import { tint } from 'polished';

const buttonStyles = css`
  display: inline-block;
  vertical-align: middle;
  padding: 0.5em 1em;
  background: ${props => (props.primary ? props.theme.color.primary : props.theme.color.white)};
  color: ${props => (props.primary ? props.theme.color.white : props.theme.color.primary)};
  border: 2px solid ${props => props.theme.color.primary};
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  outline: 0;

  &:hover,
  &:focus {
    background: ${props => (props.primary ? tint(0.8, props.theme.color.primary) : props.theme.color.white)};
    color: ${props => (props.primary ? props.theme.color.white : tint(0.8, props.theme.color.primary))};
    border-color: ${props => tint(0.8, props.theme.color.primary)};
  }
`;

export default buttonStyles;
