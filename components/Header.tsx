import Link from "next/link";
import { ButtonTheme } from './ButtonTheme'
import { ContactBtn } from '@/components/ContactBtn'

type MenuProps = {
  setMenuState: React.Dispatch<boolean>,
  menuState: boolean
}

const Header = ({ menuState, setMenuState }: MenuProps) => {
  return (
    <header className="absolute w-full z-99 px-[78px] 768Max:px-8 text-black dark:text-[#f6f6f6]">
      <div className="h-16 flex items-center justify-between font-EngraversGothic max-w-[1320px] mx-auto">
        <Link
          className='text-0.75rem ml-0 mr-12'
          href="/"
        >
          HOME
        </Link>
        <nav className="w-full text-center flex items-center justify-end 876Max:hidden">
          <Link
            className='text-0.75rem ml-0 mr-12'
            href="/project"
          >
            PROJECTS
          </Link>
          <ContactBtn />
          <ButtonTheme />
        </nav>
        <div className="hidden 876Max:flex items-center">
          <div
            onClick={() => setMenuState(!menuState)}
            className="cursor-pointer hidden 876Max:block rounded-lg p-1"
          >
            <span className="h-2px w-7 m-1 block bg-blackProject dark:bg-whiteProject"></span>
            <span className="h-2px w-7 m-1 block bg-blackProject dark:bg-whiteProject"></span>
            <span className="h-2px w-7 m-1 block bg-blackProject dark:bg-whiteProject"></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header