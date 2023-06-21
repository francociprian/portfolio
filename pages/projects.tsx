// import React, { useState } from 'react';
import Image from "next/image";
// import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence, MotionProps, AnimatePresenceProps } from "framer-motion";
import { loadData } from "./api/project";
import { scrollToStart } from '@/components/scrollToStart'
import { ScrollTop } from '@/components/scrollTop';

// type Project = {
//   id: number;
//   title: string;
//   techStack: string;
//   imageMain: StaticImageData;
//   imageMain2?: StaticImageData;
//   imageMain3?: StaticImageData;
//   urlDeploy: string;
//   github: string;
//   details: string;
//   imageMobile1?: string | StaticImageData;
//   imageMobile2?: string | StaticImageData;
//   imageMobile3?: string | StaticImageData;
//   description: string;
// };

export default function projects({ project }: { project: any[] }) {

  const presenceProps: AnimatePresenceProps = {
    mode: 'wait',
  };
  const divProps: MotionProps = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.9] },
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
  const enterRightProps: MotionProps = {
    initial: { opacity: 0, x: 150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.95, delay: 0.2, ease: ease },
    },
    exit: {
      opacity: 0,
      x: 150,
      transition: { duration: 0.95, ease: ease },
    },
  };
  const enterBottomProps: MotionProps = {
    initial: { opacity: 0, y: 150 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, delay: 0.2, ease: ease },
    },
    exit: {
      opacity: 0,
      y: 150,
      transition: { duration: 0.95, ease: ease },
    },
  };
  const enterBottomDelayProps: MotionProps = {
    initial: { opacity: 0, y: 150 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, delay: 0.3, ease: ease },
    },
    exit: {
      opacity: 0,
      y: 150,
      transition: { duration: 0.95, ease: ease },
    },
  };
  console.log(project)
  return (
    <AnimatePresence {...presenceProps}>
      {/* <motion.div {...divProps}> */}
      <div className='flex flex-col items-center' onLoad={() => scrollToStart()}>
        <div className='mt-[4.5rem] mb-24 max-w-6xl'>
          {project.map((x) => (
            <div key={x._id} className='flex flex-col items-center mt-6 mb-12' >
              <div className={`project-header ${x.details}`}>
                <div
                // className="container"
                >
                  <div className="project-inner flex flex-col justify-between w-[1000px] mx-auto px-8">
                    <motion.h5 {...enterLeftProps} className='text-blackProject dark:text-whiteProject text-2xl m-0 font-Sohne underline underline-offset-8 pb-10'>{x.title}</motion.h5>
                    <div className='flex flex-col justify-between items-start md:flex-row mb-10'>
                      <motion.div {...enterLeftProps} className="project-description">
                        <p className='text-textProject m-0 font-sans font-light w-[410px] leading-6'>
                          {x.description}
                        </p>
                      </motion.div>
                      <motion.div {...enterRightProps} className='font-sans text-textProject dark:text-textProjectDark flex flex-col md:ml-8'>
                        <span className='text-blackProject dark:text-whiteProject'>Technologies Used:</span>
                        {x.techStack}
                      </motion.div>
                    </div>
                    {/* github | deploy */}
                    <div className='w-full flex items-center  justify-evenly sm:justify-end gap-8'>
                      <motion.a {...enterBottomProps} href={x.github} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff] font-EngraversGothic' target="_blank" rel="noreferrer" >
                        <span className=''>github</span>
                      </motion.a>
                      <motion.a {...enterBottomDelayProps} href={x.deploy} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff] font-EngraversGothic' target="_blank" rel="noreferrer" >
                        <span className=''>deploy</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                  <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                    <Image 
                      src={x.imageMain.url} 
                      height={x.imageMain?.height}
                      width={x.imageMain?.width}
                      alt={x.title} 
                      className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' 
                    />
                  </div>
                  {x.imageMain2 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image 
                      src={x.imageMain2.url} 
                      height={x.imageMain2?.height}
                      width={x.imageMain2?.width}
                      alt={x.title} 
                      className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />
                    </div>
                  }
                  {x.imageMain3 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image 
                        src={x.imageMain3.url} 
                        height={x.imageMain3?.height}
                        width={x.imageMain3?.width}
                        alt={x.title} 
                        className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' 
                      />
                    </div>
                  }
                  {x.imageMain4 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image 
                        src={x.imageMain4.url} 
                        height={x.imageMain4?.height}
                        width={x.imageMain4?.width}
                        alt={x.title} 
                        className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' 
                      />
                    </div>
                  }
                </div>
                <div className='flex justify-around gap-4 1024Max:flex-col 1024Max:items-center 1024Max:gap-8 mt-24 mb-12 relative' >
                  <div className='absolute left-50 bottom-12 bg-imageProject dark:bg-neutral-700 w-1/2 h-full z-[-99]'></div>
                  {x.imageMobile && 
                    <Image 
                      src={x.imageMobile.url} 
                      width={x.imageMobile.width} 
                      height={x.imageMobile?.height} 
                      alt={x.title} 
                      className='w-1/5 1024Max:w-2/3 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' 
                    />
                  }
                  {x.imageMobile2 && 
                    <Image 
                      src={x.imageMobile2.url} 
                      width={x.imageMobile2.width} 
                      height={x.imageMobile2?.height} 
                      alt={x.title} 
                      className='w-1/5 1024Max:w-2/3 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' 
                    />
                  }
                  {x.imageMobile3 && 
                    <Image 
                      src={x.imageMobile3.url} 
                      width={x.imageMobile3.width} 
                      height={x.imageMobile3?.height} 
                      alt={x.title} 
                      className='w-1/5 1024Max:w-2/3 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' 
                    />
                  }
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      {/* </motion.div> */}
      <ScrollTop />
    </AnimatePresence>
  )
}
export async function getServerSideProps() {
  const { project } = await loadData()
  return {
    props: {
      project
    },
  }
}