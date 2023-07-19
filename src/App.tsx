import { BooksList, Header } from './components'
import books from './data/data.json'

function App () {
  return (
    <>
      <Header />
      <main className='px-8 py-24 bg-primary'>
        <h1 className='mb-12 text-center text-6xl font-bold'>Books List</h1>
        <BooksList library={books.library} />
      </main>
    </>
  )
}

export default App
