import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface paginationState {
  currentPage: number;
}

const initialState: paginationState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    buttonPageClick(state, action: PayloadAction<number>) {
      return { ...state, currentPage: action.payload };
    },
  },
});

export const { buttonPageClick } = paginationSlice.actions;
export const selectCurrentPage = (state: RootState) =>
  state.pagination.currentPage;
export default paginationSlice.reducer;
