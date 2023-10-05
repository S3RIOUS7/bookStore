import axios from "axios";
import { BASE_URL } from "../utils/constants/constants";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchBySearchBook = async (searchTerms, startIndex) => {
   try{
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchTerms}&filter=partial&startIndex=${startIndex}&maxResults=10`)
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


