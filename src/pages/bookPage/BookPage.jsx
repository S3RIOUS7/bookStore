import Header from "../../components/header/Header";
import { Fragment } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import '../bookPage/bookPage.scss'
function BookPage () {
  const { bookId } = useParams();
  const books = useSelector((state) => state.books);
  const selectedBook = books.find((book) => book.id === bookId);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); 
  };

  return(
    <Fragment>
      <Header />
      <div className="bookPage-container">
      <div className="imgContainer"><img src={selectedBook?.volumeInfo?.imageLinks?.thumbnail} className="imgBookPage" alt="Book Cover" /></div>
      <div className="bookPageInfo">
        <h1>{selectedBook?.volumeInfo?.title}</h1>
      <p>Автор: {selectedBook?.volumeInfo?.authors}</p>
      <p>Описание : {selectedBook?.volumeInfo?.description}</p>
      </div>
      </div>
      <button className="bookPageButton" onClick={goBack}>Back</button>
    
    </Fragment>
  )

}

export default BookPage