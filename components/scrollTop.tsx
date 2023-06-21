import { useState, useEffect } from "react";
import { ChevronUpIcon } from "./icons";

export const ScrollTop = () => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight >= 1000) {
      if (scrollTop + clientHeight >= 1100) {
        setShowScrollButton(true);
      }
      else {
        setShowScrollButton(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showScrollButton &&
        <div className='relative'>
          <button
            className='bg-[#626eff] text-white inline-block rounded-full p-1 fixed right-4 bottom-4'
            onClick={scrollToTop}
          >
            <ChevronUpIcon />
          </button>
        </div>}
    </>
  )
}