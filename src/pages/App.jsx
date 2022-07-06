import "../css/App.css";
import React, { useState, useEffect } from "react";
import BooksPage from "./BooksPage";
import Search from "./Search";
import {Routes, Route} from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";

const UpdateContext = React.createContext()

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then(setBooks);
  }, [])
  const searchForABook = async (query) => {
    const res = await BooksAPI.search(query)
    setSearch(res)
    console.log(res)
  }
  const updateBook = (book, shelf) => {
    console.log(`Updating ${book.title} to ${shelf}`)
    let newBooks = [...books]
    newBooks[newBooks.findIndex(b => b.id === book.id)].shelf = shelf
    setBooks(newBooks)
    BooksAPI.update(book, shelf)
  }
  const addBook = (book, shelf) => {
    console.log(`Adding ${book.title} to ${book.shelf}`)
    book.shelf = shelf
    let newBooks = [...books]
    newBooks.push(book)
    setBooks(newBooks)
    BooksAPI.update(book, book.shelf)
  }
  const getBookShelf = (book) => {
    return books.find(b => b.id === book.id) ? books.find(b => b.id === book.id).shelf : "none"
  }
  return (
    <UpdateContext.Provider value={ {updateBook, addBook, getBookShelf} }>
      <Routes  className="app">
        <Route exact path="/" element={<BooksPage books={books} />} />
        <Route path="/search" element={<Search searchRes={search} searchFn={searchForABook} />} />
      </Routes>
    </UpdateContext.Provider>
  );
}

export {App, UpdateContext};
