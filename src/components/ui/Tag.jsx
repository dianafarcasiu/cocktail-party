import { useTheme } from "../../contexts/ThemeContext";

function Tag({ children }) {
  const { theme } = useTheme();
  return (
    <p
      className={`px-3 py-2 text-center ${
        theme === "light"
          ? "bg-teal-900 text-neutral-300"
          : "bg-neutral-300 text-teal-950"
      } rounded-full`}
    >
      {children}
    </p>
  );
}

export default Tag;
