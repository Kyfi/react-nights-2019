import React from 'react'

import urls from '../../constants/urls'
import { PAGE_SIZE_OPTIONS } from '../../constants/base'

const PageSize = ({ page, pageSize, recordCount, history }) => {
  const onPageSizeChange = evt => {
    history.push(`${urls.productList}?page=1&page_size=${evt.target.value}`)
  }

  const from = page === 1 ? 1 : (page - 1) * pageSize + 1
  const isPageSizeBiggerThanCountOfRecords =
    pageSize * page > recordCount ? recordCount : pageSize * page
  const to = page === 1 ? pageSize : isPageSizeBiggerThanCountOfRecords

  return (
    <div>
      {`Product ${from} to ${to} of ${recordCount} `}
      <select
        onChange={onPageSizeChange}
        onBlur={onPageSizeChange}
        defaultValue={pageSize}
      >
        {PAGE_SIZE_OPTIONS.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      {' per page'}
    </div>
  )
}

export default PageSize
