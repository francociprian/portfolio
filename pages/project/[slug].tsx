import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '@/sanity/lib/client';
import { motion, AnimatePresence, MotionProps, AnimatePresenceProps } from "framer-motion";
import { ScrollTop } from '@/components/scrollTop';
import Head from 'next/head'


type ImageCloudinary = {
  url: string;
  resource_type: string;
  duration: null;
  secure_url: string;
  access_mode: string;
  access_control: any[];
  created_by: {
    id: string;
    type: string;
  };
  metadata: any[];
  format: string;
  type: string;
  public_id: string;
  tags: any[];
  bytes: number;
  _version: number;
  height: number;
  created_at: String;
  uploaded_by: {
    id: string;
    type: string;
  };
  _type: string;
  version: number;
  width: number;
  _key: string;
}
type Project = {
  _id: number;
  title: string;
  techStack: string;
  deploy: string;
  github: string;
  details: string;
  description: string;
  imageMain: ImageCloudinary;
  imageMain2?: ImageCloudinary;
  imageMain3?: ImageCloudinary;
  imageMain4?: ImageCloudinary;
  imageMobile?: ImageCloudinary;
  imageMobile2?: ImageCloudinary;
  imageMobile3?: ImageCloudinary;
};

export default function project({ project }: { project: Project }) {
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
    initial: { opacity: 0, x: 150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.95, delay: 0.3, ease: ease },
    },
    exit: {
      opacity: 0,
      x: 150,
      transition: { duration: 0.95, ease: ease },
    },
  };
  const enterBottomDelayProps: MotionProps = {
    initial: { opacity: 0, x: 150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.95, delay: 0.4, ease: ease },
    },
    exit: {
      opacity: 0,
      x: 150,
      transition: { duration: 0.95, ease: ease },
    },
  };
  return (
    <>
      <Head>
        <title>{project.title} – Franco Ciprian</title>
        <meta name="description" content={project.description} />

        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="website" />

        <meta property="og:url" content={`https://www.francociprian.com/project/${project.title.toLowerCase().replace(/\s/g, '-')}`} />
        {project.imageMain?.url && (
          <meta property="og:image" content={project.imageMain.url} />
        )}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:description" content={project.description} />
        {project.imageMain?.url && (
          <meta name="twitter:image" content={project.imageMain.url} />
        )}
      </Head>
      <AnimatePresence {...presenceProps}>
        <div className='flex flex-col items-center overflow-hidden'>
          <div className='mt-[4.5rem] mb-24 max-w-6xl'>
            <Link href='/project' className='text-slate-700 dark:text-white m-0 font-sans font-light leading-6 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-slate-700 hover:dark:decoration-white ml-8 md:ml-2'>Back</Link>
            <div className='flex flex-col items-center mt-6 mb-12' >
              <div className={`project-header ${project.details}`}>
                <div className="project-inner flex flex-col justify-between w-[1000px] mx-auto px-8">
                  <motion.h5 {...enterLeftProps} className='text-blackProject dark:text-whiteProject text-4xl md:text-6xl m-0 font-Sohne underline decoration-4 underline-offset-8 pb-6 md:pb-10'>{project.title}</motion.h5>
                  <div className='flex flex-col justify-between items-start md:flex-row  mb-10'>
                    <motion.div {...enterLeftProps} className="project-description">
                      <p className='text-textProject m-0 font-sans font-light w-[410px] leading-6'>
                        {project.description}
                      </p>
                    </motion.div>
                    <motion.div {...enterRightProps} className='font-sans text-textProject flex flex-col gap-4 md:ml-8'>
                      <div>
                        <p className='text-blackProject dark:text-whiteProject md:underline md:underline-offset-4 md:decoration-2 md:decoration-slate-700 md:dark:decoration-white'>Technologies Used:</p>
                        <p>{project.techStack}</p>
                      </div>
                      <div className='w-full flex items-center justify-between sm:justify-start gap-8'>
                        <motion.div {...enterBottomProps} className='flex items-center justify-center gap-1'>
                          <a
                            className='text-blackProject dark:text-whiteProject font-EngraversGothic text-2xl md:hover:text-[#626eff] md:underline md:underline-offset-4 md:decoration-2 md:decoration-slate-700 md:hover:decoration-[#626eff] md:dark:decoration-white md:hover:dark:decoration-[#626eff]' href={project.github} target="_blank" rel="noreferrer"
                          >
                            github
                          </a>
                        </motion.div>
                        <motion.div  {...enterBottomDelayProps} className='flex items-center gap-1'>
                          <a
                            className='text-blackProject dark:text-whiteProject font-EngraversGothic text-2xl md:hover:text-[#626eff] md:underline md:underline-offset-4 md:decoration-2 md:decoration-slate-700 md:hover:decoration-[#626eff] md:dark:decoration-white md:hover:dark:decoration-[#626eff]' href={project.deploy} target="_blank" rel="noreferrer"
                          >
                            deploy
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  {/* github | deploy */}
                  {/* <div className='w-full flex items-center justify-evenly sm:justify-end gap-8 mb-3'>
                  <motion.a {...enterBottomProps} href={project.github} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff] font-EngraversGothic text-xl' target="_blank" rel="noreferrer" >
                    <span className=''>github</span>
                  </motion.a>
                  <motion.a {...enterBottomDelayProps} href={project.deploy} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff] font-EngraversGothic text-xl' target="_blank" rel="noreferrer" >
                    <span className=''>deploy</span>
                  </motion.a>
                </div> */}
                </div>
              </div>
              <div>
                <div className='w-full flex flex-col justify-center items-center gap-4'>
                  {project.imageMain &&
                    <motion.div {...enterBottomDelayProps} className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image
                        src={project.imageMain.url}
                        height={project.imageMain?.height}
                        width={project.imageMain?.width}
                        alt={project.title}
                        className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none'
                      />
                    </motion.div>
                  }
                  {project.imageMain2 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image
                        src={project.imageMain2.url}
                        height={project.imageMain2?.height}
                        width={project.imageMain2?.width}
                        alt={project.title}
                        className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none' />
                    </div>
                  }
                  {project.imageMain3 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image
                        src={project.imageMain3.url}
                        height={project.imageMain3?.height}
                        width={project.imageMain3?.width}
                        alt={project.title}
                        className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none'
                      />
                    </div>
                  }
                  {project.imageMain4 &&
                    <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-neutral-600 bg-transparent'>
                      <Image
                        src={project.imageMain4.url}
                        height={project.imageMain4?.height}
                        width={project.imageMain4?.width}
                        alt={project.title}
                        className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none'
                      />
                    </div>
                  }
                </div>
                <div className='flex justify-around gap-4 1024Max:flex-col 1024Max:items-center 1024Max:gap-8 mt-24 mb-12 relative'>
                  <div className='absolute left-50 bottom-12 bg-imageProject dark:bg-neutral-700 w-1/2 h-full z-[-99]'></div>
                  {project.imageMobile &&
                    <Image
                      src={project.imageMobile.url}
                      width={project.imageMobile.width}
                      height={project.imageMobile?.height}
                      alt={project.title}
                      className='lg:w-1/4 w-2/4 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none'
                    />
                  }
                  {project.imageMobile2 &&
                    <Image
                      src={project.imageMobile2.url}
                      width={project.imageMobile2.width}
                      height={project.imageMobile2?.height}
                      alt={project.title}
                      className='lg:w-1/4 w-2/4 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none'
                    />
                  }
                  {project.imageMobile3 &&
                    <Image
                      src={project.imageMobile3.url}
                      width={project.imageMobile3.width}
                      height={project.imageMobile3?.height}
                      alt={project.title}
                      className='lg:w-1/4 w-2/4 rounded-3xl border-[1px] border-zinc-800 dark:border-none shadow-ShadowImages dark:shadow-none'
                    />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollTop />
      </AnimatePresence>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "project" && slug.current == '${params?.slug}'][0]`;

  const project = await client.fetch(query);

  return {
    props: {
      project
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "project"] {slug {current}}`;
  const project = await client.fetch(query);
  const paths = project.map((project: { slug: { current: string } }) => ({
    params: {
      slug: project.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

