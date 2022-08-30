import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight} from "react-icons/bs";
import calculadora from '../images/mobile.gif'

const Proyectos = [
  {
    title: "9Points",
    // technologies: 'HTML',
    mediaUrl: 'https://i.postimg.cc/CMQd2P12/9points.webp',
    urlDeploy: 'https://9points.netlify.app/',
    details: 'mb-48',
    urlImage1 : "https://i.postimg.cc/fyZCfRsy/9points.png",
    urlImage2 : "https://i.postimg.cc/D0h1sphK/9points1.png",
    urlImage3 : "https://i.postimg.cc/XJsncpS7/9points2.png"
  },
  {
    title: "SocialTree",
    mediaUrl: 'https://i.postimg.cc/fymLmZN0/social-Tree.png',
    urlDeploy: 'https://socialtreee.vercel.app',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/GhGGT04H/social-Links1.png",
    urlImage2 : "https://i.postimg.cc/GpHpYYXq/social-Links2.png",
    urlImage3 : "https://i.postimg.cc/rm5MC9xC/social-Links3.png"
  },
  {
    title: "Untraceable",
    mediaUrl: 'https://i.postimg.cc/VNC3YNBM/untraceable.webp',
    urlDeploy: 'https://untraceable.netlify.app/',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/3xrXbxSv/mobile1.png",
    urlImage2 : "https://i.postimg.cc/D0JvzLwX/mobile3.png",
    urlImage3 : "https://i.postimg.cc/m2g3mr6F/mobile2.png"
  },
  {
    title: "TodoList",
    mediaUrl: 'https://i.postimg.cc/sgZnWNQC/todoList.webp',
    urlDeploy: 'https://taskfranco.vercel.app',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/FzTbQXks/taskList.png",
    urlImage2 : "https://i.postimg.cc/FHMyvZzc/task-List1.png",
    urlImage3 : "https://i.postimg.cc/3Nxp1ffM/task-List2.png"
  },
  {
    title: "Calculator",
    mediaUrl: 'https://i.postimg.cc/3RCJnhNM/React-calculator.webp',
    urlDeploy: 'https://calculatorfrancociprian.netlify.app/',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/L8jmKpxB/calculator.png",
    urlImage2 : "https://i.postimg.cc/L8jmKpxB/calculator.png",
    urlImage3 : calculadora
  },
  {
    title: "weather-with-franco",
    mediaUrl: 'https://i.postimg.cc/k4jLnYh6/weather-with-franco.webp',
    urlDeploy: 'https://francociprian.github.io/Weather-with-Franco/',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/fyzWzggq/weather-With-Franco.png",
    urlImage2 : "https://i.postimg.cc/jqcdgtLp/weather-With-Franco1.png",
    urlImage3 : "https://i.postimg.cc/fyzWzggq/weather-With-Franco.png"
  },
]

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
                style={{
                  minHeight: '550vh',
                  display:'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }} >
                  <div className='my-24 max-w-6xl'>
                    {Proyectos.map(({ title, technologies, mediaUrl, urlDeploy, details, urlImage1, urlImage2, urlImage3 }, index) => {
                      return(
                        <div key={index} className='flex flex-col items-center my-20'>
                          <div className={`project-header ${details}`}>
                            <div className="container">
                              <div className="project-inner flex justify-between w-[1000px] mx-auto">
                                <div><h5 className='text-blackProject dark:text-whiteProject text-2xl m-0 font-normal underline underline-offset-8'>{title}</h5></div>
                                <div className="project-description">
                                  <p className='text-[#9c9c9e] dark:text-[#525356] m-0 font-light w-[410px] leading-6'>
                                    Looking to improve the overall quality of the product through a
                                    design thinking approach. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quae corporis nesciunt aspernatur sapiente magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  </p>
                                </div>
                                <div className="">
                                  <ul className='text-[#9c9c9e] dark:text-[#525356]'>
                                    <span className='text-blackProject dark:text-whiteProject'>Projects worked on: </span>
                                    <li>HTML</li>
                                    <li>JAVASCRIPT</li>
                                    <li>REACTJS</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img src={mediaUrl} alt={title} className='pb-4' />
                            <div className='flex justify-evenly gap-4 1024Max:flex-col 1024Max:items-center 1024Max:gap-8 my-40 relative'>
                              <div className='absolute left-50 bottom-12 bg-[#ebeaea] dark:bg-[#525356] w-1/2 h-full z-[-99]'></div>
                              <img src={urlImage1} alt={title} className='w-1/5 1024Max:w-4/5 rounded-3xl border-[2px] border-zinc-800 '/>
                              <img src={urlImage2} alt={title} className='w-1/5 1024Max:w-4/5 rounded-3xl border-[2px] border-zinc-800 '/>
                              <img src={urlImage3} alt={title} className='w-1/5 1024Max:w-4/5 rounded-3xl border-[2px] border-zinc-800 '/>
                            </div> 
                          </div>
                          <div className='w-full flex items-center pt-6 justify-center sm:justify-end'>
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