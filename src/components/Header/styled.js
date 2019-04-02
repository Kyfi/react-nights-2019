import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  overflow-x: auto;
`

export const Nav = styled.nav`
  background: white;
  display: flex;
`

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: ${theme.color.black};
  background-color: ${theme.color.white};
  padding: 20px;
  border-right: 1px solid lightgrey;
  white-space: nowrap;
`
