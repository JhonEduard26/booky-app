import { useState } from 'react'
import { Link } from 'wouter'

import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const toggleIcon = () => {
    return showMenu
      ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>)
      : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>)
  }

  return (
    <header className="z-10 w-full h-16 px-4 fixed bg-white border-2 border-b-gray-800">
      <nav className="w-full h-full">
        <ul className="flex justify-between items-center h-full">
          <li onClick={() => { setShowMenu(false) }}>
            <Link className="font-semibold text-xl" href="/">Booky</Link>
          </li>
          <li onClick={toggleMenu}>
            {toggleIcon()}
          </li>
        </ul>
      </nav>
      <MobileMenu show={showMenu} toggleMenu={toggleMenu}/>
  </header>
  )
}
