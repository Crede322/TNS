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
      console.log(state.cartProducts);
    },
  },
});

export const { putCartData } = cartSlice.actions;
export default cartSlice.reducer;
