import { BookLayout } from '../layouts/BookLayout'
import { type Book } from '../types'
import { BookItem } from './'

interface Props {
  books: Book[]
}

export const BooksList = ({ books }: Props) => {
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
