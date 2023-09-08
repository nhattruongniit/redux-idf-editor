import clsx from 'clsx';
import React, { memo } from 'react';

function FieldName({ classFields }) {
  return (
    <div>
      <div className='idfObject_header'>
        <div className='w-[50px] mr-2'>&nbsp;</div>
        <div className='w-[200px] mr-2'>Field Name</div>
        <div className='w-[100px] mr-2'>Units</div>
        <div className='w-[80px]'>IDD</div>
      </div>

      {classFields ? (
        <>
          {classFields?.fields.map((field, index) => (
            <div
              key={field.field_id}
              className={clsx(
                "idfObject_row border-l-[1px] border-r-[1px]",
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              )}
            >
              <div className=' w-[50px] text-center mr-2'>
                <span className='inline-block w-[10px]'>
                  {field?.options?.['required-field'] === '1' && (
                    <span className='text-[#f00]'>!</span>
                  )}
                </span>
                <span>{index + 1}</span>
              </div>
              <div className='w-[200px] mr-2'>{field.field_name}</div>
              <div className='w-[100px] mr-2 uppercase'>{field?.options?.units || 'N/A'}</div>
              <div className='w-[80px]'>{field.idd_name}</div>
            </div>
          ))}
        </>
      ) : (
        <div className='idfObject_row border-l-[1px] border-r-[1px]'>
          <div className='w-[50px] text-center mr-2'/>
          <div className='w-[200px] mr-2'>No data</div>
        </div>
      )}
    </div>
  )
}

export default memo(FieldName);