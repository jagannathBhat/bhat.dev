import React from 'react'

import Link from '../Common/Link'

const ProjectModal = ({ project }) => {
  return (
    <div className='space-y-2'>
      <h2 className='alt-font font-bold text-2xl'>{project.name}</h2>
      <p className='text-gray-500'>{project.description}</p>
      <div className='space-x-1'>
        {project.topics.map((topic, index) => (
          <span
            key={index}
            className='bg-gray-300 inline-block my-1 px-2 py-1 rounded text-gray-700 text-xs'
          >
            {topic}
          </span>
        ))}
      </div>
      <div className='space-x-4'>
        {project.projectURL && (
          <Link className='text-lg' to={project.projectURL}>
            project
          </Link>
        )}
        {project.repoURL && (
          <Link className='text-lg' to={project.repoURL}>
            repo
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectModal
