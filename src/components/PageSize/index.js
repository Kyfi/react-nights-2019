import React from 'react'

import urls from '../../constants/urls'

const PageSize = ({ page, pageSize, recordCount, history }) => {
  const pageSizes = [25, 50, 75, 100]

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
        {pageSizes.map(item => (
          <option key={item.toString()} value={item}>
            {item}
          </option>
        ))}
      </select>
      {' per page'}
    </div>
  )
}

export default PageSize
