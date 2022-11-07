import React from 'react'
import _ from 'lodash'

interface PaginationProps {
  itemsCount: number
  pageSize: number
  onPageChange: any
  currentPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)

  return (
    <div className='mb-4'>
      {pages.map((page, index) => (
        <button
          key={index}
          className={
            'btn btn-outline-dark' + (page === currentPage ? ' active' : '')
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
