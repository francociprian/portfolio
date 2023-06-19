import { motion, AnimatePresence, MotionProps, AnimatePresenceProps } from "framer-motion";

export default function contact() {
  const presenceProps: AnimatePresenceProps = {
    mode: 'wait',
  };
  const ease: number[] = [0.08, 0.82, 0.17, 1];
  const enterLeftProps: MotionProps = {
    initial: { opacity: 0, x: -800 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.95, delay: 0.2, ease: ease },
    },
    exit: {
      opacity: 0,
      x: -800,
      transition: { duration: 0.95, ease: ease },
    },
  };
  return (
    <AnimatePresence {...presenceProps}>
      <div className='h-screen flex justify-center items-center'>
        <motion.h1 {...enterLeftProps} className='text-6xl font-Sohne'>Contact</motion.h1>
      </div>
    </AnimatePresence>
  )
}
