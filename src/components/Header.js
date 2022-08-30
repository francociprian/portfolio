import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

const Header = ({ menuState, setMenuState }) => {
  const location = useLocation()
  useEffect(() => {
    setMenuState(false)
  }, [location, setMenuState])

  return (
    <header className="absolute w-full z-99 px-[88px] 768Max:px-8 text-black dark:text-[#f6f6f6]">
      <div className="container fluid">
        <div className="h-28 flex items-center justify-between">
          <NavLink
            className={
              (navData) => navData.isActive ? 
              "text-0.75rem ml-0 mr-12 font-normal relative after:876Max:hidden after:content-[''] after:absolute after:left-1/2 after:top-4 after:rounded-full after:h-1 after:w-1 after:bg-[#626eff] after:block" 
                : 
              'text-0.75rem ml-0 mr-12'}
            to="/"
          >
            HOME
          </NavLink>
          <nav className="w-full text-center flex items-center justify-end 876Max:hidden">
            <NavLink 
              className={
                (navData) => navData.isActive ? 
                "text-0.75rem ml-0 mr-12 font-normal relative after:876Max:hidden after:content-[''] after:absolute after:left-1/2 after:top-4 after:rounded-full after:h-1 after:w-1 after:bg-[#626eff] after:block" 
                  : 
                'text-0.75rem ml-0 mr-12'}
              to="/projects"
            >
              PROJECTS
            </NavLink>
            <NavLink 
              className={
                (navData) => navData.isActive ? 
                "text-0.75rem ml-0 mr-12 font-normal relative after:876Max:hidden after:content-[''] after:absolute after:left-1/2 after:top-4 after:rounded-full after:h-1 after:w-1 after:bg-[#626eff] after:block" 
                  : 
                'text-0.75rem ml-0 mr-12'}
              to='/contact'
            >
              CONTACT
            </NavLink>
          </nav>
          <div
            onClick={() => setMenuState(!menuState)}
            className="cursor-pointer hidden 876Max:block"
          >
            <span className="h-2px w-8 m-1 block bg-blackProject dark:bg-whiteProject"></span>
            <span className="h-2px w-8 m-1 block bg-blackProject dark:bg-whiteProject"></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
