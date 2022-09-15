import React, { useState } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';

const styleStrokeLight = {
  WebkitTextStroke: '1px black',
  WebkitTextFillColor: '#eee'
  // WebkitTextFillColor: '#a7aefa'
}
 
const FirstLine = () => {
  return(
    <div className='container'>
      <div className='flex flex-col max-w-85 mx-auto min-h-90 justify-center pt-8 480Max:min-h-screen'>
        <h1 
          className='mb-10 2xl:text-[6.5rem] xl:text-7xl md:text-6xl font-anderson text-blackProject dark:text-whiteProject 480Max:text-4xl' 
        >
          <span >Welcome to my portfolio.{' '}I'm</span> 
          <span className=' text-[#626eff]'> Franco Ciprian </span>
          <span >and I build websites, have a lot of fun with it</span>
        </h1>
        <div className='md:hidden flex justify-center mt-24 text-blackProject dark:text-whiteProject animate-arrow-bounce'>
          <BsArrowDown className='h-6 w-6' />
        </div>
      </div>
    </div>
    )
}

const SecondLine = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="container">
      <h1 className="main-headline text-blackProject dark:text-[#fef6f6e8]">
        <motion.span animate={{ opacity: hovered ? 0.2 : 1 }}>
          I am a <span className="semi-bold">Front End Developer</span> with a bit of
          backend experience, primarily working with ReactJS. My taste for Design gave me a great sense of aesthetics, which is reflected in{" "}
        </motion.span>
        <motion.span
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          className="semi-bold underline"
        >
          <Link to='/projects' className='no-hover'>my projects.</Link>
        </motion.span>{" "}
      </h1>
    </div>
  )
}

const ScrollForWork = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  return (
    <motion.div style={{ opacity }} className="absolute top-0 left-[-168px] text-0.75rem flex flex-col items-center " >
      <span className='block mt-3 mb-0 mx-auto text-blackProject dark:text-[#fef6f6e8]'>MORE</span>
      <span className=" block w-[1px] bg-blackProject dark:bg-[#fef6f6e8] h-[48rem]"></span>
    </motion.div>
  )
}

const Home = () => {
  const transition = { duration: 1, ease: [0.6, -0.05, 0.01, 0.9] }

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
      <div>
        <FirstLine />
        <div className="banner" >
          <ScrollForWork />
          <div className="inner-banner">
            <SecondLine />
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
  
  )
}

export default Home

