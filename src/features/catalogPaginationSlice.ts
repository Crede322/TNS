import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface paginationState {
  currentPage: number;
}

const initialState: paginationState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "catalogPagination",
  initialState,
  reducers: {
    catalogPaginationButtonPageClick(state, action: PayloadAction<number>) {
      return { ...state, currentPage: action.payload };
    },
    catalogPaginationButtonPagePrev(state) {
      state.currentPage -= 1;
    },
    catalogPaginationButtonPageNext(state) {
      state.currentPage += 1;
    },
  },
});

export const {
  catalogPaginationButtonPageClick,
  catalogPaginationButtonPagePrev,
  catalogPaginationButtonPageNext,
} = paginationSlice.actions;
export default paginationSlice.reducer;
export const selectCatalogPagination = (state: RootState) =>
  state.catalogPagination.currentPage;
