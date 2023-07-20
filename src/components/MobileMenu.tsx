import { Link } from 'wouter'

interface Props {
  show: boolean
  toggleMenu: () => void
}

export const MobileMenu = ({ show, toggleMenu }: Props) => {
  return (
      <div className={`transition-[top] duration-300 relative p-6 rounded-b border-2 border-gray-800 bg-white text-end ${show ? 'top-0' : 'top-[-360px]'} `}>
        <ul>
          <li className='p-2 py-4 font-semibold underline underline-offset-8' onClick={toggleMenu}>
            <Link href='./lista-lectura'>Lista de lectura</Link>
          </li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8' onClick={toggleMenu}>
            <Link href='./generos'>Géneros</Link>
          </li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8' onClick={toggleMenu}>
            <Link href='./autores'>Autores</Link>
          </li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8' onClick={toggleMenu}>Salir</li>
        </ul>
      </div>
  )
}
