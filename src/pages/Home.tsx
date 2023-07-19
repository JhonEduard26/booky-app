import { BooksList } from '../components'
import books from '../data/data.json'

export const Home = () => {
  return (
    <>
      <h1 className='mb-12 text-center text-6xl font-bold'>Books List</h1>
      <BooksList library={books.library} />
    </>

  )
}
