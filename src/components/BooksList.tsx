import { type Library } from '../types'

interface Props {
  library: Library[]
}

export const BooksList = ({ library }: Props) => {
  return (
      <section className="grid grid-cols-1 gap-12 place-items-center">
        {
          library.map(({ book }) => (
            <div key={book.ISBN} className="p-2 rounded bg-white">
              <figure>
                <img src={book.cover} alt={book.title} />
              </figure>
              <div className="">
                <h2 className="font-semibold text-2xl">{book.title}</h2>
                <p>{book.author.name}</p>
              </div>
            </div>
          ))
        }
      </section>
  )
}
