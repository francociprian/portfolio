import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink  } from "react-icons/hi";

export default function ProjectComponent({
  title,
  details,
  techStack,
  description,
  github,
  urlDeploy, 
  imageMain,
  imageMain2,
  imageMain3,
  imageMobile1,
  imageMobile2,
  imageMobile3
}) {

  return (
    <div className='mt-24 max-w-6xl'>
      <div  className='flex flex-col items-center my-20'>
          <div className={`project-header ${details}`}>
            <div className="container">
              <div className="project-inner flex flex-col justify-between w-[1000px] mx-auto">
                <h5 className='text-blackProject dark:text-whiteProject text-2xl m-0 font-normal underline underline-offset-8 pb-10'>{title}</h5>
                <div className='flex flex-col justify-between items-start md:flex-row mb-10'>
                  <div className="project-description">
                    <p className='text-textProject m-0 font-light w-[410px] leading-6'>
                      {description}
                    </p>
                  </div>
                  <div className='text-textProject dark:text-textProjectDark flex flex-col md:ml-8'>
                    <span className='text-blackProject dark:text-whiteProject'>Technologies Used:</span>
                    {techStack}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className='w-full flex items-center pb-10 justify-start sm:justify-end gap-8'>
                <a href={github} className='flex items-center gap-1 relative text-textProject hover:text-[#626eff]' target="_blank" rel="noreferrer" >
                  <BsGithub className='h-4 w-4'/><span>github</span>
                </a>
                <a href={urlDeploy} className='flex items-center gap-1 relative pr-2 text-textProject hover:text-[#626eff]' target="_blank" rel="noreferrer" >
                  <HiOutlineExternalLink className='h-[1.15rem] w-[1.15rem]'/><span>deploy</span>
                </a>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center gap-4'>
              <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-imageProjectDark bg-transparent'>
                <img src={imageMain} alt={title} className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800' />
              </div>
              {imageMain2 && <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-imageProjectDark bg-transparent'>
                <img src={imageMain2} alt={title} className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800' />
              </div>}
              {imageMain3 && 
                <div className='w-full xl:p-10 lg:p-8 lg:bg-imageProject lg:dark:bg-imageProjectDark bg-transparent'>
                  <img src={imageMain3} alt={title} className='mb-4 lg:rounded-lg lg:border-[1px] border-zinc-800' />
              </div>} 
            </div>
            <div className='flex justify-evenly gap-4 1024Max:flex-col 1024Max:items-center 1024Max:gap-8 my-40 relative'>
              <div className='absolute left-50 bottom-12 bg-imageProject dark:bg-imageProjectDark w-1/2 h-full z-[-99]'></div>
              <img src={imageMobile1} alt={title} className='w-1/5 1024Max:w-[55%] rounded-3xl border-[2px] border-zinc-800'/>
              <img src={imageMobile2} alt={title} className='w-1/5 1024Max:w-[55%] rounded-3xl border-[2px] border-zinc-800'/>
              <img src={imageMobile3} alt={title} className='w-1/5 1024Max:w-[55%] rounded-3xl border-[2px] border-zinc-800'/>
            </div> 
          </div>
      </div>
    </div>
  )
}
