import { BookReadItem } from '../components/BookReadItem'
import { BookLayout } from '../layouts/BookLayout'
import { useReadListStore } from '../store'

export const ReadList = () => {
  const booksForRead = useReadListStore(state => state.booksForRead)

  if (booksForRead.length === 0) {
    return (
      <h1 className="text-center text-4xl font-bold">No hay libros en la lista</h1>
    )
  }

  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold">Lista de lectura</h1>
      <section className="grid grid-cols-1 gap-12 place-items-center">
          {
            booksForRead.map((book) => (
              <BookLayout key={book.ISBN} book={book}>
                <BookReadItem book={book} />
              </BookLayout>
            ))
          }
      </section>
    </>
  )
}
