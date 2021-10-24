import React from 'react'
import { SOCIALS } from '../constants'

const Footer = () => (
  <div className='flex items-center justify-between p-8'>
    <h1 className='alt-font font-bold mr-4 text-5xl text-green-500'>jb</h1>
    <div className='text-3xl'>
      {SOCIALS.map((social, index) => (
        <a key={index} href={social.link} rel='noreferrer' target='_blank'>
          <i className={`mx-3 ${social.icon}`}></i>
        </a>
      ))}
    </div>
  </div>
)

export default Footer
