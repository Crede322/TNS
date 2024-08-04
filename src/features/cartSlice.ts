import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface CartProduct {
  productId: number;
  quantity: number;
}

interface CartState {
  productsStore: CartProduct[];
}

const localStoredCart: CartProduct[] = JSON.parse(
  localStorage.getItem("cart") || "[]",
);

const initialState: CartState = {
  productsStore: localStoredCart,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {

    addCartData(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      const productCount = state.productsStore.findIndex(
        (product) => product.productId === productId,
      );

      if (productCount !== -1) {
        state.productsStore[productCount].quantity += 1;
      } else if (productCount === -1) {
        state.productsStore.push({ productId, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.productsStore));
    },

    removeCartData(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      const productCount = state.productsStore.findIndex(
        (product) => product.productId === productId,
      );

      if (productCount !== -1) {
        if (state.productsStore[productCount].quantity > 1) {
          state.productsStore[productCount].quantity -= 1;
        } else {
          state.productsStore.splice(productCount, 1);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.productsStore));
    },
    
  },
});

export const { addCartData, removeCartData } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.productsStore;
