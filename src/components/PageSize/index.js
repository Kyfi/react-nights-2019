import React from 'react'

import urls from '../../constants/urls'
import { PAGE_SIZE_DEFAULT, PAGE_SIZE_OPTIONS } from '../../constants/base'

const PageSize = ({ page, pageSize, recordCount, history }) => {
  const onPageSizeChange = evt => {
    history.push(`${urls.productList}?page=1&page_size=${evt.target.value}`)
  }

  return (
    <div>
      {`
        Product
            ${page === undefined ? '1' : ''}
            ${page !== undefined && page === '1' ? '1' : ''}
            ${
              page !== undefined && page !== false && page !== '1'
                ? (page - 1) * pageSize + 1
                : ''
            }
            to
            ${page === undefined ? pageSize : ''}
            ${page !== undefined && page === '1' ? pageSize : ''}
            ${
              page !== undefined && page !== false && page !== '1'
                ? recordCount > pageSize * page
                  ? pageSize * page
                  : recordCount
                : ''
            }
             of ${recordCount} `}
      <select
        onChange={onPageSizeChange}
        onBlur={onPageSizeChange}
        name="page_size"
      >
        {PAGE_SIZE_OPTIONS.map(item => (
          <option
            selected={PAGE_SIZE_DEFAULT}
            key={item.toString()}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
      {' per page'}
    </div>
  )
}

export default PageSize
