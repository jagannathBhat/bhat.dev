import React from 'react'

import SubscriptionForm from './SubscriptionForm'

const index = () => {
  return (
    <div className='my-20 p-4 text-center w-full' id='courses'>
      <h1 className='alt-font font-bold mb-10 text-5xl'>courses</h1>
      <div className='flex justify-center'>
        <div className='flex flex-col shadow-lg lg:flex-row lg:h-80'>
          <img
            alt='git, gitlab, and github course for beginners or undergraduates'
            src='/courses-git.png'
          />
          <div className='p-4 text-gray-600 md:text-left'>
            <p className='mb-8 text-lg md:mb-2'>
              i'm building the course and will publish it soon.
            </p>
            <div className='mb-8 md:mb-2'>
              <p className='mb-4 text-lg'>
                so gimme your email address and i'll notify you when it's
                published.
              </p>
              <SubscriptionForm />
            </div>
            <div className='flex-1 p-2'>
              <p className='mb-4 text-gray-600 text-lg'>
                or join my discord and i'll send a message when it's published.
              </p>
              <a
                href='https://discord.gg/PA5ZxAuSp3'
                rel='noreferrer'
                target='_blank'
              >
                <button className='button bg-green-500 flex mx-auto p-2 text-white md:mx-0'>
                  <i className='ri-discord-fill mr-2'></i> join discord
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
