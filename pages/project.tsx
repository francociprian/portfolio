import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { loadData } from "./api/project";
import { GetServerSideProps } from "next";

type Project = {
  _id: number;
  title: string;
  slug: {
    current: string,
    _type: string
  }
};

export default function projects({ project }: { project: Project[] }){
  const ease: number[] = [0.08, 0.82, 0.17, 1];
  const containerLetters: Variants = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.01,
        ease: ease,
      },
    }
  };
  const letter: Variants = {
    initial: {
      transform: "translateX(-200%)"
    },
    animate: {
      transform: "translateX(0%)",
      transition: {
        duration: 1,
        ease: ease,
      },
    }
  };

  return (
    <div>
      <motion.div
        variants={containerLetters}
        initial="initial"
        animate="animate"
        exit="exit"
        className="overflow-hidden min-h-screen flex flex-col items-center justify-center"
      >
        {project.map((x) => (
          <motion.div
            key={x._id}
            variants={letter}
            initial="initial"
            animate="animate"
            exit="exit"
            className="m-0 pb-10"
          >
            <Link
              className="text-blackProject dark:text-whiteProject text-[6vw] font-Sohne leading-[0.75]"
              href={{
                pathname: `/project/${encodeURIComponent(x.slug.current)}`,
                query: { slug: x.slug.current },
              }}
            >
              {x.title}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { project } = await loadData()
  return {
    props: {
      project
    },
  }
}



{/* <div className='mt-[4.5rem] mb-24 max-w-6xl'>
        {project.map((x) => (
          <div
            key={x._id}
            className='flex flex-col items-center mt-6 mb-12'
          >
            <Link
              href={{
                pathname: `/project/${encodeURIComponent(x.slug.current)}`,
                query: { slug: x.slug.current },
              }}
            >
              <motion.h5
                {...projectEnterLeftProps}
                className='text-blackProject dark:text-whiteProject text-6xl m-0 font-Sohne underline underline-offset-8 pb-10'
              >
                {x.title}
              </motion.h5>
            </Link>
          </div>
        ))}
</div> */}