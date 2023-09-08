import React from 'react';
import { connect, useDispatch } from 'react-redux';

// redux
import * as idfClassesAction from '../../../../redux/idfClasses.action';

const mapStateToProps = state => {
  return {
    selectedObjects: state.idfClasses.selectedObjects,
  }
}

function FieldObjects({ item, index, selectedObjects }) {
  const dispatch = useDispatch();

  function handleSelectObject(checked, idfObjectItem) {
    dispatch(idfClassesAction.selectedObjects(checked, idfObjectItem));
  }

  return (
    <div className='idfObject_header px-2'>
      <div className="flex items-center">
        <input 
          id={item.id} 
          type="checkbox" 
          checked={selectedObjects.some(obj => obj.id === item.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" 
          onChange={e => handleSelectObject(e.target.checked, item)}
        />
        <label htmlFor={item.id} className="ml-2 text-sm text-gray-900 dark:text-gray-300 cursor-pointer">
          Object {index + 1} (#{item.id})
        </label>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(FieldObjects);