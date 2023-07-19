import { useReadListStore } from '../store'
import { type Book } from '../types'

interface Props {
  book: Book
}

const isAddedBook = (books: Book[], isbn: string) => {
  return books.some(book => book.ISBN === isbn)
}

export const BookItem = ({ book }: Props) => {
  const { addBook, booksForRead } = useReadListStore(state => state)

  const isAdded = isAddedBook(booksForRead, book.ISBN)

  return (
    <div key={book.ISBN} className="p-2 rounded bg-white">
      <figure>
        <img src={book.cover} alt={book.title} />
      </figure>
      <div className="mt-4">
        <h2 className="font-semibold text-2xl">{book.title}</h2>
        <p className='mb-4 italic'>{book.author.name}</p>
        <button
          className='w-full rounded px-4 py-2 bg-quaternary font-semibold text-lg text-white disabled:bg-gray-400'
          type='button'
          disabled={isAdded}
          onClick={() => { addBook(book) }}
        >
          { isAdded ? 'Agregado' : 'Agregar' }
        </button>
      </div>
    </div>
  )
}
