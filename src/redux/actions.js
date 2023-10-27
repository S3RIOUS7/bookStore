import { fetchBySearchBook } from '../api/fetchBySearchBook'

export const setSelectedOrderBy = (orderBy) => {
  return { type: "SET_SELECTED_ORDER_BY", payload: orderBy };
};

export const setSelectedCategory = (category) => {
  return { type: "SET_SELECTED_CATEGORY", payload: category };
};

export const setBooks = (books) => {
  return { type: "SET_BOOKS", payload: books };
};

export const setTotalBooks = (totalBooks) => {
  return { type: "SET_TOTAL_BOOKS", payload: totalBooks };
};

export const setSearchInput = (searchInput) => {
  return { type: "SET_SEARCH_INPUT", payload: searchInput };
};

export const fetchBooks = (searchInput, limit, orderBy, category) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true)); // Установить состояние загрузки в true
      
      const res = await fetchBySearchBook(searchInput, limit, orderBy, category);

      dispatch(setBooks(res.items));
      dispatch(setTotalBooks(res.totalItems));
      dispatch(setLoading(false)); // Установить состояние загрузки в false
    } catch (error) {
      // Обработка ошибок, если необходимо
      dispatch(setLoading(false)); // Установить состояние загрузки в false в случае ошибки
    }
  };
};
export const setLoading = (loading) => {
  return { type: "SET_LOADING", payload: loading };
};