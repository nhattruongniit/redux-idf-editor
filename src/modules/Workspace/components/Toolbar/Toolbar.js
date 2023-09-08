import React from 'react';
import { connect } from 'react-redux';

// components
import IconSimple from '../../../../components/IconSimple';
import ButtonSimple from '../../../../components/ButtonSimple';
import SimpleModal from '../../../../components/Modal/SimpleModal';

// redux
import { resetSelectedObjects } from '../../../../redux/idfClasses.action';

const mapStateToProps = state => {
  return {
    documentId: state.document.documentId,
    classesItem: state.idfClasses.classesItem,
    selectedObjects: state.idfClasses.selectedObjects,
  }
}

const mapDispatchToProps = dispatch => ({
  resetSelectedOjects: () => dispatch(resetSelectedObjects()),
})

const Toolbar = ({ documentId, classesItem, selectedObjects, resetSelectedOjects }) => {
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  function handleDelete() {
    setIsOpenModal(true);
  }

  function handleOk() {
    setIsOpenModal(false);
  }

  function handleCancel() {
    resetSelectedOjects();
  }

  async function handleAddNewObject() {
    console.log('handleAddNewObject: ', {
      documentId,
      classesItem,
    })
  }

  return (
    <>
      {/* show action  */}
      {selectedObjects.length > 0 ? (
        <div className='w-full flex items-center justify-between bg-blue-700 py-4 px-6'>
          <div className='flex'>
            <div className='flex text-white cursor-pointer'>
              Duplicate
              <IconSimple icon="heroicons:document-duplicate" className="text-white" />
            </div>
            <div className='flex text-white cursor-pointer px-4'>
              Export
              <IconSimple icon="carbon:export" className="text-white" />
            </div>
            <div className='flex text-white cursor-pointer' onClick={handleDelete}>
              Delete
              <IconSimple icon="ic:outline-delete" className="text-white" />
            </div>
          </div>

          <div className='flex'>
            <div className='text-white pr-4'>
              {selectedObjects.length} {' '}
              item{selectedObjects.length > 1 && 's'}  {' '}
              selected
              </div>
            <div className='text-white cursor-pointer' onClick={handleCancel}>Cancel</div>
          </div>
        </div>
      ) : (
        <div className='w-full flex items-center justify-between'>
          <form className="flex items-center mr-4">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IconSimple icon="ic:baseline-search" />
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
            </div>
            {/* <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <IconSimple icon="ic:baseline-search" className="text-[#fff]" />
              <span className="sr-only">Search</span>
            </button> */}
          </form>

          <div className='flex items-center shrink-0'>
            <IconSimple icon="uil:setting" width={24}  />
            <ButtonSimple 
              text="Add new" 
              classNames="ml-2" 
              onClick={handleAddNewObject}
            />
          </div>
        </div>
      )}
      
      {/* open modal */}
      <SimpleModal 
        type="danger"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onOk={handleOk}
      >
        <div className='text-left'>
          <div className="mb-5 text-[20px] font-normal text-gray-500 dark:text-gray-400">Are you sure?</div>
          <div>Selected objects will be permanently deleted from your project.</div>
          <br />
        </div>
      </SimpleModal>
      
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
