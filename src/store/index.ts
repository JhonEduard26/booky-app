import { create } from 'zustand'

import { type Book } from '../types'

interface ReadListStore {
  booksForRead: Book[]
  addBook: (book: Book) => void
  removeBook: (isbn: string) => void
}

export const useReadListStore = create<ReadListStore>((set) => ({
  booksForRead: [],
  addBook: (book) => { set((state) => ({ booksForRead: [...state.booksForRead, book] })) },
  removeBook: (isbn) => { set((state) => ({ booksForRead: state.booksForRead.filter((b) => b.ISBN !== isbn) })) }
}))
