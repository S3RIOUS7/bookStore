import Header from "../../components/header/Header";
import { Fragment } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookPage () {
  const { bookId } = useParams();
  const books = useSelector((state) => state.books);
  const selectedBook = books.find((book) => book.id === bookId);
  
  
  return(
    <Fragment>
      <Header />
      <div>
      <h1>{selectedBook.volumeInfo.title}</h1>
      <p>Автор: {selectedBook.volumeInfo.authors}</p>
      <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
      <p>{selectedBook.volumeInfo.description}</p>
    </div>
    </Fragment>
  )

}

export default BookPage