import { useDrinks } from "../../contexts/DrinksContext";
import { useTheme } from "../../contexts/ThemeContext";

function SeeMoreBtn() {
  const { theme } = useTheme();
  const { loadMoreDrinks } = useDrinks();
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={loadMoreDrinks}
        className={`px-3 py-2 mb-8 rounded-full ${
          theme === "light"
            ? "bg-teal-950 text-neutral-200"
            : " bg-neutral-300 text-teal-950"
        } active:scale-95`}
      >
        See more
      </button>
    </div>
  );
}

export default SeeMoreBtn;
