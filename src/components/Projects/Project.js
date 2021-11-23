import React from 'react'

import Link from '../Common/Link'

const Project = ({ project }) => {
  return (
    <div className='flex-1'>
      <div className='flex items-center justify-between space-y-4'>
        <h2 className='alt-font font-bold text-2xl'>{project.name}</h2>
        <div className='space-x-4'>
          {project.projectURL && (
            <Link className='text-sm' to={project.projectURL}>
              project
            </Link>
          )}
          {project.repoURL && (
            <Link className='text-sm' to={project.repoURL}>
              repo
            </Link>
          )}
        </div>
      </div>
      <p className='text-gray-500'>{project.description}</p>
    </div>
  )
}

export default Project
