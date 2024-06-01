import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import supabaseDataReducer from "../features/supabaseDataSlice";
import paginationReducer from "../features/searchPaginationSlice";
import favoriteSlice from "../features/favoriteSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  supabaseData: supabaseDataReducer,
  pagination: paginationReducer,
  favorites: favoriteSlice,
});

export default rootReducer;
