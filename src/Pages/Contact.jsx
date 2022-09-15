import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import socialLinks from '../components/socialLinks'
import emailjs from '@emailjs/browser'; 
import { useNavigate } from 'react-router-dom';


const Loading = () => {
  return(
    <button 
    className='border-transparent text-base font-bold tracking-wider w-40 h-12 mt-5 rounded-sm px-5 bg-blackMenu dark:bg-whiteProject flex justify-center items-center'
    > 
      <svg className="animate-spin h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </button>
  )
}

const BannerContact = () => {
  const navigate = useNavigate();
  const [ sending, setSending ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
        setSending(true)
        setTimeout(() => {
          setLoading(true)
        }, 2000);
        setTimeout(() => {
          navigate('/')
        }, 3000);
    }, (error) => {
        console.log(error.text);
    });
}

  return (
    <div className="w-full mx-auto py-16">
      <form 
        onSubmit={sendEmail}
        className="mt-16 flex flex-col items-center"
        // style={{transition: 'all 4s ease-in-out'}}
        method="post" 
        action="">
          <input 
            name="user_name" 
            type="text" 
            className="h-10 lg:w-700 w-full bg-transparent outline-none border-b-2 border-b-slate-200 text-blackMenu dark:text-whiteProject text-lg mb-4"  
            placeholder="Your Name" 
            required 
          />
          <input 
            name="user_email"  
            type="email" 
            className="h-10 lg:w-700 w-full bg-transparent outline-none border-b-2 border-b-slate-200 text-blackMenu dark:text-[rgb(246,246,246)] text-lg mb-4" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            name="user_message"
            className=" min-h-[12rem] lg:w-700 w-full bg-transparent outline-none border-b-2 border-b-slate-200 text-blackMenu dark:text-whiteProject text-lg mb-4" 
            placeholder="Your message goes here!" 
            rows="4" 
            required
          >
          </textarea>
          <div>
            <input 
              id='submit'
              type="submit" 
              className={sending ? 'hidden' : 'border-transparent text-base font-bold text-white dark:text-blackMenu tracking-wider h-12 w-40 mt-5 rounded-sm px-5 bg-blackMenu dark:bg-whiteProject hover:bg-[#626eff] hover:text-whiteProject hover:dark:text-whiteProject hover:dark:bg-[#626eff] cursor-pointer'}
              value='Send Message'
            />
            <div className={sending ? 'inline-block text-black dark:text-white text-center' : 'hidden'} >
              {loading ? 
              <span><span className='text-[#626eff] text-2xl p-6 mt-6'>Message sent</span><br/> I will reply as soon as possible</span> 
              : <Loading/>}
            </div>
          </div>
      </form>
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
          className="text-blackProject dark:text-whiteProject hover:text-[#626eff] duration-300 cursor-pointer"
          >
            <div className='flex items-center gap-2'>
              {icon} <span className='hidden sm:block uppercase text-0.75rem font-normal'>{title}</span>
            </div>
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
            <div className='container'>
              <div className='min-h-90 flex flex-col justify-center relative'>
                <BannerContact/>
                <BannerContactLink/>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
)
}

export default Contact