import * as React from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import urls from '../../constants/urls'

import { List, ListItem } from './styled'

const renderPaginationItem = number => (
  <ListItem key={number} to={`${urls.productList}?page=${number}`}>
    {number}
  </ListItem>
)

const Pagination = ({ pages }) => (
  <List>{map(renderPaginationItem, range(1, pages + 1))}</List>
)

export default Pagination
