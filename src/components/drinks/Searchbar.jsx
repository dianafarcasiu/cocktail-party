import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearch() {
    navigate(`search/${query}`);
  }
  function handleEnter(e) {
    if (e.key === "Enter") handleSearch();
  }
  // Reset query whenever the URL changes
  useEffect(() => {
    setQuery("");
    setIsClicked(false);
  }, [location]);

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search cocktails..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onClick={() => setIsClicked(true)}
        onKeyDown={handleEnter}
        className={`${
          isClicked ? "sm:w-96" : "sm:w-64"
        } px-3 py-2 transition-all duration-300 ease-in-out border text-teal-950 border-teal-900 w-36 rounded-3xl bg-neutral-200 placeholder:text-teal-950 placeholder:text-sm focus:outline-none `}
      ></input>

      {query && (
        <button
          onClick={handleSearch}
          className="absolute z-10 p-2 text-lg transform -translate-y-1/2 right-3 top-1/2 text-teal-950"
        >
          <FaSearch />
        </button>
      )}
    </div>
  );
}

export default Searchbar;
