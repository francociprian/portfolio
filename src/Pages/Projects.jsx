import React, { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink  } from "react-icons/hi";
import calculadora from '../images/mobile.gif'

const Proyectos = [
  {
    title: "9Points",
    technologies : ["HTML","SCSS", "CSS", "JavaScript", "WOW.js"],
    mediaUrl: 'https://i.postimg.cc/CMQd2P12/9points.webp',
    urlDeploy: 'https://9points.netlify.app/',
    gitHub:'https://github.com/francociprian/9POINTS',
    details: 'mb-48',
    urlImage1 : "https://i.postimg.cc/fyZCfRsy/9points.png",
    urlImage2 : "https://i.postimg.cc/D0h1sphK/9points1.png",
    urlImage3 : "https://i.postimg.cc/XJsncpS7/9points2.png",
    description: 'Development of a fictitious company that provides software solutions, using HTML for the structure, SCSS for the visual section and basic Javascript for interactions with the page. The BEM methodology was used, and the project was managed using GIT for version control.'
  },
  {
    title: "SocialTree",
    technologies : ["ReactJS", "Firebase", "ChakraUI"],
    mediaUrl: 'https://i.postimg.cc/fymLmZN0/social-Tree.png',
    urlDeploy: 'https://socialtreee.vercel.app',
    gitHub:'https://github.com/francociprian/SocialTree',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/GhGGT04H/social-Links1.png",
    urlImage2 : "https://i.postimg.cc/GpHpYYXq/social-Links2.png",
    urlImage3 : "https://i.postimg.cc/rm5MC9xC/social-Links3.png",
    description: 'SocialTree is a social network that allows you to share your links with other users, it was developed using ReactJS, Firebase for the database and ChakraUI for the design.'
  },
  {
    title: "Untraceable",
    technologies : ["HTML", "Bootstrap" ,"SCSS", "JavaScript"],
    mediaUrl: 'https://i.postimg.cc/VNC3YNBM/untraceable.webp',
    urlDeploy: 'https://untraceable.netlify.app/',
    gitHub:'https://github.com/francociprian/UNTRACEABLE',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/3xrXbxSv/mobile1.png",
    urlImage2 : "https://i.postimg.cc/D0JvzLwX/mobile3.png",
    urlImage3 : "https://i.postimg.cc/m2g3mr6F/mobile2.png",
    description: 'Development of an e-commerce, using HTML for the structure, Bootstrap and SCSS for the visual section, the products come from a JSON that simulates the operation of an API. The BEM methodology was used, and the project was managed using GIT.'
  },
  {
    title: "TodoList",
    technologies : ["ReactJS", "CSS" ],
    mediaUrl: 'https://i.postimg.cc/sgZnWNQC/todoList.webp',
    urlDeploy: 'https://taskfranco.vercel.app',
    gitHub:'https://github.com/francociprian/TodoList',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/FzTbQXks/taskList.png",
    urlImage2 : "https://i.postimg.cc/FHMyvZzc/task-List1.png",
    urlImage3 : "https://i.postimg.cc/3Nxp1ffM/task-List2.png",
    description: 'TodoList is a simple application that allows you to add tasks, remove them from the list or mark them as complete. It was developed using ReactJS and CSS for layout.'
  },
  {
    title: "Calculator",
    technologies : ["ReactJS", "CSS", "MATH.js" ],
    mediaUrl: 'https://i.postimg.cc/3RCJnhNM/React-calculator.webp',
    urlDeploy: 'https://calculatorfrancociprian.netlify.app/',
    gitHub:'https://github.com/francociprian/React-Calculator',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/L8jmKpxB/calculator.png",
    urlImage2 : "https://i.postimg.cc/L8jmKpxB/calculator.png",
    urlImage3 : calculadora,
    description: 'Calculator is a simple application that allows you to make basic calculations, it was developed using ReactJS, CSS for the design and mathJS for the calculations.'
  },
  {
    title: "weather-with-franco",
    technologies : ["ReactJS", "TailwindCSS", "OpenWeatherAPI", "ChartJS"],
    mediaUrl:'https://i.postimg.cc/RVYHQZTF/Weather-with-franco.png',
    urlDeploy: 'https://weather-with-franco.vercel.app/',
    gitHub:'https://github.com/francociprian/Weather-with-Franco',
    details : 'mt-64 mx-auto mb-48',
    urlImage1 : "https://i.postimg.cc/rFkDGyzG/weather-With-Franco-1.png",
    urlImage2 : "https://i.postimg.cc/d3615dSb/weather-With-Franco-2.png",
    urlImage3 : "https://i.postimg.cc/Y0nqw7f0/weather-With-Franco-3.png",
    description: 'Weather with Franco is a simple application that allows you to know the weather of a city, it was developed using ReactJS and CSS for the design.'
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
                className='flex flex-col items-center min-h-[12000px]' 
                // ref={container} 
                >
                  <div className='my-24 max-w-6xl'>
                    {Proyectos.map((items, index) => {
                      return(
                        <div key={index} className='flex flex-col items-center my-20'>
                          <div className={`project-header ${items.details}`}>
                            <div className="container">
                              <div className="project-inner flex justify-between w-[1000px] mx-auto">
                                <div><h5 className='text-blackProject dark:text-whiteProject text-2xl m-0 font-normal underline underline-offset-8'>{items.title}</h5></div>
                                <div className="project-description">
                                  <p className='text-[#9c9c9e] m-0 font-light w-[410px] leading-6'>
                                    {items.description}
                                  </p>
                                </div>
                                <div>
                                  <ul className='text-[#9c9c9e] dark:text-[#525356]'>
                                    <span className='text-blackProject dark:text-whiteProject'>Technologies Used:</span>
                                    {items.technologies.map((items)=>{
                                      return <li className='text-sm list-none font-light mb-1'>{items}</li>
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className='w-full flex items-center pb-10 justify-center sm:justify-end gap-8'>
                              <a href={items.gitHub} className='flex items-center gap-1 relative text-[#9c9c9e] hover:text-[#626eff]' target="_blank" rel="noreferrer" >
                                <BsGithub className='h-4 w-4'/><span>github</span>
                              </a>
                              <a href={items.urlDeploy} className='flex items-center gap-1 relative pr-2 text-[#9c9c9e] hover:text-[#626eff]' target="_blank" rel="noreferrer" >
                                <HiOutlineExternalLink className='h-[1.15rem] w-[1.15rem]'/><span>deploy</span>
                                {/* <BsArrowRight/> */}
                              </a>
                            </div>
                            <img src={items.mediaUrl} alt={items.title} className='pb-4' />
                            <div className='flex justify-evenly gap-4 1024Max:flex-col 1024Max:items-center 1024Max:gap-8 my-40 relative'>
                              <div className='absolute left-50 bottom-12 bg-[#ebeaea] dark:bg-[#525356] w-1/2 h-full z-[-99]'></div>
                              <img src={items.urlImage1} alt={items.title} className='w-1/5 1024Max:w-4/5 rounded-3xl border-[2px] border-zinc-800 '/>
                              <img src={items.urlImage2} alt={items.title} className='w-1/5 1024Max:w-4/5 rounded-3xl border-[2px] border-zinc-800 '/>
                              <img src={items.urlImage3} alt={items.title} className='w-1/5 1024Max:w-4/5 rounded-3xl border-[2px] border-zinc-800 '/>
                            </div> 
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