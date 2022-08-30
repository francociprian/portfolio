import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight} from "react-icons/bs";
 

const Proyectos = [
  {
    title: "9Points",
    mediaUrl: 'https://i.postimg.cc/CMQd2P12/9points.webp',
    urlDeploy: 'https://9points.netlify.app/',
    details: 'mb-48'
  },
  {
    title: "SocialTree",
    mediaUrl: 'https://i.postimg.cc/fymLmZN0/social-Tree.png',
    urlDeploy: 'https://socialtreee.vercel.app',
    details : 'details'
  },
  {
    title: "Untraceable",
    mediaUrl: 'https://i.postimg.cc/VNC3YNBM/untraceable.webp',
    urlDeploy: 'https://untraceable.netlify.app/',
    details : 'details'
  },
  {
    title: "TodoList",
    mediaUrl: 'https://i.postimg.cc/sgZnWNQC/todoList.webp',
    urlDeploy: 'https://taskfranco.vercel.app',
    details : 'details'
  },
  {
    title: "Calculator",
    mediaUrl: 'https://i.postimg.cc/3RCJnhNM/React-calculator.webp',
    urlDeploy: 'https://calculatorfrancociprian.netlify.app/',
    details : 'details'
  },
  {
    title: "weather-with-franco",
    mediaUrl: 'https://i.postimg.cc/k4jLnYh6/weather-with-franco.webp',
    urlDeploy: 'https://francociprian.github.io/Weather-with-Franco/',
    details : 'details'
  },
]

const transition = { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.9] }

// const ProjectHeader = () => {
//   return (
    
//   )
// }



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
                style={{
                  minHeight: '550vh',
                  display:'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }} >
                  <div className='my-24 max-w-5xl'>
                    {Proyectos.map(({ title,mediaUrl, urlDeploy, details }, index) => {
                      return(
                        <div key={index} className='flex flex-col items-center my-20'>
                          <div className={`project-header ${details}`}>
                            <div className="container">
                              <div className="project-inner">
                                <div className="project-title">
                                  <h5 className='text-blackProject dark:text-whiteProject'>{title}</h5>
                                </div>
                                <div className="project-description">
                                  <p className='text-[#9c9c9e] dark:text-[#525356]'>
                                    Looking to improve the overall quality of the product through a
                                    design thinking approach. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quae corporis nesciunt aspernatur sapiente magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                                <div className="projects-worked-on">
                                  <ul className='text-[#9c9c9e] dark:text-[#525356]'>
                                    <span className='text-blackProject dark:text-whiteProject'>Projects worked on: </span>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Lorem ipsum dolor sit amet</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          
                          <div>
                            <img 
                              src={mediaUrl} 
                              alt={title} 
                              className='pb-4 border-lime-500'
                              />
                            <div className='flex gap-4 680Max:flex-col 680Max:items-center'>
                              <div className='w-1/3 h-60 680Max:w-3/4 bg-slate-400 flex items-center justify-center'>Image</div>  
                              <div className='w-1/3 h-60 680Max:w-3/4 bg-gray-300 flex items-center justify-center' >Image</div>  
                              <div className='w-1/3 h-60 680Max:w-3/4 bg-zinc-200 flex items-center justify-center' >Image</div>  
                            </div> 
                          </div>
                          <div className='w-full flex items-center pt-7 justify-center sm:justify-end'>
                            <a href={urlDeploy} className='flex items-center relative pr-2' target="_blank" rel="noreferrer" >
                              <span className='text-[#9c9c9e] dark:text-[#525356]'>deploy</span><BsArrowRight className=' pl-1 text-[#9c9c9e] dark:text-[#525356]'/>
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
              </div>
            </motion.div>
          </AnimatePresence>
  )
}

export default Projects