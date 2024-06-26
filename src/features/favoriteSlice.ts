import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface favoriteTypes {
  wishlistIDs: number[];
}

let storedFavorites: string[] = JSON.parse(
  localStorage.getItem("favorites") || "[]",
);

const initialState: favoriteTypes = {
  wishlistIDs: storedFavorites.map(Number),
};

const favoriteSlice = createSlice({
  name: "favoritesData",
  initialState,
  reducers: {
    putFavoriteData(state, action) {
      if (!storedFavorites.includes(action.payload)) {
        storedFavorites.push(action.payload);
      } else {
        storedFavorites = storedFavorites.filter(
          (item) => item !== action.payload,
        );
      }
      localStorage.setItem("favorites", JSON.stringify(storedFavorites));
      state.wishlistIDs = storedFavorites.map(Number);
    },
  },
});

export const { putFavoriteData } = favoriteSlice.actions;
export default favoriteSlice.reducer;
export const selectFavorites = (state: RootState) =>
  state.favorites.wishlistIDs;
