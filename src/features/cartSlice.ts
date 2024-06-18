import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface cartTypes {
  cartProducts: Record<number, string>;
}

const localStoredCart: {} = JSON.parse(localStorage.getItem("cart") || "{}");

const initialState: cartTypes = {
  cartProducts: localStoredCart,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    putCartData(
      state,
      action: PayloadAction<{ productId: number; quantity: string }>,
    ) {
      const { productId, quantity } = action.payload;
      console.log(productId, quantity);
      const updatedCartProducts = {
        ...state.cartProducts,
        [productId]: quantity,
      };
      return {
        ...state,
        cartProducts: updatedCartProducts,
      };
      console.log(state.cartProducts);
    },
  },
});

export const { putCartData } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.cartProducts;
