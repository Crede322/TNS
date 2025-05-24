import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  id: number;
  quantity: number;
}

type CartStore = {
  cartItemsList: CartItem[] | [];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItemsList: [],
      addToCart: (incomingId: number, incomingQuantity?: number) => {
        const alreadyExists = get().cartItemsList.findIndex((cartItem) => {
          return cartItem.id === incomingId;
        });
        if (alreadyExists === -1) {
          set((state) => ({
            cartItemsList: [
              ...state.cartItemsList,
              { id: incomingId, quantity: 1 },
            ],
          }));
        }
      },
      removeFromCart: (incomingId: number) => {
        set((state) => ({
          cartItemsList: state.cartItemsList.filter(
            (cartItem) => cartItem.id !== incomingId
          ),
        }));
      },
    }),
    {
      name: "cart-item", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
