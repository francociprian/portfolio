import React,{ useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import socialLinks from '../components/socialLinks'


const BannerContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  // const [loader, setLoader] = useState(true)
  
  const handleSubmit = (e) => {
      e.preventDefault();
      // setLoader(true);
      setName('')
      setEmail('')
      setMessage('')
  }

  return (
    <div className="max-w-5xl mx-auto py-16">
          <div 
          // className="flex items-center justify-center mx-14 h-60vh"
          >
            <form 
                onSubmit={()=>handleSubmit}
                className="mt-16 flex flex-col items-center"
                style={{transition: 'all 4s ease-in-out'}}
                method="post" 
                action="">
                <input 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text" 
                  className="h-10 lg:w-700 w-full bg-transparent outline-none border-b-2 border-b-slate-200 text-blackMenu dark:text-bgProyects text-lg mb-4"  
                  placeholder="Your Name" 
                  required />
                <input 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}   
                  type="email" 
                  className="h-10 lg:w-700 w-full bg-transparent outline-none border-b-2 border-b-slate-200 text-blackMenu dark:text-bgProyects text-lg mb-4" 
                  placeholder="Your Email" 
                  required />
                <textarea 
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="lg:w-700 w-full bg-transparent outline-none border-b-2 border-b-slate-200 text-blackMenu dark:text-bgProyects text-lg mb-4" 
                  placeholder="Your message goes here!" 
                  rows="4" 
                  required>
                </textarea>
                <input 
                  type="submit" 
                  className="border-transparent text-base font-bold text-white dark:text-blackMenu tracking-wider h-12 mt-5 rounded-sm px-5 bg-blackMenu dark:bg-whiteProject hover:bg-orangeSoft hover:text-blackProject hover:dark:bg-orangeSoft" 
                  value="SEND MESSAGE"
                  />
            </form>
          </div>
    </div>
  )
}

const BannerContactLink = () => {
  return(
    <div className='flex justify-evenly p-8 text-center'>
      {socialLinks.map(({id, title, url, icon})=>(
        <a 
          key={id}
          href={url} 
          target="_blank" 
          rel="noreferrer"
          // className='flex flex-col items-center text-blackProject dark:text-whiteProject'
          className="group relative inline-block text-blackProject dark:text-whiteProject underline hover:text-red-500 duration-300"
          >
            {icon}
            <span className="absolute hidden group-hover:flex -left-5 top-16 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm ">{title}</span>
        </a>)
      )}
    </div>
  )
}



function Contact() {
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
            <div 
              className='container'
              style={{
                // height:'90vh',
                // display:'flex',
                // justifyContent: 'center', 
                // alignItems: 'center'
            }}>
              <div className='min-h-90 flex flex-col justify-center'>
                <BannerContact/>
                <BannerContactLink/>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
)
}

export default Contact