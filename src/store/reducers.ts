import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/counter/searchSlice";

const rootReducer = combineReducers({
  search: searchReducer,
});

export default rootReducer;
