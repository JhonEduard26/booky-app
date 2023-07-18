import { type Library } from '../types'

interface Props {
  library: Library[]
}

export default function BooksList ({ library }: Props) {
  return (
    <>
      <h1>Books List</h1>
      {
        library.map(({ book }) => (
          <div key={book.ISBN}>
            <figure>
              <img src={book.cover} alt={book.title} />
            </figure>
          <li>
            <h2>{book.title}</h2>
            <p>{book.author.name}</p>
          </li>
          </div>
        ))
      }
    </>
  )
}
