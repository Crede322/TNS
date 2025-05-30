import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlice";
import supabaseDataReducer from "../features/supabaseDataSlice";
import favoriteReducer from "../features/favoriteSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  supabaseData: supabaseDataReducer,
  favorites: favoriteReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
