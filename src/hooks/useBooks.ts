import books from '../data/data.json'

export const useBooks = () => {
  const filterByGenrer = (genre: string) => {
    return books.library.map(({ book }) => book).filter(book => book.genre === genre)
  }

  const allGenres = () => {
    const categories = books.library.map(({ book }) => book.genre)
    return [...new Set(categories)]
  }

  return {
    books: books.library.map(({ book }) => book),
    filterByGenrer,
    allGenres: allGenres()
  }
}
