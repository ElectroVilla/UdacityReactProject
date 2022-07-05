import "../css/App.css";
import { useState, useEffect } from "react";
import Books from "./Books";
import Search from "./Search";
import {Routes, Route, useNavigate} from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";

function App() {
  let navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // BooksAPI.getAll().then(setBooks);
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll()
      setBooks(res)
    }
    getAllBooks();
  }, [])

  return (
    <Routes  className="app">
      <Route exact path="/" element={<Books books={books} />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
