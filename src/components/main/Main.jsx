import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import LoadMore from "../loadMore/LoadMore";
import  CardBook  from '../cardbook/CardBook'
import '../main/main.scss'

function Main() {
  const totalBooks = useSelector((state) => state.totalBooks);
  const books = useSelector((state) => state.books);
 
  
  if (books === undefined) {
    return (
      <div className="error">
        Sorry, books are not found
      </div>
    );
  }

  return (
    <Fragment>

      <h2>Books ({totalBooks})</h2>
      <div className="main-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
      {books.length < totalBooks && (
       <LoadMore/>
      )}
    </Fragment>
  );
}

export default Main;