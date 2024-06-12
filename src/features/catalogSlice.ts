import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";
import { useEffect } from "react";

interface catalogTypes {
  receivedQuery: string;
  queries: string[];
  newQueries: string[];
}

const initialState: catalogTypes = {
  receivedQuery: "2023 Год",
  queries: [
    "2023 Год",
    "AM4",
    "6 Ядер",
    "8 Ядер",
    "12 Потоков",
    "Свободный множитель",
    "Частота RAM: 3200МГц",
    "Встроенный видеочип",
  ],
  newQueries: [
    "AM4",
    "6 Ядер",
    "8 Ядер",
    "12 Потоков",
    "Свободный множитель",
    "Частота RAM: 3200МГц",
    "Встроенный видеочип",
  ],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    queryButtonClick(state, action: PayloadAction<string>) {
      state.receivedQuery = action.payload;
      state.newQueries = state.queries.filter(
        (el) => el !== state.receivedQuery,
      );
    },
    clearQueriesClick(state) {
      state.receivedQuery = "null";
      state.newQueries = state.queries;
    },
  },
});

export const { queryButtonClick, clearQueriesClick } = catalogSlice.actions;
export default catalogSlice.reducer;
export const selectCurrentQuery = (state: RootState) =>
  state.catalog.newQueries;
export const selectSelectedQuery = (state: RootState) =>
  state.catalog.receivedQuery;
