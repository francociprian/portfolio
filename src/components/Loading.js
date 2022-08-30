import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"

const Loading = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      counter <= 99 && setCounter(counter + 1)
    }, 20)
  }, [counter])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center h-screen w-full absolute z-99"
    >
      <>
        <span className="text-center text-sm uppercase tracking-wider text-blackProject dark:text-slate-400">
          Site is loading... <br />
          {/* <br /> I'm just getting my shit together. */}
        </span>
      </>
      <span className="text-blackProject dark:text-slate-400 absolute bottom-32 left-32 text-5xl 480Max:bottom-12 480Max:left-6 1024Max:bottom-12 1024Max:left-12">%{counter}</span>
    </motion.div>
  )
}

export default Loading