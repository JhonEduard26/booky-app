import React, { useState } from 'react'
import { BooksList } from '../components'
import { useBooks } from '../hooks/useBooks'
import { useReadListStore } from '../store'

export const Home = () => {
  const [genre, setGenre] = useState('Todas')
  const { books, allGenres, filterByGenrer } = useBooks()
  const booksForRead = useReadListStore(state => state.booksForRead)

  const onGenreChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(target.value)
  }

  const filterBooks = () => {
    if (genre === 'Todas') return books

    return filterByGenrer(genre)
  }

  const filteredBooks = filterBooks()

  return (
    <>
      <h1 className="mb-2 text-center text-4xl font-bold">Libros disponibles: {books.length - booksForRead.length}</h1>
      <h1 className="mb-12 text-center text-3xl font-semibold">En lista de lectura: {booksForRead.length}</h1>
      <div className="mb-6 text-center">
        <h3 className="mb-4 text-xl">Filtrar por género</h3>
        <select className="p-2 rounded outline" name="genres" onChange={onGenreChange}>
          <option value="Todas">Todas</option>
          {
            allGenres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))
          }
        </select>
      </div>
      <BooksList books={filteredBooks} />
    </>

  )
}
