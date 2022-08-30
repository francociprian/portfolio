import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext'
import { BsFillBrightnessHighFill, BsMoonFill } from "react-icons/bs";


function ToogleTheme() {
    const { theme, setTheme } = useContext(ThemeContext)
  return (
    <button 
        className="py-4 px-4 text-0.75rem font-thin" 
        onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')} 
    >   
      {theme === 'dark' ? <BsFillBrightnessHighFill className='h-5 w-5' /> : <BsMoonFill  className='h-4 w-4'/>}
    </button>
  )
}

export default ToogleTheme