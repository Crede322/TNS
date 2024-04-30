import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/redux";

interface searchState {
  searchTerm: string;
}

const initialState: searchState = {
  searchTerm: "",
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
  },
});

export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
