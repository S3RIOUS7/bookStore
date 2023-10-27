import { legacy_createStore as createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import appReducer from "../redux/reducers.js";


const store = createStore(appReducer, applyMiddleware(thunk));

export default store;