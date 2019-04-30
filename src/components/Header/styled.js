import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import theme from '../../common/theme'

export const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`

export const Nav = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  box-shadow: ${theme.shadow.basic};
`

export const NavLeft = styled.div`
  display: flex;
`

export const NavRight = styled.div`
  display: flex;
`

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: ${theme.color.black};
  background-color: ${theme.color.white};
  padding: 20px;
  border: 0;
  border-right: 1px solid lightgrey;
  white-space: nowrap;
  font-weight: 300;

  &:hover {
    color: ${theme.color.purple};
  }
`
