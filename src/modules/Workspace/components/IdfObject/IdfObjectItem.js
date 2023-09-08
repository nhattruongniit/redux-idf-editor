import React from 'react'
import clsx from 'clsx';


// components
// import FieldInput from '../../../../components/Fields/FieldInput';
// import FieldSelect from '../../../../components/Fields/FieldSelect';
import IdfObjectInput from '../../../../components/IdfObjectInput'; 
import FieldObjects from './FieldObjects';

// const data = [];
// const dataGroup = [];

// for(let i = 0; i < 50; i++) {
//   data.push({
//     id: i,
//     field: i % 2 === 0 ? 'input' : 'select'
//   })
// }

// for(let i = 0; i < 10; i++) {
//   dataGroup.push({
//     id: i,
//   })
// }


function IdfObjectItem({ classFields, objectFields }) {

  if(!objectFields) return <div className='ml-5'>No Data</div>;

  return (
    <div className='flex ml-5'>
      {objectFields.map((item, index) => (
        <div key={item.id} className='shrink-0 mr-2'>
          <FieldObjects 
            item={item}
            index={index}
          />

          {classFields?.fields.map((field) => (
            <div key={field.idd_name} className={clsx(
              "idfObject_row border-l-[1px] border-r-[1px]",
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            )}>

              <IdfObjectInput 
                field={field}
                fieldObject={item.fields[field.idd_name] || null}
                objectItem={item}
              />

            </div>
          ))}
        </div>
      ))}

      {/* {dataGroup.map((item, index) => {
        return (
          <div key={item.id} className='shrink-0 mr-2'>
            <div className='idfObject_header px-2'>
              <div className="flex items-center">
                <input id={item.id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor={item.id} className="ml-2 text-sm text-gray-900 dark:text-gray-300">Object {index + 1} (#408)</label>
              </div>
            </div>
            
            {data.map((item, index) => (
              <div key={item.id} className={clsx(
                "idfObject_row border-l-[1px] border-r-[1px]",
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              )}>
      
                {item.field === 'input' && (
                  <FieldInput />
                )}
      
                {item.field === 'select' && (
                  <FieldSelect 
                    defaultValue='option-1'
                    options={[
                      { label: 'Option 1', value: 'option-1' },
                      { label: 'Option 2', value: 'option-2' },
                    ]}
                    className="w-full"
                  />
                )}
              
              </div>
            ))}
          </div>
        )
      })} */}
    </div>
  )
}

export default IdfObjectItem;