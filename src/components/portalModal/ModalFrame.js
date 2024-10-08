// ModalFrame.tsx

import React from 'react';
import PortalModal from './PortalModal';
import { twMerge } from 'tailwind-merge';

const ModalFrame = ({
  children,
  setOnModal,
  onClose,
  isDim,
  zindex,
  dimClick,
  onClick,
  className,
}) => {
  return (
    <PortalModal>
      <div className='fixed top-0 left-0 w-full h-full' onClick={onClick}>
        <div
          className={twMerge(
            'rounded-lg absolute top-0 bottom-0 left-0 right-0 px-20 py-20 m-auto bg-white min-w-400 min-h-200 w-fit h-fit pb-30 rounded-12',
            className
          )}
        >
          <div className='flex flex-col items-stretch w-full font-semibold'>
            {children}
            {onClose && (
              <div
                className='absolute inline-flex cursor-pointer top-5 right-5'
                onClick={() => setOnModal(false)}
              >
                닫기
              </div>
            )}
          </div>
        </div>
        {isDim && (
          <div
            className='w-full h-full bg-dim'
            onClick={() => dimClick && setOnModal(false)}
          ></div>
        )}
      </div>
    </PortalModal>
  );
};

export default ModalFrame;
