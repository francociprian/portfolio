import React from "react"
import Link from "next/link"
import { motion, AnimatePresence, Variants } from "framer-motion"

type MenuProps = {
  setMenuState: React.Dispatch<boolean>,
  menuState: boolean
}

const Menu = ({ menuState, setMenuState }: MenuProps) => {

  const ease: number[] = [0.6, -0.05, 0.01, 0.9]
  const transition: Variants = {
    initial: { 
      height: 0,
      transition: { duration: 0.95, delay: 1.2, ease: ease },
    },
    animate: {
      height: "100vh"
    },
    exit: {
      height: 0,
      transition: { duration: 0.8, ease: ease },
    },
  }

  return (
    <>
      <AnimatePresence>
        {menuState && (
          <motion.div
            variants={transition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed h-full w-full z-999 overflow-hidden bg-black"
          >
            <div
              onClick={() => setMenuState(!menuState)}
              className="z-1000 absolute text-white top-14 right-8 flex items-center uppercase text-siteVersion tracking-wider cursor-pointer"
            >
              X
            </div>
            <div>
              <div className="flex items-center justify-center h-80vh">
                <ul className="text-center">
                  <li className="m-24 text-white relative overflow-hidden 480Max:m-16">
                    <Link className="text-8xl 480Max:text-6xl capitalize mx-auto font-Sohne" href="/">Home</Link>
                  </li>
                  <li className="m-24 text-white relative overflow-hidden 480Max:m-16">
                    <Link className="text-8xl 480Max:text-6xl capitalize mx-auto font-Sohne" href="/project">Projects</Link>
                  </li>
                  <li className="m-24 text-white relative overflow-hidden 480Max:m-16">
                    <Link className="text-8xl 480Max:text-6xl capitalize mx-auto font-Sohne" href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu

