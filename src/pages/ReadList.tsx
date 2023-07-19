import { useReadListStore } from '../store'

export const ReadList = () => {
  const booksForRead = useReadListStore(state => state.booksForRead)

  return (
    <>
      <h1 className="text-center text-4xl font-bold">Lista de lectura</h1>
      {
        booksForRead.map((book) => (
          <h1 key={book.ISBN}>{book.title}</h1>
        ))
      }
    </>
  )
}
