import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import Logo from "./Logo";
import Searchbar from "../drinks/Searchbar";
import ToggleThemeBtn from "../buttons/ToggleThemeBtn";

function Navbar() {
  return (
    <div className="relative flex items-center justify-between px-6 py-2">
      <Logo />
      <Searchbar />

      <NavLink
        to="favorites"
        className="hidden pr-4 mr-10 text-lg sm:block hover:font-bold"
      >
        Favorites
      </NavLink>
      <NavLink to="favorites" className="mr-8 text-2xl sm:hidden">
        <FaRegHeart />
      </NavLink>
      <ToggleThemeBtn />
    </div>
  );
}

export default Navbar;
