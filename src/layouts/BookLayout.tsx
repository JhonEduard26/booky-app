import { type Book } from '../types'

interface Props {
  children: React.ReactNode
  book: Book
}

export const BookLayout = ({ children, book }: Props) => {
  return (
    <div key={book.ISBN} className="relative max-w-xs my-0 p-2 rounded bg-white">
    <img src={book.cover} alt={book.title} />
    <div className="mt-4 px-2">
      <h2 className="font-semibold text-2xl">{book.title}</h2>
      <p className="mb-2 italic">{book.author.name}</p>
      { children }
    </div>
  </div>
  )
}
