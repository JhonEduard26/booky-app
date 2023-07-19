interface Props {
  show: boolean
}

export const MobileMenu = ({ show }: Props) => {
  return (
      <div className={`transition-[top] duration-300 relative p-6 rounded-b border-2 border-gray-800 bg-white text-end ${show ? 'top-0' : 'top-[-360px]'} `}>
        <ul className=''>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>Lista de lectura</li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>Categorias</li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>Autores</li>
          <li className='p-2 py-4 font-semibold underline underline-offset-8'>Salir</li>
        </ul>
      </div>
  )
}
