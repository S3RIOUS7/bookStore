import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {BASE_URL} from '../../utils/constants/constants.js';
import CardBook from "../cardbook/CardBook.jsx";
import '../main/main.scss'

const API_KEY = process.env.REACT_APP_API_KEY
 
function Main(){
  
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    
    const loadBooks = () => {
      axios
        .get(`${BASE_URL}?key=${API_KEY}&startIndex=${startIndex}&maxResults=10`)
        .then((response) => {
          setBooks((prevBooks) => [...prevBooks, ...(response.data.items || [])]);
        })
        .catch((error) => {
          console.error("Книги не отображаются", error);
        });
    };

  
    loadBooks();
  }, [startIndex]);

 
  const loadMoreBooks = () => {
 
    setStartIndex((prevIndex) => prevIndex + 10);
  };

  return(
    <Fragment>
      
        <h2>Books</h2>
         <div className="main-container">

          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}

        </div>
        <button onClick={loadMoreBooks}>Load More</button>
    </Fragment>
  )
}

export default Main