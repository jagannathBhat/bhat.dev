import React, { useRef } from 'react'

const Modal = ({ children, onClose, show }) => {
  const modalElem = useRef(null)

  const handleClick = e => (e.target === modalElem.current ? onClose() : null)

  if (!show) return <></>

  return (
    <div
      className='backdrop-filter backdrop-blur bg-black bg-opacity-60 flex fixed
      h-screen items-center justify-center left-0 top-0 w-full'
      onClick={handleClick}
      ref={modalElem}
    >
      <div className='bg-white m-2 h-5/6 max-w-2xl overflow-y-scroll p-4 w-full'>
        <p className='text-right text-xl'>
          <button onClick={onClose}>
            <i className='ri-close-line'></i>
          </button>
        </p>
        <h1 className='alt-font font-bold mb-6 text-5xl'>projects</h1>
        {children}
      </div>
    </div>
  )
}

export default Modal
