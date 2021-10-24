import React from 'react'

import Description from './Description'
import Header from './Header/index'

const About = () => {
  return (
    <div className='about-section'>
      <div className='max-w-7xl mx-auto'>
        <Header />
        <Description />
      </div>
    </div>
  )
}

export default About
