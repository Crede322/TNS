import Image from "next/image";
import { useFavoritesStore } from "@/store/FavoritesStore";

interface ButtonFavoriteProps {
  id: number;
}

export default function ButtonFavorite({ id }: ButtonFavoriteProps) {
  const addFavorite = useFavoritesStore((state) => state.addFavorite);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const isFavorite = useFavoritesStore((state) => state.favoritesList).some(
    (favoriteItemId) => favoriteItemId === id
  );

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!isFavorite) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`border-1 p-3 rounded-[8px] w-[50px] h-[50px] ${
        !isFavorite
          ? "border-[var(--color-gray)]"
          : "border-[var(--color-main)]"
      }`}
    >
      <Image
        src={`/icons/favoriteButton/${
          isFavorite ? "favoriteColored.svg" : "favorite.svg"
        }`}
        width={24}
        height={24}
        alt="add to favorite"
      />
    </button>
  );
}
