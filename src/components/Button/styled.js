import styled, { css } from 'styled-components'
import theme from '../../common/theme'

export const Button = styled.button`
  background: ${theme.color.red};
  padding: 1rem;
  margin-top: 0.5rem;
  border: 1px solid ${theme.color.red};
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
  cursor: pointer;
  transition: all 0.3s;

  ${props =>
    props.default &&
    css`
      background: transparent;
      color: ${theme.color.red};

      :hover {
        background: ${theme.color.red};
        color: ${theme.color.white};
      }
    `};

  &:focus {
    outline: none;
  }

  &:hover {
    background: transparent;
    color: ${theme.color.red};
  }
`
