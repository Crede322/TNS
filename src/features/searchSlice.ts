import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface searchState {
  searchTerm: string;
  searchResult: string;
}

const initialState: searchState = {
  searchTerm: "",
  searchResult: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    clearSearchTerm(state) {
      state.searchTerm = "";
    },
    setSearchResult(state) {
      state.searchResult = state.searchTerm;
    },
  },
});

export const { setSearchTerm, clearSearchTerm, setSearchResult } =
  searchSlice.actions;
export default searchSlice.reducer;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export const selectSearchResult = (state: RootState) =>
  state.search.searchResult;
