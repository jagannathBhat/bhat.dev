import React, { useState } from 'react'

const links = ['about', 'courses', 'projects', 'blog']
const socials = [
  {
    icon: 'ri-discord-line',
    link: 'https://discord.gg/PA5ZxAuSp3',
  },
  {
    icon: 'ri-linkedin-box-line',
    link: 'https://www.linkedin.com/in/jagannathbhatjb/',
  },
  {
    icon: 'ri-github-line',
    link: 'https://github.com/jagannathBhat',
  },
  {
    icon: 'ri-gitlab-line',
    link: 'https://gitlab.com/jagannathBhat',
  },
]

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <div className='flex items-center justify-between px-4 py-6'>
        <div className='flex items-center'>
          <h1 className='alt-font font-bold mr-4 text-5xl text-green-500'>
            jb
          </h1>
          {links.map((link, index) => (
            <a
              key={index}
              className={
                index === 0
                  ? 'hidden mx-2 text-green-500 md:inline'
                  : 'hidden mx-2 md:inline'
              }
              href={`#${link}`}
            >
              {link}
            </a>
          ))}
        </div>
        <div className='hidden items-center text-2xl text-gray-100 md:flex'>
          {socials.map((social, index) => (
            <a key={index} href={social.link} rel='noreferrer' target='_blank'>
              <i className={`mx-2 ${social.icon}`}></i>
            </a>
          ))}
        </div>
        <button
          className='block rounded-full px-3 py-2 text-2xl
        focus:bg-gray-500 focus:bg-opacity-50 md:hidden'
          onClick={() => setShowNav(true)}
        >
          <i className='ri-menu-line'></i>
        </button>
      </div>
      {showNav && <MobileNav setShowNav={setShowNav} />}
    </>
  )
}

const MobileNav = ({ setShowNav }) => {
  return (
    <div className='bg-white fixed flex flex-col h-full items-center justify-center left-0 top-0 w-full'>
      <button
        className='block fixed m-4 right-0 rounded-full px-3 py-2 text-2xl top-0
        focus:bg-gray-500 focus:bg-opacity-50 md:hidden'
        onClick={() => setShowNav(false)}
      >
        <i className='ri-close-line'></i>
      </button>
      {links.map((link, index) => (
        <a
          key={index}
          className={index === 0 ? 'm-3 text-green-500 text-xl' : 'm-3 text-xl'}
          href={`#${link}`}
        >
          {link}
        </a>
      ))}
      <div className='mt-3 text-xl'>
        {socials.map((social, index) => (
          <a key={index} href={social.link} rel='noreferrer' target='_blank'>
            <i className={`mx-3 ${social.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Header
