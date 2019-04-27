import * as React from 'react'
import range from 'ramda/src/range'
import map from 'ramda/src/map'
import urls from '../../constants/urls'

import { Container, List, ListItem } from './styled'
import PageSize from '../PageSize'

const renderPaginationItem = (pageSize, page) => number => {
  const currentPage = number === parseInt(page, 10)

  return (
    <ListItem
      key={number}
      to={`${urls.productList}?page=${number}&page_size=${pageSize}`}
      active={currentPage}
    >
      {number}
    </ListItem>
  )
}

const Pagination = ({ pages, page, pageSize, recordCount, history }) => (
  <Container>
    <PageSize
      history={history}
      page={page}
      pageSize={pageSize}
      recordCount={recordCount}
    />
    <List>
      {console.log(pages)}
      {map(renderPaginationItem(pageSize, page), range(1, pages + 1))}
    </List>
  </Container>
)

export { Pagination }
