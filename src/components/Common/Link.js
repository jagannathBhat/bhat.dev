import React from 'react'

const Link = ({ children, className, to }) => (
  <a
    className={`text-primary ${className}`}
    href={to}
    rel='noreferrer'
    target='_blank'
  >
    {children}
  </a>
)

export default Link
