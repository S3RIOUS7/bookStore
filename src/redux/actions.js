

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


export const setLoading = (loading) => {
  return { type: "SET_LOADING", payload: loading };
};

export const appendBooks = (books) => {
  return { type: "APPEND_BOOKS", payload: books };
};

export const setCurrentPage = (page) => {
  return { type: "SET_CURRENT_PAGE", payload: page };
};

export const setSearchButtonClicked = (clicked) => {
  return { type: "SET_SEARCH_BUTTON_CLICKED", payload: clicked };
};