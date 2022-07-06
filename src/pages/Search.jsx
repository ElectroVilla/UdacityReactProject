import React, {useState} from 'react'
import '../css/App.css';
import Book from '../components/Book';
import {Link} from 'react-router-dom'
const Search = ({searchRes, searchFn}) => {
    const [query, setQuery] = useState('')
    const updateQuery = (val) => {
        setQuery(val)
        searchFn(val)
    }
    if (query == "") {
        searchRes = []
    }
  return (
    <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title, author, or ISBN" 
                value={query} onChange={(e)=> updateQuery(e.target.value)}/>
            </div>
        </div>
        <div className="search-books-results">
        <ol className="books-grid">
            {searchRes.length ? (searchRes.map(book => (
                <Book key={book.id} book={book} mode="add" />
            ))
            ) : (
                <li>No results</li>
                )}
        </ol>
        </div>
    </div>
  )
}

export default Search