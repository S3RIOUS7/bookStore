import React, { Fragment, useState } from "react";
import CardBook from "../cardbook/CardBook.jsx";
import '../main/main.scss';



function Main({ books }) {
  
  const [startIndex, setStartIndex] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);

  
  const loadMoreBooks = () => {
    setStartIndex((prevIndex) => prevIndex + 10);}
  

  return (
    <Fragment>
      <h2>Books ({totalBooks})</h2>
      <div className="main-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
      <button onClick={loadMoreBooks}>Load More</button>
    </Fragment>
  );
}

export default Main;