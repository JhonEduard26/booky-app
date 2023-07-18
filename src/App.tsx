import './App.css'
import BooksList from './components/BooksList'
import books from './data/data.json'

function App () {
  return (
    <>
      <header>

      </header>
        <h1>Booky app</h1>
      <main>
        <BooksList library={books.library} />
      </main>
    </>
  )
}

export default App
