import { useBooks } from '../hooks/useBooks'
import { BookLayout } from '../layouts/BookLayout'
import { BookItem } from './'

export const BooksList = () => {
  const { books } = useBooks()

  return (
    <section className="grid grid-cols-1 gap-12 place-items-center">
      {
        books.map((book) => (
          <BookLayout key={book.ISBN} book={book}>
            <BookItem book={book} />
          </BookLayout>
        ))
      }
    </section>
  )
}
