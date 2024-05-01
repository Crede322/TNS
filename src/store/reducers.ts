import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import supabaseDataReducer from "../features/supabaseDataSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  supabaseData: supabaseDataReducer,
});

export default rootReducer;
