import { options1, options2 } from '../utils/constants/constants'
const initialState = {
  selectedOrderBy: options2[0],
  selectedCategory: options1[0],
  books: [],
  totalBooks: 0,
  searchInput: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_ORDER_BY":
      return { ...state, selectedOrderBy: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_BOOKS":
      return { ...state, books: action.payload };
    case "SET_TOTAL_BOOKS":
      return { ...state, totalBooks: action.payload };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

export default appReducer;