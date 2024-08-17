import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import supabaseDataReducer from "../features/supabaseDataSlice";
import searchPaginationReducer from "../features/searchPaginationSlice";
import catalogPaginationReducer from "../features/catalogPaginationSlice";
import favoriteReducer from "../features/favoriteSlice";
import catalogReducer from "../features/catalogSlice";
import cartReducer from "../features/cartSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  supabaseData: supabaseDataReducer,
  searchPagination: searchPaginationReducer,
  catalogPagination: catalogPaginationReducer,
  favorites: favoriteReducer,
  catalog: catalogReducer,
  cart: cartReducer,
});

export default rootReducer;
