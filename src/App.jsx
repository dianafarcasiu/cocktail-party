import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DrinksProvider } from "./contexts/DrinksContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import DrinkDetails from "./pages/DrinkDetails";
import SearchResults from "./pages/SearchResults";
import Favorites from "./pages/Favorites";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <BrowserRouter basename="/cocktail-party">
      <ThemeProvider>
        <DrinksProvider>
          <FavoritesProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="explore/:type/:value" element={<Explore />} />
              <Route path="drink/:drinkId" element={<DrinkDetails />} />
              <Route path="search/:query" element={<SearchResults />} />
              <Route path="favorites" element={<Favorites />} />
            </Routes>
            <Footer />
          </FavoritesProvider>
        </DrinksProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
