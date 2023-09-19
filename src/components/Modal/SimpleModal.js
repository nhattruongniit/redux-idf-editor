import React from 'react'
import { createPortal } from 'react-dom';
import clsx from 'clsx'

// components
import IconSimple from '../IconSimple'
import ButtonSimple from '../ButtonSimple';

function ConfirmModal({ 
  isOpen,
  icon,
  children,
  type="danger", // "danger" | "warning" | "info" | "success
  okText = 'Yes, I\'m sure', 
  cancelText = 'No, cancel',
  hideButtonCancel = false,
  onOk, 
  onClose, 
}) {
  return (
    <>
      {createPortal(
        <div className={clsx(
          "items-center justify-center fixed top-0 left-0 z-50 overflow-x-hidden overflow-y-auto md:inset-0 w-full h-full max-h-full",
          isOpen ? 'flex' : 'hidden',
        )}>
          <div className="modal_blur" onClick={onClose} />
          <div className="relative w-full max-w-md max-h-full z-20">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button 
                type="button" 
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <IconSimple icon={icon} width={20} />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-right">

                {icon && (
                  <div className='flex justify-center mb-2'>
                    <IconSimple icon="ic:outline-info" width={50} />
                  </div>
                )}
                
                {/* content */}
                {children}
                
                {/* buttton bottom */}
                {!hideButtonCancel && (
                   <ButtonSimple
                    text={cancelText}
                    type="ghost"
                    onClick={onClose}
                  />
                )}
                
                {onOk && (
                  <ButtonSimple
                    text={okText}
                    type={type}
                    onClick={onOk}
                  />
                )}
                
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </> 
  )
}

export default ConfirmModal