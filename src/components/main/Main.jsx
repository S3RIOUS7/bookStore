import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadMore from "../loadMore/LoadMore";
import  CardBook  from '../cardbook/CardBook'
import '../main/main.scss'
import { Link } from "react-router-dom";


function Main() {
  const totalBooks = useSelector((state) => state.totalBooks);
  const books = useSelector((state) => state.books);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();


  if (books === undefined) {
    return (
      <div className="error">
        Sorry, books are not found
      </div>
    );
  }

  return (
    <Fragment>
      <div className="totalBooks"><h2>Books ({totalBooks})</h2></div>
      <div className="main-container">
        {books.map((book, index) => (
          <Link to={`/bookPage/${book.id}`} key={index} className="link-no-underline">
          <CardBook book={book}  />
           </Link>
        ))}
        </div>
      {books.length < totalBooks && (
       <LoadMore/>
      )}
    </Fragment>
  );
}

export default Main;