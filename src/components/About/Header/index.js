import React, { useState } from 'react'
import { LINKS } from '../constants'
import { SOCIALS } from '../../constants'
import MobileNav from './MobileNav'

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between px-4 py-6'>
        <div className='flex items-center'>
          <h1 className='alt-font font-bold mr-4 text-5xl text-green-500'>
            jb
          </h1>
          {LINKS.map((link, index) => (
            <a key={index} className='hidden mx-2 md:inline' href={`#${link}`}>
              {link}
            </a>
          ))}
        </div>
        <div className='hidden items-center text-2xl text-gray-100 md:flex'>
          {SOCIALS.map((social, index) => (
            <a key={index} href={social.link} rel='noreferrer' target='_blank'>
              <i className={`mx-2 ${social.icon}`}></i>
            </a>
          ))}
        </div>
        <button
          className='block rounded-full px-3 py-2 text-2xl focus:bg-gray-500 focus:bg-opacity-50 md:hidden'
          onClick={() => setShowNav(true)}
        >
          <i className='ri-menu-line'></i>
        </button>
      </div>
      {showNav && <MobileNav setShowNav={setShowNav} />}
    </>
  )
}

export default Header
