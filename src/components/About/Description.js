import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col items-start justify-around m-4 md:flex-row-reverse'>
      <div className='m-4 md:w-1/3'>
        <img
          alt='jagannath bhat'
          className='self-center w-full'
          src='about.jpg'
        />
      </div>
      <div className='max-w-lg mx-auto'>
        <span className='flex items-center mb-9 mt-24 text-green-500 welcome w-1/3 md:mt-48'>
          welcome
        </span>
        <h2 className='alt-font font-bold mb-6 text-7xl'>i'm jagannath bhat</h2>
        <h3 className='font-bold mb-6 text-2xl'>
          full-stack developer / teacher{' '}
        </h3>
        <p className='leading-10 mb-6 text-lg'>
          currently working as a software engineer{' '}
          <a href='https://bigbinary.com/' rel='noreferrer' target='_blank'>
            @bigbinary
          </a>
          . i love teaching and i am working on building online courses. join my
          discord to keep in touch.
        </p>
        <a
          href='https://discord.gg/PA5ZxAuSp3'
          rel='noreferrer'
          target='_blank'
        >
          <button
            className='border-2 border-green-500 mb-10 p-3 text-green-500 text-lg
            transition duration-150 hover:bg-green-500 hover:text-white'
          >
            join discord
          </button>
        </a>
      </div>
    </div>
  )
}

export default Description
