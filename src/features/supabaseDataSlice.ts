import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

// тут SBData = SupaBaseData
interface dataTypes {
  headerSBData: [];
  filteredSBData: [];
}

const initialState: dataTypes = {
  headerSBData: [],
  filteredSBData: [],
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
    },
  },
});

export const { putData, putFilteredData } = supabaseDataSlice.actions;
export default supabaseDataSlice.reducer;
export const selectSupabaseData = (state: RootState) =>
  state.supabaseData.headerSBData;
export const selectFilteredSBData = (state: RootState) =>
  state.supabaseData.filteredSBData;
