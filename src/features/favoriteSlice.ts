import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface favoriteTypes {
  wishlist: [];
}

const initialState: favoriteTypes = {
  wishlist: [],
};

const favoriteSlice = createSlice({
  name: "favoritesData",
  initialState,
  reducers: {
    putFavoriteData(state, action) {
      state.wishlist = action.payload;
    },
  },
});

export const { putFavoriteData } = favoriteSlice.actions;
export default favoriteSlice.reducer;
export const selectFavorites = (state: RootState) => state.favorites.wishlist;
