import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

// тут SBData = SupaBaseData
interface dataTypes {
  headerSBData: [];
  filteredSBData: [];
  noResults: boolean;
}

const initialState: dataTypes = {
  headerSBData: [],
  filteredSBData: [],
  noResults: false,
};

const supabaseDataSlice = createSlice({
  name: "supabaseData",
  initialState,
  reducers: {
    putData(state, action) {
      state.headerSBData = action.payload;
    },
    putFilteredData(state, action) {
      state.filteredSBData = action.payload;
      if (state.filteredSBData.length === 0) {
        state.noResults = true;
      } else {
        state.noResults = false;
      }
    },
  },
});

export const { putData, putFilteredData } = supabaseDataSlice.actions;
export default supabaseDataSlice.reducer;
export const selectSupabaseData = (state: RootState) =>
  state.supabaseData.headerSBData;
export const selectFilteredSBData = (state: RootState) =>
  state.supabaseData.filteredSBData;
export const selectNoResults = (state: RootState) =>
  state.supabaseData.noResults;
