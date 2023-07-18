import BooksList from './components/BooksList'
import books from './data/data.json'

function App () {
  return (
    <>
      <header>

      </header>
      <main className='p-12 bg-primary'>
        <h1 className='mb-12 text-center text-6xl font-bold'>Booky app</h1>
        <BooksList library={books.library} />
      </main>
    </>
  )
}

export default App
