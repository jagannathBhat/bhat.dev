import React, { useState } from 'react'

import { PROJECTS } from '../constants'

import Modal from './Modal'
import Project from './Project'
import ProjectMain from './ProjectMain'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='bg-green-50 bg-opacity-40 py-20 text-center' id='projects'>
      <h1 className='alt-font font-bold text-5xl'>projects</h1>
      <p className='mb-14 mt-2 mx-4 text-gray-500 text-lg sm:mx-auto sm:w-2/3'>
        these are some of the projects i've worked on
      </p>
      <div
        className='flex flex-col lowercase max-w-7xl mx-auto p-8 space-y-7 text-left
        lg:flex-row lg:space-x-7 lg:space-y-0'
      >
        <ProjectMain project={PROJECTS[0]} />
        <div className='space-y-4'>
          {PROJECTS.slice(1, 4).map((project, index) => (
            <Project key={index} project={project} />
          ))}
          <div>
            <button
              className='border-2 border-green-500 mt-8 px-2 py-1 text-green-500 text-md w-full
              transition duration-150 hover:bg-green-500 hover:text-white'
              onClick={() => setShowModal(true)}
            >
              show more projects
            </button>
          </div>
        </div>
      </div>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <div className='space-y-8 text-left'>
          {PROJECTS.map((project, index) => (
            <ProjectModal key={index} project={project} />
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default Projects
