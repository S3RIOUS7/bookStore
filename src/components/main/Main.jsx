import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {API_KEY, BASE_URL} from '../../utils/constants/constants.js';



function Main(){

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      axios
      .get(`${BASE_URL}?q=programming&key=${API_KEY}`)
      .then((response)=>{
        setBooks(response.data.items || []);
      })
      .catch((error) => {
        console.error("Книги не отображаються", error);
      });
    }, 1000);
  }, []);




  return(
    <Fragment>
       
        <h2>Books</h2>
        
          {books.map((book) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        
        
    </Fragment>
  )
}

export default Main