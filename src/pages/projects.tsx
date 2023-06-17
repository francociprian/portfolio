import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence, MotionProps, AnimatePresenceProps } from "framer-motion";
import { SmoothScrolling } from '@/components/SmoothScrolling'

import imageMain9Points from '../../public/img/mainImages/9pointsMain.webp';
import imageMobile19Points from "../../public/img/mobileImages/9points.webp";
import imageMobile29Points from "../../public/img/mobileImages/9points1.webp";
import imageMobile39Points from "../../public/img/mobileImages/9points2.webp";

import imageMainSocialTree from '../../public/img/mainImages/socialtreeMain1.webp';
import imageMain2SocialTree from '../../public/img/mainImages/socialtreeMain2.webp';
import imageMobile1SocialTree from "../../public/img/mobileImages/social-Links1.webp";
import imageMobile2SocialTree from "../../public/img/mobileImages/social-Links2.webp";
import imageMobile3SocialTree from "../../public/img/mobileImages/social-Links3.webp";

import imageMainUntraceable from '../../public/img/mainImages/untraceable1.webp';
import imageMain2Untraceable from '../../public/img/mainImages/untraceable2.webp';
import imageMain3Untraceable from '../../public/img/mainImages/untraceable3.webp';
import imageMobile1Untraceable from "../../public/img/mobileImages/untraceable1.webp";
import imageMobile2Untraceable from "../../public/img/mobileImages/untraceable2.webp";
import imageMobile3Untraceable from "../../public/img/mobileImages/untraceable3.webp";

import imageMainWeatherWithFranco from '../../public/img/mainImages/weatherMain1.webp';
import imageMain2WeatherWithFranco from '../../public/img/mainImages/weatherMain2.webp';
import imageMain3WeatherWithFranco from '../../public/img/mainImages/weatherMain3.webp';
import imageMobile1WeatherWithFranco from "../../public/img/mobileImages/weatherWithFranco1.webp";
import imageMobile2WeatherWithFranco from "../../public/img/mobileImages/weatherWithFranco2.webp";
import imageMobile3WeatherWithFranco from "../../public/img/mobileImages/weatherWithFranco3.webp";

import imageMainTodov2 from '../../public/img/mainImages/todov2-1.webp';
import imageMain2Todov2 from '../../public/img/mainImages/todov2-2.webp';
import imageMain3Todov2 from '../../public/img/mainImages/todov2-4.webp';
import imageMobile1Todov2 from "../../public/img/mobileImages/todov2.webp"
import imageMobile2Todov2 from "../../public/img/mobileImages/todov2.webp"
import imageMobile3Todov2 from "../../public/img/mobileImages/todov2.webp"

import imageMainTodoList from '../../public/img/mainImages/todolistMain.webp';
import imageMobile1TodoList from "../../public/img/mobileImages/taskList1.webp";
import imageMobile2TodoList from "../../public/img/mobileImages/taskList2.webp";
import imageMobile3TodoList from "../../public/img/mobileImages/taskList3.webp";

type Project = {
  id: number;
  title: string;
  techStack: string;
  imageMain: StaticImageData;
  imageMain2?: StaticImageData;
  imageMain3?: StaticImageData;
  urlDeploy: string;
  github: string;
  details: string;
  imageMobile1?: string | StaticImageData;
  imageMobile2?: string | StaticImageData;
  imageMobile3?: string | StaticImageData;
  description: string;
};


