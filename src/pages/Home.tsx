import { BooksList } from '../components'
import { useBooks } from '../hooks/useBooks'
import { useReadListStore } from '../store'

export const Home = () => {
  const { books } = useBooks()
  const booksForRead = useReadListStore(state => state.booksForRead)

  return (
    <>
      <h1 className='mb-2 text-center text-4xl font-bold'>Libros disponibles: {books.length - booksForRead.length}</h1>
      <h1 className='mb-12 text-center text-3xl font-semibold'>En lista de lectura: {booksForRead.length}</h1>
      <BooksList />
    </>

  )
}
