import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import supabaseDataReducer from "../features/supabaseDataSlice";
import paginationReducer from "../features/searchPaginationSlice";
import favoriteReducer from "../features/favoriteSlice";
import catalogReducer from "../features/catalogSlice";
import cartReducer from "../features/cartSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  supabaseData: supabaseDataReducer,
  pagination: paginationReducer,
  favorites: favoriteReducer,
  catalog: catalogReducer,
  cart: cartReducer,
});

export default rootReducer;
