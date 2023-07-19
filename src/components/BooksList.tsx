import { type Library } from '../types'
import { BookItem } from './'

interface Props {
  library: Library[]
}

export const BooksList = ({ library }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-12 place-items-center">
      {
        library.map(({ book }) => (
          <BookItem key={book.ISBN} book={book} />
        ))
      }
    </section>
  )
}
