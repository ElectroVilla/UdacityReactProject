import React from 'react'
import Shelf from '../components/Shelf'
import '../css/App.css'
import {Link} from 'react-router-dom'

const Books = ({books}) => {
    console.log(books)
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read') 
    const shelves = [{"name":"Currently Reading", "content":currentlyReading}, {"name":"Want to Read", "content":wantToRead}, {"name":"Read", "content":read}]
  return (
    <div className="list-books">
        <div className="list-books-title">
        <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {shelves.map(shelf => (
            <Shelf key={shelf.name} name={shelf.name} books={shelf.content} />
        ))}
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
  )
}

export default Books