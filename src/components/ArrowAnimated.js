// #FEFBF6

export default function ArrowAnimated() {
  return (
    <>
      <div className="ico animated mx-auto text-center w-[50px] h-[50px] relative top-50">
        <div className="bg-[#000] dark:bg-whiteProject rounded-50 inline-block w-1|3 h-1|3 absolute top-0 left-50 translate-x-[-50%] translate-y-[-50%] origin-[0%] z-0 animate-blob-1-anim"></div>  
        <div className="bg-[#000] dark:bg-whiteProject rounded-50 inline-block w-[50px] h-[50px] absolute top-50 left-50 translate-x-[-50%] translate-y-[-50%] origin-[0%]"></div>
        <div className="bg-[#000] dark:bg-whiteProject rounded-50 inline-block w-1|3 h-1|3 absolute top-0 left-50 translate-x-[-50%] translate-y-[-50%] origin-[0%] z-[9] animate-blob-2-anim"></div>  
        <svg className="z-[9] relative" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612"  xmlSpace="preserve"  >
          <defs>
            <clipPath id="cut-off-arrow">
              <circle cx="306" cy="306" r="287"/>
            </clipPath>
            
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            
          </defs>
          <path style={{perspective: '9000px', transform: 'translateZ(0)'}}  className="animate-scrolly origin-bottom fill-whiteProject dark:fill-[#626eff]" d="M317.5,487.6c0.3-0.3,0.4-0.7,0.7-1.1l112.6-112.6c6.3-6.3,6.3-16.5,0-22.7c-6.3-6.3-16.5-6.3-22.7,0l-86,86V136.1c0-8.9-7.3-16.2-16.2-16.2c-8.9,0-16.2,7.3-16.2,16.2v301.1l-86-86c-6.3-6.3-16.5-6.3-22.7,0c-6.3,6.3-6.3,16.5,0,22.7l112.7,112.7c0.3,0.3,0.4,0.7,0.7,1c0.5,0.5,1.2,0.5,1.7,0.9c1.7,1.4,3.6,2.3,5.6,2.9c0.8,0.2,1.5,0.4,2.3,0.4C308.8,492.6,313.8,491.3,317.5,487.6z"/>
        </svg>
      </div>
    </>
  )
}
