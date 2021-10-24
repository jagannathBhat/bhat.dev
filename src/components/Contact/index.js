import React from 'react'

const Contact = () => {
  return (
    <div className='bg-green-500 flex flex-col h-96 items-center justify-center p-4 text-center'>
      <p className='alt-font mb-10 text-4xl text-white'>
        if you'd like to stay in touch with me, get updates
        <br />
        when i post new blogs or videos, or just have a chat
      </p>
      <button
        className='button border-2 border-white flex font-bold mx-auto px-4 py-2 text-lg text-white 
        transition duration-200 hover:bg-white hover:text-green-500'
      >
        join my discord
      </button>
    </div>
  )
}

export default Contact
