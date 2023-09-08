import React from 'react'

// components
// import ThemeMode from '../../components/ThemeMode';
import { IdfObject } from './components/IdfObject';
import { Toolbar } from './components/Toolbar';
// import Pagination from '../../components/Pagination';
// import SimpleModal from '../../components/Modal/SimpleModal';

function Workspace() {

  return (
    <div className='workSpace_container overflow-x-auto grow pr-2'>
      <div className='flex items-center justify-between mb-2 h-[45px]'>
        <div className='text-lg font-medium dark:text-[#fff]'>Simulator</div>

        {/* <ThemeMode /> */}
      </div>

      <div className='mb-4'>
        <Toolbar />
      </div>

      <IdfObject />

      {/* <div className='mt-2'>
        <Pagination 
          rowsPerPageOptions={[
            {label: 10, value: 10 },
            {label: 25, value: 25 },
            {label: 50, value: 50 },
          ]}
          count={100}
          rowsPerPage={10}
          page={1}
          onRowsPerPageChange={(value) => console.log('onRowsPerPageChange: ', value)}
          onPageChange={(value) => console.log('onPageChange: ', value)}
        />
      </div> */}

      {/* open modal */}
      {/* <SimpleModal 
        isOpen
        icon="ic:outline-info"
        onClose={() => console.log('close')}
        onOk={() => console.log('ok')}
      >
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure?</h3>
      </SimpleModal> */}

    </div>
  )
}

export default Workspace