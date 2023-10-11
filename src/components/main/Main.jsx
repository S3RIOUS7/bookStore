import {  useState } from "react";
import React, { Fragment} from "react";
import CardBook from "../cardbook/CardBook.jsx";
import '../main/main.scss';
import { fetchBySearchBook } from "../../api/fetchBySearchBook";


function Main({ books, totalBooks, searchInput, setBooks}) {

  const [startIndex, setStartIndex] = useState(0);
  
  const loadMoreBooks = async () => {
    const res = await fetchBySearchBook(searchInput, startIndex + 10);
    setBooks((prevBooks) => [...prevBooks, ...res.items]);
    setStartIndex((prevIndex) => prevIndex + 10);
  };
 console.log(books)

  return (
    <Fragment>
      
      <h2>Books ({totalBooks}) </h2>
      <div className="main-container">
        
        {books?.map((book) => (
          <CardBook key={book.id} book={book} />
          
        ))}
      </div>
      {books?.length < totalBooks && (
        <button onClick={loadMoreBooks}>Load More</button>
      )}
    </Fragment>
  );
}

export default Main;