import { Link } from 'wouter'

interface Props {
  show: boolean
}

export const MobileMenu = ({ show }: Props) => {
  return (
      <div className={`transition-[top] duration-300 relative p-6 rounded-b border-2 border-gray-800 bg-white text-end ${show ? 'top-0' : 'top-[-360px]'} `}>
        <ul className=''>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>
            <Link href='./lista-lectura'>Lista de lectura</Link>
          </li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>
            <Link href='./categorias'>Categorias</Link>
          </li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>
            <Link href='./autores'>Autores</Link>
          </li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>Salir</li>
        </ul>
      </div>
  )
}
