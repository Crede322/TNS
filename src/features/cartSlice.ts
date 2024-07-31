import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface CartProduct {
 productId: number;
 quantity: number;
};

interface CartState {
  productsStore: CartProduct[];
}

const localStoredCart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
console.log(localStoredCart, "лог");

const initialState: CartState = {
  productsStore: localStoredCart,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    putCartData(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>,
    ) {
      const { productId, quantity } = action.payload;
      const productCount = state.productsStore.findIndex(product => product.productId === productId);

      if (productCount !== -1) {
        state.productsStore[productCount].quantity += quantity;
      } else if (productCount === -1) {
        state.productsStore.push({ productId, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(state.productsStore));
    },
  },
});

export const { putCartData } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.productsStore;
