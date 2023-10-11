import React from "react";
import '../cardbook/cardBook.scss'
function CardBook ({ book }){
  
  return(
    <div className="card-book-container">
        <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="Book Cover" />
      <div className="book-details">
        <p>Category: {book?.volumeInfo?.categories}</p>
        <p>Title: {book?.volumeInfo?.title}</p>
        <p>Author: {book?.volumeInfo?.authors}</p>
      </div>
    </div>
  )


}
export default CardBook;