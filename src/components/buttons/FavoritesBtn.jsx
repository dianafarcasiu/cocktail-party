import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../contexts/FavoritesContext";

function FavoritesBtn({ item, type }) {
  const {
    isFavoriteDrink,
    isFavoriteCollection,
    toggleFavoriteDrink,
    toggleFavoriteCollection,
  } = useFavorites();
  const [isHovered, setIsHovered] = useState(false);

  const isFavorite =
    type === "drink"
      ? isFavoriteDrink(item.idDrink)
      : isFavoriteCollection(item.idCollection);

  function toggleFavorite(e) {
    e.preventDefault();
    if (type === "drink") toggleFavoriteDrink(item);
    else toggleFavoriteCollection(item, type);
  }

  if (item === undefined) return null;

  return (
    <button
      onClick={toggleFavorite}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered || isFavorite ? (
        <FaHeart size={22} />
      ) : (
        <FaRegHeart size={22} />
      )}
    </button>
  );
}

export default FavoritesBtn;
