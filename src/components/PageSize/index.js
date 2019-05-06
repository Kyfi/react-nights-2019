import React from 'react'

import urls from '../../constants/urls'
import { PAGE_SIZE_OPTIONS } from '../../constants/base'

const PageSize = ({ page, pageSize, recordCount, onSizeChange, value }) => {
  const handleChange = event => {
    const newValue = event.target.value

    if (newValue !== value) {
      onSizeChange(newValue)
    }
  }

  const from = page === 1 ? 1 : (page - 1) * pageSize + 1
  const isPageSizeBiggerThanCountOfRecords =
    pageSize * page > recordCount ? recordCount : pageSize * page
  const to = page === 1 ? pageSize : isPageSizeBiggerThanCountOfRecords

  return (
    <div>
      {`Product ${from} to ${to} of ${recordCount} `}
      <select
        onChange={handleChange}
        onBlur={handleChange}
        defaultValue={pageSize}
        value={value}
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
