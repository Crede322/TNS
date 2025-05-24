import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FavoritesStore = {
  favoritesList: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoritesList: [],
      addFavorite: (incomingId: number) => {
        const alreadyExists = get().favoritesList.findIndex((id) => {
          return id === incomingId;
        });
        if (alreadyExists === -1) {
          set((state) => ({
            favoritesList: [...state.favoritesList, incomingId],
          }));
        }
      },
      removeFavorite: (incomingId: number) => {
        set((state) => ({
          favoritesList: state.favoritesList.filter((id) => id !== incomingId),
        }));
      },
    }),
    {
      name: "favorite-item", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
