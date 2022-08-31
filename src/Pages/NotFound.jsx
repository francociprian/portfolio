import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function NotFound() {
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
        <div className='h-90vh flex flex-col justify-center items-center text-center' >
          <p className='text-9xl 680Max:text-7xl font-black text-blackProject dark:text-whiteProject'>404</p>
          <p className='text-9xl 680Max:text-7xl font-black text-blackProject dark:text-whiteProject uppercase'>Not Found</p>
          <p className='text-xl 680Max:text-base font-thin '>You just hit a route that doesn't exist...</p>
        </div>
      </motion.div>
    </AnimatePresence>


  )
}

export default NotFound