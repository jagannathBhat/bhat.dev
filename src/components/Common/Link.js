import React from 'react'

const Link = ({ children, className, to }) => (
  <a
    className={'text-green-500 ' + className}
    href={to}
    rel='noreferrer'
    target='_blank'
  >
    {children}
  </a>
)

export default Link