const PROJECTS: Project[] = [
  {
    id: 1,
    title: "9Points",
    techStack: "HTML, SCSS, CSS, JavaScript, WOW.js",
    imageMain: imageMain9Points,
    urlDeploy: 'https://9points.netlify.app/',
    github: 'https://github.com/francociprian/9POINTS',
    details: 'mb-6',
    imageMobile1: imageMobile19Points,
    imageMobile2: imageMobile29Points,
    imageMobile3: imageMobile39Points,
    description: 'Development of a fictitious company that provides software solutions, using HTML for the structure, SCSS for the visual section and basic Javascript for interactions with the page. The BEM methodology was used, and the project was managed using GIT for version control.'
  },
  {
    id: 2,
    title: "SocialTree",
    techStack: "ReactJS, Firebase, ChakraUI",
    imageMain: imageMainSocialTree,
    imageMain2: imageMain2SocialTree,
    urlDeploy: 'https://socialtreee.vercel.app',
    github: 'https://github.com/francociprian/SocialTree',
    details: 'mx-auto mb-12',
    imageMobile1: imageMobile1SocialTree,
    imageMobile2: imageMobile2SocialTree,
    imageMobile3: imageMobile3SocialTree,
    description: 'SocialTree is a social network that allows you to share your links with other users, it was developed using ReactJS, Firebase for the database and ChakraUI for the design.'
  },
  {
    id: 3,
    title: "Untraceable",
    techStack: "HTML, Bootstrap, SCSS, JavaScript",
    imageMain: imageMainUntraceable,
    imageMain2: imageMain2Untraceable,
    imageMain3: imageMain3Untraceable,
    urlDeploy: 'https://untraceable.netlify.app/',
    github: 'https://github.com/francociprian/UNTRACEABLE',
    details: 'mx-auto mb-12',
    imageMobile1: imageMobile1Untraceable,
    imageMobile2: imageMobile2Untraceable,
    imageMobile3: imageMobile3Untraceable,
    description: 'Development of an e-commerce, using HTML for the structure, Bootstrap and SCSS for the visual section, the products come from a JSON that simulates the operation of an API. The BEM methodology was used, and the project was managed using GIT.'
  },
  {
    id: 4,
    title: "Weather with Franco",
    techStack: "ReactJS, TailwindCSS, OpenWeatherAPI, ChartJS",
    imageMain: imageMainWeatherWithFranco,
    imageMain2: imageMain2WeatherWithFranco,
    imageMain3: imageMain3WeatherWithFranco,
    urlDeploy: 'https://weather-with-franco.vercel.app/',
    github: 'https://github.com/francociprian/Weather-with-Franco',
    details: 'mx-auto mb-12',
    imageMobile1: imageMobile1WeatherWithFranco,
    imageMobile2: imageMobile2WeatherWithFranco,
    imageMobile3: imageMobile3WeatherWithFranco,
    description: 'Weather with Franco is an application that allows knowing the weather of a city, it was developed using ReactJS, consuming OpenWeatherAPI for the data, ChartJS and TailwindCSS for the design.'
  },
  {
    id: 5,
    title: "Todov2",
    techStack: "ReactJS, CSS, tailwindCSS, HeadlessUI, Hello-pangea/dnd",
    imageMain: imageMainTodov2,
    imageMain2: imageMain2Todov2,
    imageMain3: imageMain3Todov2,
    urlDeploy: 'https://fctodolist.vercel.app',
    github: 'https://github.com/francociprian/to-do',
    details: 'mx-auto mb-12',
    imageMobile1: imageMobile1Todov2,
    imageMobile2: imageMobile2Todov2,
    imageMobile3: imageMobile3Todov2,
    description: 'Todov2 is a simple application that allows you to add tasks, it was developed using ReactJS and tailwindCSS for the design, the application includes a drag and drop, they can be edited, archived and deleted.'
  },
  {
    id: 6,
    title: "TodoList",
    techStack: "ReactJS, CSS",
    imageMain: imageMainTodoList,
    urlDeploy: 'https://taskfranco.vercel.app',
    github: 'https://github.com/francociprian/TodoList',
    details: 'mx-auto mb-12',
    imageMobile1: imageMobile1TodoList,
    imageMobile2: imageMobile2TodoList,
    imageMobile3: imageMobile3TodoList,
    description: 'TodoList is a simple application that allows you to add tasks, remove them from the list or mark them as complete. It was developed using ReactJS and CSS for layout.'
  },
]

export default function projects() {

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

  return (
    <AnimatePresence {...presenceProps}>
      {/* <motion.div {...divProps}> */}
      <div className='flex flex-col items-center'>
        <div className='mt-[4.5rem] mb-24 max-w-6xl'>
          {PROJECTS.map((project) => (
            <div key={project.id} className='flex flex-col items-center mt-6 mb-12' >
              <div className={`project-header ${project.details}`}>
                <div
                // className="container"
                >
                  <div className="project-inner flex flex-col justify-between w-[1000px] mx-auto px-8">
                    <motion.h5 {...enterLeftProps} className='text-blackProject dark:text-whiteProject text-2xl m-0 font-Sohne underline underline-offset-8 pb-10'>{project.title}</motion.h5>
                    <div className='flex flex-col justify-between items-start md:flex-row mb-10'>
                      <motion.div {...enterLeftProps} className="project-description">
                        <p className='text-textProject m-0 font-sans font-light w-[410px] leading-6'>
                          {project.description}
                        </p>
                      </motion.div>
                      <motion.div {...enterRightProps} className='font-sans text-textProject dark:text-textProjectDark flex flex-col md:ml-8'>
                        <span className='text-blackProject dark:text-whiteProject'>Technologies Used:</span>
                        {project.techStack}
                      </motion.div>
                    </div>
                    {/* github | deploy */}
                    <div className='w-full flex items-center  justify-evenly sm:justify-end gap-8'>
                      <motion.a {...enterBottomProps} href={project.github} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff] font-EngraversGothic' target="_blank" rel="noreferrer" >
                        {/* <BsGithub className='h-4 w-4' /> */}
                        <span className=''>github</span>
                      </motion.a>
                      <motion.a {...enterBottomDelayProps} href={project.urlDeploy} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff] font-EngraversGothic' target="_blank" rel="noreferrer" >
                        {/* <HiOutlineExternalLink className='h-[1.15rem] w-[1.15rem]' /> */}
                        <span className=''>deploy</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* images */}
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                  <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                    <Image src={project.imageMain} alt={project.title} className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />
                  </div>
                  {project.imageMain2 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image src={project.imageMain2} alt={project.title} className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />
                    </div>
                  }
                  {project.imageMain3 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image src={project.imageMain3} alt={project.title} className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />
                    </div>
                  }
                </div>
                <div className='flex justify-around gap-4 1024Max:flex-col 1024Max:items-center 1024Max:gap-8 mt-24 mb-12 relative' >
                  <div className='absolute left-50 bottom-12 bg-imageProject dark:bg-neutral-700 w-1/2 h-full z-[-99]'></div>
                  {project.imageMobile1 && <Image src={project.imageMobile1} alt={project.title} className='w-1/5 1024Max:w-2/3 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />}
                  {project.imageMobile2 && <Image src={project.imageMobile2} alt={project.title} className='w-1/5 1024Max:w-2/3 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />}
                  {project.imageMobile3 && <Image src={project.imageMobile3} alt={project.title} className='w-1/5 1024Max:w-2/3 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />}
                </div>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      {/* </motion.div> */}
    </AnimatePresence>
  )
}