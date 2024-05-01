import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

const supabaseDataSlice = createSlice({
  name: "supabaseData",
  initialState: {
    data: [],
  },
  reducers: {
    putData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { putData } = supabaseDataSlice.actions;
export default supabaseDataSlice.reducer;
export const selectSupabaseData = (state: RootState) => state.supabaseData.data;
