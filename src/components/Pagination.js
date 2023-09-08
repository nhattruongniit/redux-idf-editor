import React from 'react';

// components
import FieldSelect from './Fields/FieldSelect';

const defaultOptions = [
  {label: 10, value: 10 },
  {label: 25, value: 25 },
  {label: 50, value: 50 },
]

function Pagination({ 
  rowsPerPageOptions = defaultOptions,
  count,
  page,
  rowsPerPage = 10, 
  onPageChange,
  onRowsPerPageChange
}) {
  const [_page, setPage] = React.useState(page);
  const [_rowsPerPage, setRowsPerPage] = React.useState(rowsPerPage);

  function _onNextPage() {
    onPageChange && onPageChange(_page + 1);
    setPage(prevState => prevState + 1);
  }

  function _onPrevPage() {
    if(_page === 1) return;
    onPageChange && onPageChange(_page - 1);
    setPage(prevState => prevState - 1);
  }

  function _onRowsPerPageChange(e) {
    setRowsPerPage(e.target.value);
    onRowsPerPageChange && onRowsPerPageChange(e.target.value);
  }

  return (
    <div className='flex justify-between items-center border-[1px] px-2 py-1'>
      <div className='flex items-center'>
        <span className='shrink-0'>Items per page: </span>
        <FieldSelect 
          value={_rowsPerPage}
          options={rowsPerPageOptions}
          onChange={_onRowsPerPageChange}
          className="w-[80px]"
        />
        <div>
          1 - 10 of {count} items
        </div>
      </div>

      <div className="flex items-center">
        <div 
          className="flex items-center justify-center px-3 h-8 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          onClick={_onPrevPage}
        >
          <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
          </svg>
          Previous
        </div>
        <div>
          1 of 4 pages
        </div>
        <div 
          className="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          onClick={_onNextPage}
        >
          Next
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Pagination