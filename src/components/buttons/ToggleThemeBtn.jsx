import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleThemeBtn() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 sm:p-4 sm:text-xl text-white transition-all duration-300 ease-linear absolute top-[-8px] right-[-8px] ${
        theme === "light" ? "bg-teal-950" : "bg-orange-600"
      } rounded-b-full rounded-l-full`}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ToggleThemeBtn;
