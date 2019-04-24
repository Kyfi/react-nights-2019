import * as React from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import urls from '../../constants/urls'

import { List, ListItem } from './styled'

const renderPaginationItem = pageSize => number => (
  <ListItem
    key={number}
    to={`${urls.productList}?page=${number}&page_size=${pageSize}`}
  >
    {number}
  </ListItem>
)

const Pagination = ({ pages, pageSize }) => (
  <List>{map(renderPaginationItem(pageSize), range(1, pages + 1))}</List>
)

export default Pagination
