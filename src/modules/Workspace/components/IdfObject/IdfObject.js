import React from 'react';
import { connect } from 'react-redux';

// components
import FieldName from './FieldName';
import IdfObjectItem from './IdfObjectItem';

// mock data
import { idfObjects } from '../../../../mockData/idfObjects';
import { classItem } from '../../../../mockData/classItem';

const mapStateToProp = (state) => {
  return {
    classesItem: state.idfClasses.classesItem,
  }
}

const IdfObject = ({ classesItem }) => {
  const [classFields, setClassFields] = React.useState(null);
  const [objectFields, setObjectFields] = React.useState(null);

  // getClass
  React.useEffect(() => {
    if(!classesItem) return;
    setClassFields(classItem.data);
    setObjectFields(idfObjects.data);
  }, [classesItem])

  return (
    <div className='flex overflow-auto h-[calc(100vh-120px)]'>
      <div className='fieldName_container sticky left-0 z-10'>
        <FieldName 
          classFields={classFields}
        />
      </div>

      <div className='fieldName_objectItem'>
        <IdfObjectItem 
          classFields={classFields}
          objectFields={objectFields}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProp)(IdfObject);