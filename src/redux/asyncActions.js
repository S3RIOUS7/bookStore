import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";
import {
  setLoading,
  appendBooks,
  setBooks,
  setTotalBooks,
} from './actions.js';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchBySearchBook = async (searchTerms, startIndex, selectedOrderBy, selectedCategory) => {
  
   try{
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchTerms}+subject:${selectedCategory}&startIndex=${startIndex}&orderBy=${selectedOrderBy}&maxResults=10`)
    if (!response.data) {
      throw new Error('Something went wrong')
    }
   
    return response.data
    
   } catch(error) {
   
    console.log('Error', error)
    
    };
};

export const fetchBooks = (searchInput, limit, orderBy, category, offset) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true)); // Установить состояние загрузки в true
      
      const res = await fetchBySearchBook(searchInput, limit, orderBy, category, offset);
      dispatch(appendBooks(res.items));
      dispatch(setBooks(res.items));
      dispatch(setTotalBooks(res.totalItems));
      dispatch(setLoading(false)); // Установить состояние загрузки в false
    } catch (error) {
      // Обработка ошибок, если необходимо
      dispatch(setLoading(false)); // Установить состояние загрузки в false в случае ошибки
    }
  };
  
};
export const fetchNextPage = (searchInput, limit, orderBy, category, offset) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true)); // Установить состояние загрузки в true
      
      const res = await fetchBySearchBook(searchInput, limit, orderBy, category, offset);
      dispatch(appendBooks(res.items)); // Добавьте новые книги к существующему списку
      dispatch(setLoading(false)); // Установить состояние загрузки в false
    } catch (error) {
      // Обработка ошибок, если необходимо
      dispatch(setLoading(false)); // Установить состояние загрузки в false в случае ошибки
    }
  };
};