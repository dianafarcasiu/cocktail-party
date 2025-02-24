import { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext();

const initialState = {
  favoriteDrinks: JSON.parse(localStorage.getItem("favoriteDrinks")) || [],
  favoriteCollections:
    JSON.parse(localStorage.getItem("favoriteCollections")) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleFavoriteDrink":
      const drink = action.payload;
      // Check if the drink is already in favorites, then either remove or add it
      const updatedFavoriteDrinks = state.favoriteDrinks.some(
        (fav) => fav.idDrink === drink.idDrink
      )
        ? state.favoriteDrinks.filter((fav) => fav.idDrink !== drink.idDrink)
        : [...state.favoriteDrinks, drink];

      localStorage.setItem(
        "favoriteDrinks",
        JSON.stringify(updatedFavoriteDrinks)
      );
      return { ...state, favoriteDrinks: updatedFavoriteDrinks };

    case "toggleFavoriteCollection":
      const collection = action.payload;
      // Check if the collection is already in favorites, then either remove or add it
      const updatedFavoriteCollections = state.favoriteCollections.some(
        (fav) => fav.idCollection === collection.idCollection
      )
        ? state.favoriteCollections.filter(
            (fav) => fav.idCollection !== collection.idCollection
          )
        : [...state.favoriteCollections, collection];

      localStorage.setItem(
        "favoriteCollections",
        JSON.stringify(updatedFavoriteCollections)
      );
      return { ...state, favoriteCollections: updatedFavoriteCollections };

    default:
      throw new Error("Unknown action type.");
  }
}

function FavoritesProvider({ children }) {
  const [{ favoriteDrinks, favoriteCollections }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function toggleFavoriteDrink(drink) {
    dispatch({ type: "toggleFavoriteDrink", payload: drink });
  }
  function toggleFavoriteCollection(collection, type) {
    dispatch({
      type: "toggleFavoriteCollection",
      payload: { ...collection, type },
    });
  }

  function isFavoriteDrink(id) {
    return favoriteDrinks.some((fav) => fav.idDrink === id);
  }
  function isFavoriteCollection(id) {
    return favoriteCollections.some((fav) => fav.idCollection === id);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteDrinks,
        favoriteCollections,
        toggleFavoriteDrink,
        toggleFavoriteCollection,
        isFavoriteDrink,
        isFavoriteCollection,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined)
    throw new Error("Function used outside the provider.");
  return context;
}

export { FavoritesProvider, useFavorites };
