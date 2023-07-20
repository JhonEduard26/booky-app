import { useBooks } from '../hooks/useBooks'

export const Genres = () => {
  const { allGenres } = useBooks()
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-bold">Géneros</h1>
      <div className="flex flex-wrap gap-6">
        {
          allGenres.map((genre) => (
            <span
              key={genre}
              className="p-2 text-2xl rounded bg-secondary text-white"
            >
              {genre}
            </span>
          ))
        }
      </div>
    </>
  )
}
