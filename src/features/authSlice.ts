import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface AuthProps {
  authLoginModal: boolean;
}

const initialState: AuthProps = {
  authLoginModal: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    showAuthModal(state) {
      state.authLoginModal = true;
    },
    hideAuthModal(state) {
      state.authLoginModal = false;
    },
  },
});

export default authSlice.reducer;
export const { showAuthModal, hideAuthModal } = authSlice.actions;
export const selectModal = (state: RootState) => state.auth.authLoginModal;
