import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"
import useWindowSize from './Hooks/useWidowsSize'
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

  //Set the height of the body to the height of the scrolling div
  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`
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
    const skew = velocity * `${isMobile ? 0 : 2}`


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
    setBodyHeight()
  }, [size, finishLoading, location])

  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [menuState])



  return (
      <>
        <motion.div exit={{ opacity: 0 }} ref={app} className="fixed top-0 left-0 h-full w-full overflow-hidden">
          <div
            style={{
              transform: `translate3d(0, -${state.scroll}px, 0) skewY(${state.skew}deg)`,
            }}
            ref={scrollContainer}
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
                      <Route path='*' element={<NotFound/>}/>
                    </Routes>
                  </main>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
        {!isMobile && <SiteVersion />}
      </motion.div>
    </>
  )
}

const SiteVersion = () => {
  return (
    <div className='fixed right-12 bottom-12 z-99 flex items-center text-blackProject dark:text-whiteProject'>
      <span className="text-siteVersion font-light">francociprian - v1.0</span>
      <ToogleTheme/>
    </div>
  )
}

export default App;