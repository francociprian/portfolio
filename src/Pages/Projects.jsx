import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ProjectComponent from '../components/ProjectComponent';
import { projects } from '../components/DataProjects';

const transition = { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.9] }

function Projects() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <AnimatePresence
      mode='wait'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <div 
          className='flex flex-col items-center' 
          // style={{minHeight: '13500px'}}
        >
          <div className='mt-[4.5rem] mb-24 max-w-6xl min-h-[13500px]'>
            {projects.map((project) => (
              <ProjectComponent 
                key={project.title}
                title={project.title} 
                details={project.details}
                description={project.description} 
                techStack={project.techStack} 
                github={project.github} 
                urlDeploy={project.urlDeploy}
                imageMain={project.imageMain}
                imageMain2={project.imageMain2}
                imageMain3={project.imageMain3}
                imageMobile1={project.imageMobile1}
                imageMobile2={project.imageMobile2}
                imageMobile3={project.imageMobile3}                        
              />
              ))
            }  
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Projects