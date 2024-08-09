import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/redux";

interface CartProduct {
  productId: number;
  quantity: number;
}

interface CartState {
  productsStore: CartProduct[];
  totalQuantity: number;
  cartOverlay: boolean;
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
  cartOverlay: false,
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
      state.totalQuantity = calculateTotalQuantity(state.productsStore);
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
      state.totalQuantity = calculateTotalQuantity(state.productsStore);
    },

    showPopup(state) {
      state.cartOverlay = true;
    },
    hidePopup(state) {
      state.cartOverlay = false;
    },
  },
});

export const { addCartData, removeCartData, showPopup, hidePopup } =
  cartSlice.actions;
export default cartSlice.reducer;
export const selectCart = (state: RootState) => state.cart.productsStore;
export const totalQuantity = (state: RootState) => state.cart.totalQuantity;
export const cartOverlay = (state: RootState) => state.cart.cartOverlay;
