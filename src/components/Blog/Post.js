import React from 'react'

const Post = ({ data }) => {
  return (
    <div className='cursor-default text-left'>
      <div
        className='bg-cover bg-center h-64 w-full'
        style={{ backgroundImage: `url('${data.image}')` }}
      ></div>
      <h3 className='alt-font font-semibold text-3xl'>{data.name}</h3>
      <p className='mb-4 text-gray-400'>{data.date}</p>
      <a
        className='text-green-500 text-xl'
        href={data.url}
        rel='noreferrer'
        target='_blank'
      >
        read post
      </a>
    </div>
  )
}

export default Post
