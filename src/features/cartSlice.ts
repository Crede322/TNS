import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface CartProduct {
  productId: number;
  quantity: number;
}

interface CartState {
  productsStore: CartProduct[];
  totalQuantity: number;
}

const calculateTotalQuantity = (productsStore: CartProduct[]): number => {
  return productsStore.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.quantity;
  }, 0);
};

const localStoredCart: CartProduct[] = JSON.parse(
  localStorage.getItem("cart") || "[]",
);

const initialState: CartState = {
  productsStore: localStoredCart,
  totalQuantity: calculateTotalQuantity(localStoredCart),
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
        state.productsStore = state.productsStore.map((product) =>
          product.productId === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else if (productCount === -1) {
        state.productsStore.push({ productId, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.productsStore));
      state.totalQuantity = calculateTotalQuantity(state.productsStore);
    },

    removeCartData(state, action: PayloadAction<{ productId: number }>) {
      const { productId } = action.payload;
      const productCount = state.productsStore.findIndex(
        (product) => product.productId === productId,
      );

      if (productCount !== -1) {
        if (state.productsStore[productCount].quantity > 1) {
          state.productsStore = state.productsStore.map((product) =>
            product.productId === productId
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          );
        } else {
          state.productsStore = state.productsStore.filter(
            (product) => product.productId !== productId,
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.productsStore));
      state.totalQuantity = calculateTotalQuantity(state.productsStore);
    },
  },
});

export const { addCartData, removeCartData } = cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.productsStore;
export const totalQuantity = (state: RootState) => state.cart.totalQuantity;
