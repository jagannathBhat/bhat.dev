import React from 'react'

import Post from './Post'
import { POSTS } from './constants'

const Blog = () => {
  return (
    <div className='bg-green-50 bg-opacity-40 py-20 text-center' id='blog'>
      <h1 className='alt-font font-bold text-5xl'>blog</h1>
      <p className='mb-14 mt-2 mx-4 text-gray-500 text-lg sm:mx-auto sm:w-2/3'>
        these are some blog posts i've written and posted on{' '}
        <a
          className='underline'
          href='https://jagannathbhat.medium.com/'
          rel='noreferrer'
          target='_blank'
        >
          medium
        </a>
        . they're about different experiences i've had and what i've learned
        from them. hope you enjoy reading them. if you do, give them some claps.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-5/6'>
        {POSTS.map((post, index) => (
          <Post key={index} data={post} />
        ))}
      </div>
    </div>
  )
}

export default Blog
