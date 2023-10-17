import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../actions/appActions";
import { fetchBySearchBook } from "../../api/fetchBySearchBook";

function Main() {
  const books = useSelector((state) => state.books);
  const totalBooks = useSelector((state) => state.totalBooks);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const selectedOrderBy = useSelector((state) => state.selectedOrderBy);

  const dispatch = useDispatch();

  const loadBooks = async () => {
    const res = await fetchBySearchBook(
      searchInput,
      books.length,
      selectedOrderBy,
      selectedCategory
    );
    dispatch(setBooks([...books, ...res.items])
  };

  return (
    <Fragment>
      <h2>Books ({totalBooks})</h2>
      <div className="main-container">
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
        ))}
      </div>
      {books.length < totalBooks && (
        <button onClick={loadBooks}>Load More</button>
      )}
    </Fragment>
  );
}

export default Main;