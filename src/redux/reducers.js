import { options1, options2 } from '../utils/constants/constants'
const initialState = {
  selectedOrderBy: options2[0].value,
  selectedCategory: options1[0].value,
  books: [],
  totalBooks: 0,
  searchInput: "",
  loading: false, 
  currentPage: 1,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND_BOOKS":
      return { ...state, books: [...state.books, ...action.payload], loading: false };
      case "SET_CURRENT_PAGE":
        return { ...state, currentPage: action.payload };
    case "SET_SELECTED_ORDER_BY":
      return { ...state, selectedOrderBy: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_BOOKS":
      return { ...state, books: action.payload, loading: false };
    case "SET_TOTAL_BOOKS":
      return { ...state, totalBooks: action.payload };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default appReducer;