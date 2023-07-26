import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { GetStaticProps } from "next";
import type { Projects } from '@/lib/types'
import { client } from '@/sanity/lib/client';

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
  slug: {
    current: string,
    _type: string
  };
  imageMain: ImageCloudinary;
  imageMain2?: ImageCloudinary;
  imageMain3?: ImageCloudinary;
  imageMain4?: ImageCloudinary;
  imageMobile?: ImageCloudinary;
  imageMobile2?: ImageCloudinary;
  imageMobile3?: ImageCloudinary;
};

const ListProject = ({ x }: { x: Project }) => {

  const [isActive, setIsActive] = useState(false);
  const animation = {
    initial: { width: 0 },
    open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
    closed: { width: 0 }
  }

  return (
    <Link
      href={{
        pathname: `/project/${encodeURIComponent(x.slug.current)}`,
        query: { slug: x.slug.current },
      }}
    >
      <div
        onMouseEnter={() => { setIsActive(true) }}
        onMouseLeave={() => { setIsActive(false) }}
        className={`
          border-t-2 border-black dark:border-white py-[0.8vw] cursor-pointer w-full flex justify-center items-center 
          ${x.slug.current === "socialtree" ? "border-b-2" : ""}
          `}
      >
        <p className="text-[4vw] m-0 mr-[0.75vw]">Project</p>
        <motion.div
          variants={animation}
          animate={isActive ? "open" : "closed"}
          className="overflow-hidden flex justify-center w-0"
        >
          <Image
            src={x.imageMain.url}
            className="img"
            height='200'
            width='200'
            alt={x.title}
          />
        </motion.div>
        <p className="text-[4vw] m-0 ml-[0.75vw]">{x.title}</p>
      </div>
    </Link>
  )
}



export default function Projects({ data }: { data: Project[] }) {
  return (
    <div className="overflow-hidden h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="w-[70%] lg:mt-16">
        {data.map((x) => (
          <ListProject x={x} key={x._id} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "project"]`;

  const data = await client.fetch(query);
  return {
    props: {
      data
    },
  }
}