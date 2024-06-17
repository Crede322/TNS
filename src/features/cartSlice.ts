import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface cartTypes {
  cartProducts: number[];
}

let localStoredCart: string[] = JSON.parse(
  localStorage.getItem("cart") || "[]",
);

const initialState: cartTypes = {
  cartProducts: localStoredCart.map(Number),
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    putCartData(state, action) {
      state.cartProducts = [12, 12, 12, 12];
    },
  },
});

export const { putCartData } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.cartProducts;
