import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import useWindowSize from './components/Hooks/useWidowsSize'
import ToogleTheme from './components/ToogleTheme'

//PAge components
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Header from "./components/Header"
import Menu from "./components/Menu"
import Loading from './components/Loading';
import { isMobile } from 'react-device-detect';


function App() {
  const location = useLocation();

  const [finishLoading, setFinishLoading] = useState(true)

  //Hook to grab window size
  const size = useWindowSize()

  // Ref for parent div and scrolling div
  const app = useRef()
  const scrollContainer = useRef()

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])

  // Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    // document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`

    document.body.style.height = '100vh'
  }

  const [state, setState] = useState({
    scroll: 0,
    skew: 0,
  })

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100

    // Difference between
    const difference = data.current - data.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 5


    //Assign skew and smooth scrolling to the scroll container
    setState({ scroll: data.rounded, skew: skew })
    //loop vai raf
    requestAnimationFrame(() => skewScrolling())
  }

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false)
    }, 2500)
  }, [])

  //set the height of the body.
  useEffect(() => {
    if (!isMobile) {
      return setBodyHeight()
    }
  }, [size, finishLoading, location])

  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [menuState])


  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        className={`${isMobile ? ' ' : 'fixed top-0 left-0 h-full w-full overflow-hidden'}`}
        {...(isMobile ? {} : { ref: app })}
      >
        <div
          {...(isMobile ? {} : { ref: scrollContainer })}
          {...(isMobile ? {} : {
            style: {
              transform: `translate3d(0, -${state.scroll}px, 0) skewY(${state.skew}deg)`,
            }
          })}
          className="pb-8"
        >
          <AnimatePresence>
            {finishLoading ?
              (<Loading />)
              :
              (<>
                <Header setMenuState={setMenuState} />
                <Menu menuState={menuState} setMenuState={setMenuState} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path='*' element={<NotFound />} />
                    </Routes>
                  </main>
                </motion.div>
              </>
              )}
          </AnimatePresence>
        </div>
        {!isMobile && (finishLoading ? null : <SiteVersion />)}
      </motion.div>
    </>
  )
}

const SiteVersion = () => {
  return (
    <div className='fixed right-1 bottom-12 z-99 flex items-center text-blackProject dark:text-whiteProject '>
      <span className="text-0.75rem font-light">francociprian 2022</span>
      <ToogleTheme />
    </div>
  )
}

export default App;