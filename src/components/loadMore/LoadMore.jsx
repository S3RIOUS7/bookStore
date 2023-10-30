import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from '../../redux/asyncActions'
import './loadMore.scss'

function LoadMore () {
  const books = useSelector((state) => state.books);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const selectedOrderBy = useSelector((state) => state.selectedOrderBy);
  const searchInput = useSelector((state) => state.searchInput);
  const dispatch = useDispatch();

  const loadMore = () => {
    const offset = books.length;
    const limit = 10
    dispatch(fetchBooks(searchInput, limit, selectedOrderBy, selectedCategory, offset));
  }
  
  return(
    <Fragment>
       <button className="loadMore" onClick={loadMore}>Load More</button>
    </Fragment>
  )

}

export default LoadMore