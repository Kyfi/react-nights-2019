import { Link as BaseLink } from 'react-router-dom'

import styled from 'styled-components'
import theme from '../../common/theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1;
  padding: 0 2rem;
  height: 58px;
  box-shadow: ${theme.shadow.basic};
`

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListItem = styled(BaseLink)`
  background: ${theme.color.purple};
  padding: 10px 15px;
  border: 1px solid white;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  text-decoration: none;
  margin: 2px;
`
