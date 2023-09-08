import clsx from 'clsx'
import React from 'react'

function FieldSelect({ defaultValue, options = [], className, ...props }) {
  return (
    <select 
      className={clsx(
        "border-0 border-b-[1px] text-gray-900 text-sm mx-2 p-2 dark:text-white",
        className
      )}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} defaultValue={defaultValue}>{option.label}</option>
      ))}
    </select>
  )
}

export default FieldSelect