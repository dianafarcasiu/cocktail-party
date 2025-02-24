import { useFavorites } from "../contexts/FavoritesContext";
import { useState } from "react";

import BackgroundOverlay from "../components/ui/BackgroundOverlay";
import FavoriteTabs from "../components/drinks/FavoriteTabs";
import FavoritesList from "../components/drinks/FavoritesList";

function Favorites() {
  const { favoriteDrinks, favoriteCollections } = useFavorites();
  const [activeFav, setActiveFav] = useState("drinks");

  return (
    <div className="min-h-[70vh] md:min-h-[84vh]">
      <div className="relative bg-[url('/public/favorites-bg.avif')] h-60 bg-center bg-cover flex items-center justify-center">
        <BackgroundOverlay />

        <h1 className="z-10 text-lg uppercase font-bolder text-slate-100 sm:text-xl md:text-2xl">
          Your Favorites
        </h1>
      </div>

      <FavoriteTabs activeFav={activeFav} setActiveFav={setActiveFav} />

      {activeFav === "drinks" && (
        <FavoritesList
          type="drink"
          items={favoriteDrinks}
          emptyMessage="Your list seems to be empty, start adding some drinks to your favorites!"
        />
      )}

      {activeFav === "collections" && (
        <FavoritesList
          type={
            favoriteCollections.length > 0
              ? favoriteCollections[0].type
              : "collections"
          }
          items={favoriteCollections}
          emptyMessage="Your list seems to be empty, start adding some collections to your favorites!"
        />
      )}
    </div>
  );
}

export default Favorites;
