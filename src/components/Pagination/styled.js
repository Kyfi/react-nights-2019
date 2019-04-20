import { Link as BaseLink } from 'react-router-dom'

import styled from 'styled-components'
import theme from '../../common/theme'

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
