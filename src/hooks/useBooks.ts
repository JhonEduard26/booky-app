import books from '../data/data.json'

export const useBooks = () => {
  const filterByCategory = (category: string) => {
    return books.library.filter(({ book }) => book.genre === category)
  }

  return {
    books: books.library.map(({ book }) => book),
    filterByCategory
  }
}
