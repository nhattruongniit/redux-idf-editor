import React from 'react'
import { createPortal } from 'react-dom';
import clsx from 'clsx'

// components
import IconSimple from '../IconSimple';

function HalfScreenModal({ 
  isOpen,
  children,
  onClose
}) {
  return (
    <>
      {createPortal(
        <div className={clsx(
          "halfScreenModal-root",
          isOpen && 'halfScreenModal-root--open'
        )}>
          <div className='halfScreenModal-overlay' onClick={onClose} />
          <div className='halfScreenModal-content'>
            <div className='flex justify-end mb-2'>
              <IconSimple icon="ic:outline-close" width={25} onClick={onClose} />
            </div>

            {children}

          </div>
        </div>,
        document.body
      )}
    </> 
  )
}

export default HalfScreenModal