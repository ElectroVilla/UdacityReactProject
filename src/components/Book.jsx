import React, {useState, useContext} from 'react'
import '../css/App.css'
import {UpdateContext} from '../pages/App'
// import Select from 'react-select'

const Book = ({book, mode}) => {
    const [selected, setSelected] = useState(book.shelf)
    const {updateBook, addBook, getBookShelf} = useContext(UpdateContext)
    const handleClick = (e) => {
        e.preventDefault()
        let newShelf = e.target.value
        mode === 'update' ? updateBook(book, newShelf) : addBook(book, newShelf)
    }
    const shelf = book.shelf? book.shelf : getBookShelf(book)
    const img = book.imageLinks ? `url("${book.imageLinks.thumbnail}")`: `url("https://via.placeholder.com/128x193?text=No%20Cover")`
    // const options = [
    //     { value: 'empty', label: 'Move to...', disabled: true },
    //     { value: 'chocolate', label: 'Chocolate', disabled: false },
    //     { value: 'strawberry', label: 'Strawberry', disabled: false },
    //     { value: 'vanilla', label: 'Vanilla', disabled: false }
    // ]
    // const colourStyles = {
    // control: styles => ({ ...styles, width: '100%', height: '100%', opacity: '0', cursor: 'pointer' }),
    //     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //         // const color = chroma(data.color);
    //         return {
    //             ...styles, 
    //             backgroundColor: isSelected ? '#FFC0F0' : 'white', 
    //             color: isDisabled ? '#000' : '#0000FF',
    //             // cursor: isDisabled ? 'not-allowed' : 'default',
    //             cursor: isDisabled ? 'default' : 'pointer',
    //             borderBottom: '1px solid #0000FF',
    //             fontWeight: isSelected ? 'bold' : 'normal',
    //         };
    //     },
    // };
    
  return (
    <li>
        <div className="book">
        <div className="book-top">
            {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`,}}></div> */}
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: img,}}></div>
            <div className="book-shelf-changer">
                    {/* <Select styles={colourStyles} defaultValue={options[1]} options={options}/> */}
                
            <select defaultValue={shelf} onChange={(e) => handleClick(e)}>
                <option value="empty" disabled>Move to...</option>
                {mode === 'add' && <option value="none">None</option>}
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                {mode === 'update' && <option value="none">None</option>}
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