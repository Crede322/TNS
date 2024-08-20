import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface searchTypes {
  searchTerm: string;
  searchResult: string;
  loading: boolean;
  error: string | null;
  searchHover: boolean;
}

const initialState: searchTypes = {
  searchTerm: "",
  searchResult: "",
  loading: false,
  error: null,
  searchHover: false,
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
    setReloadedResult(state, action: PayloadAction<string>) {
      state.searchResult = action.payload;
    },
    searchMouseOn(state) {
      state.searchHover = true;
    },
    searchMouseOff(state) {
      state.searchHover = false;
    },
  },
});

export const {
  setSearchTerm,
  clearSearchTerm,
  setSearchResult,
  setReloadedResult,
  searchMouseOn,
  searchMouseOff,
} = searchSlice.actions;
export default searchSlice.reducer;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
export const selectSearchResult = (state: RootState) =>
  state.search.searchResult;
export const selectSearchHover = (state: RootState) => state.search.searchHover;
