import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface paginationState {
  currentPage: number;
}

const initialState: paginationState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "searchPagination",
  initialState,
  reducers: {
    searchPaginationButtonPageClick(state, action: PayloadAction<number>) {
      return { ...state, currentPage: action.payload };
    },
    searchPaginationButtonPagePrev(state) {
      state.currentPage -= 1;
    },
    searchPaginationButtonPageNext(state) {
      state.currentPage += 1;
    },
  },
});

export const {
  searchPaginationButtonPageClick,
  searchPaginationButtonPagePrev,
  searchPaginationButtonPageNext,
} = paginationSlice.actions;
export default paginationSlice.reducer;
export const selectSearchPagination = (state: RootState) =>
  state.searchPagination.currentPage;
