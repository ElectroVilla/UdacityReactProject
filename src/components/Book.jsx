import React, {useState, useContext} from 'react'
import '../css/App.css'
import {UpdateContext} from '../pages/App'

const Book = ({book}) => {
    const [selected, setSelected] = useState(book.shelf)
    const {updateBook} = useContext(UpdateContext)
    const handleClick = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        updateBook(book, e.target.value)
    }
    const shelf = book.shelf? book.shelf : 'none'
    const img = book.imageLinks ? `url("${book.imageLinks.thumbnail}")`: `url("https://via.placeholder.com/128x193?text=No%20Cover")`
  return (
    <li>
        <div className="book">
        <div className="book-top">
            {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`,}}></div> */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: img,}}></div>
            <div className="book-shelf-changer">
            <select value={shelf} onChange={(e) => handleClick(e)}>
                <option value="empty" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
            </div>
        </div>
        <div className="book-title">{book.title || "No Info...!"}</div>
        <div className="book-authors">{book.authors? book.authors[0] : "No Info...!"}</div>
        </div>
    </li>
  )
}

export default Book