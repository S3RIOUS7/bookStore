import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchBySearchBook = async (searchTerms, startIndex, selectedOrderBy, selectedCategory) => {
  
   try{
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchTerms}+subject:${selectedCategory}&startIndex=${startIndex}&orderBy=${selectedOrderBy}&maxResults=10`)
    if (!response.data) {
      throw new Error('Something went wrong')
    }
    console.log(response.data)
    return response.data
    
   } catch(error) {
    // console.error("Something went wrong", error);
    console.log('Error', error)
    };
};


