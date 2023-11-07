import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNextPage } from '../../redux/asyncActions';


import './loadMore.scss'

function LoadMore() {
  const books = useSelector((state) => state.books);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const selectedOrderBy = useSelector((state) => state.selectedOrderBy);
  const searchInput = useSelector((state) => state.searchInput);
  
  const dispatch = useDispatch();
  const offset = books.length;
  

  const loadMore = () => {
    dispatch(fetchNextPage(searchInput, selectedOrderBy, selectedCategory, offset));
  };

  return (
    <Fragment>
      <button className="loadMore" onClick={loadMore}>Load More</button>
    </Fragment>
  )
}

export default LoadMore;