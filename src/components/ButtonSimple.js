import React from 'react'
import clsx from 'clsx';

// type=  "danger" | "warning" | "info" | "success" | "ghost"
function ButtonSimple({ text, classNames, disabled, type = "info", ...props }) {
  return (
    <button 
      type="button" 
      disabled={disabled}
      className={clsx(
        "bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm p-2 dark:bg-blue-600 dark:hover:bg-blue-700 ",
        disabled && 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 cursor-not-allowed',
        type === 'warning' && 'text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-yellow-300 dark:focus:ring-yellow-800',
        type === 'info' && 'text-white bg-blue-600 hover:bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-800',
        type === 'success' && 'text-white bg-green-600 hover:bg-green-800 focus:ring-green-300 dark:focus:ring-green-800',
        type === 'danger' && 'text-white bg-red-600 hover:bg-red-800 focus:ring-red-300 dark:focus:ring-red-800',
        type === 'ghost' && 'bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 mr-2 text-black',
        classNames
      )}
      {...props}
    >
      {text} 
    </button>
  )
}

export default ButtonSimple