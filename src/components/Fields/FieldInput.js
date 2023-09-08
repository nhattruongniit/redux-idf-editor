import React from 'react'

function FieldInput({ ...props }) {
  return (
    <input 
      type="text"  
      className="border-0 border-b-[1px] text-gray-900 text-sm w-full mx-2 p-2 dark:text-white" 
      {...props} 
    />
  )
}

export default FieldInput