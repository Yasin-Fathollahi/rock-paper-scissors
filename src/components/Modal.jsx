import { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import rules from '../assets/images/image-rules-bonus.svg';
export default function Modal({ isOpen, onSetIsOpen }) {
  const dialog = useRef();

  const closeModal = useCallback(
    function () {
      dialog.current.close();
      onSetIsOpen(false);
    },
    [onSetIsOpen]
  );

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
      onSetIsOpen(true);
    } else {
      closeModal();
    }
  }, [isOpen, onSetIsOpen, closeModal]);

  return createPortal(
    <dialog
      onClose={closeModal}
      ref={dialog}
      className={`max-w-screen max-h-screen w-full h-screen ${
        isOpen ? 'flex' : ''
      } items-center sm:w-2/3 lg:w-1/3 sm:h-fit sm:top-1/2 sm:left-1/2 sm:-translate-1/2 backdrop:bg-black/50 p-8 sm:rounded-lg`}
    >
      <img src={rules} alt="rules" className="w-full" />
      <button onClick={closeModal} className="absolute top-1/16 right-1/16 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#868e96"
          className="size-8 sm:size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </dialog>,
    document.getElementById('modal')
  );
}
