import { useState } from 'react';
import { motion, useTransform, useScroll, Variants } from 'framer-motion';
import Link from 'next/link';

const ease: number[] = [0.08, 0.82, 0.17, 1];
const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.05,
      ease: ease,
    },
  },
  // exit: {
  //   transition: {
  //     staggerChildren: 0.05,
  //     staggerDirection: -1,
  //     ease: ease,
  //   },
  // },
};
const spanVariantsTop: Variants = {
  initial: { opacity: 0, x: 250 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, delay: 0.5, ease: ease },
  },
  // exit: {
  //   opacity: 0,
  //   x: 150,
  //   transition: { duration: 0.95, delay: 0.01, ease: ease },
  // },
};
const spanVariantsMidleOne: Variants = {
  initial: { opacity: 0, x: -300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, delay: 0.7, ease: ease },
  },
  // exit: {
  //   opacity: 0,
  //   x: -200,
  //   transition: { duration: 0.95, ease: ease },
  // },
};
const spanVariantsMidleTwo: Variants = {
  initial: { opacity: 0, x: 300 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, delay: 0.9, ease: ease },
  },
  // exit: {
  //   opacity: 0,
  //   x: 200,
  //   transition: { duration: 0.95, ease: ease },
  // },
};
const spanVariantsBottom: Variants = {
  initial: { opacity: 0, x: -280 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, delay: 1.2, ease: ease },
  },
  // exit: {
  //   opacity: 0,
  //   x: -180,
  //   transition: { duration: 0.95, ease: ease },
  // },
};

const FirstLine = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className='h-screen mx-auto flex justify-center items-center px-8 grow relative w-full 1024Max:mx-0 1024Min:max-w-[876px] 1216Min:max-w-[1024px] 1480Min:max-w-[1216px]'
    >
      <h1
        // 2xl:text-[6.6rem] xl:text-[5.5rem] md:text-[4.5rem] 480Max:text-5xl 
        className='
        text-[3.9vw] 680Max:text-5xl
        font-sans text-blackProject dark:text-whiteProject xl:leading-none'
      >
        <motion.span
          variants={spanVariantsTop}
          initial="initial"
          animate="animate"
          exit="exit"
          className='block text-right font-light relative z-50'
        >
          Welcome to my portfolio.
        </motion.span>
        <motion.span
          variants={spanVariantsMidleOne}
          initial="initial"
          animate="animate"
          exit="exit"
          className=' text-[#626eff] block font-Sohne text-[10vw] 680Max:text-[16vw] leading-[0.75] 680Max:text-right 680Max:leading-normal'
        >
          I&apos;m Franco
        </motion.span>
        <motion.span
          variants={spanVariantsMidleTwo}
          initial="initial"
          animate="animate"
          exit="exit"
          className=' text-[#626eff] block font-Sohne text-[16vw] leading-[0.8] text-right'
        >
          Ciprian
        </motion.span>
        <motion.span
          variants={spanVariantsBottom}
          initial="initial"
          animate="animate"
          exit="exit"
          className='block font-light'
        >
          and I build websites, have a lot of fun with it
        </motion.span>
      </h1>
    </motion.div>
  )
}

const SecondLine = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  return (
    <>
      <h1
        // dark:text-[#fef6f6e8]
        className="main-headline text-[3.1vw] text-blackProject dark:text-gray-500  font-sans font-extralight mb-16 leading-[4rem] 1024Max:leading-normal 1024Max:text-4xl 768Max:text-2xl">
        <motion.span animate={{ opacity: hovered ? 0.2 : 1 }} exit={{ opacity: 0, transition: { duration: 0.95, ease: ease } }}>
          I am a <span className="font-normal dark:text-white">Front End Developer</span> with a bit of
          backend experience, primarily working with ReactJS. My taste for Design gave me a great sense of aesthetics, which is reflected in{" "}
        </motion.span>
        <motion.span
          onHoverStart={() => setHovered(!hovered)}
          onHoverEnd={() => setHovered(!hovered)}
          className='font-normal underline underline-offset-4 decoration-2 hover:cursor-pointer text-[#626eff]'
        >
          <Link href="/projects">my projects</Link>
        </motion.span>{" "}
      </h1>
    </>
  )
}

const ScrollForWork = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-[-100px] left-[-108px] 1280Max:-left-14 text-0.75rem flex flex-col items-center 876Max:hidden" >
      <span className='block mt-3 mb-0 mx-auto text-blackProject dark:text-[#fef6f6e8] font-EngraversGothic underline underline-offset-4'>MORE</span>
      <span className="block w-[1px] bg-blackProject dark:bg-[#fef6f6e8] h-[56rem]"></span>
    </motion.div>
  )
}

export default function Home(){
  return (
    <main>
      <div className="relative overflow-hidden">
        <FirstLine />
        <div className="relative h-screen flex items-center max-w-5xl 1024Max:max-w-lg 1216Max:max-w-3xl mx-auto px-8" >
          <ScrollForWork />
          <div className="">
            <SecondLine />
          </div>
        </div>
      </div>
    </main>
  )
}