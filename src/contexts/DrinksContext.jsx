import { createContext, useContext, useReducer } from "react";

const DrinksContext = createContext();

const FILTER_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
const DETAILS_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i";
const SEARCH_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";

const initialState = {
  drinks: [],
  currentDrink: [],
  searchResults: [],
  status: "loading",
  visibleDrinks: 16,
};

function reducer(state, action) {
  switch (action.type) {
    case "setDrinks":
      return { ...state, drinks: action.payload, status: "ready" };

    case "setCurrentDrink":
      return {
        ...state,
        currentDrink: action.payload,
        status: "ready",
      };

    case "setSearchResults":
      return { ...state, searchResults: action.payload, visibleDrinks: 16 };

    case "loadMoreDrinks":
      return {
        ...state,
        visibleDrinks: state.visibleDrinks + 16,
      };

    case "loading":
      return { ...state, status: "loading" };
    case "error":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown action type.");
  }
}

function DrinksProvider({ children }) {
  const [
    { drinks, currentDrink, status, visibleDrinks, searchResults },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function getDrinks(type, value) {
    try {
      // Clear the old drinks and set the loading state
      dispatch({ type: "setDrinks", payload: [] });
      dispatch({ type: "loading" });

      const res = await fetch(`${FILTER_URL}${type}=${value}`);
      if (!res.ok) throw new Error("Failed to fetch drinks.");
      const data = await res.json();
      dispatch({ type: "setDrinks", payload: data.drinks || [] });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error" });
    }
  }

  async function getCurrentDrinkDetails(id) {
    try {
      dispatch({ type: "loading" });

      const res = await fetch(`${DETAILS_URL}=${id}`);
      if (!res.ok) throw new Error("Failed to fetch drink details.");
      const data = await res.json();
      dispatch({ type: "setCurrentDrink", payload: data.drinks[0] });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error" });
    }
  }

  async function getDrinksResults(query) {
    try {
      const res = await fetch(`${SEARCH_URL}=${query}`);
      if (!res.ok) throw new Error("Failed to fetch search results.");
      const data = await res.json();
      dispatch({ type: "setSearchResults", payload: data.drinks });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error" });
    }
  }

  function loadMoreDrinks() {
    dispatch({ type: "loadMoreDrinks" });
  }

  return (
    <DrinksContext.Provider
      value={{
        drinks,
        getDrinks,
        currentDrink,
        getCurrentDrinkDetails,
        searchResults,
        getDrinksResults,
        status,
        visibleDrinks,
        loadMoreDrinks,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
}

function useDrinks() {
  const context = useContext(DrinksContext);
  if (context === undefined)
    throw new Error("Function used outside the provider.");
  return context;
}

export { DrinksProvider, useDrinks };
