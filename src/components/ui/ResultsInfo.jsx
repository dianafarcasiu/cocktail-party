import { useTheme } from "../../contexts/ThemeContext";

function ResultsInfo({ length, favorites = false }) {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-neutral-600" : "text-neutral-200";
  const lineColor = theme === "light" ? "bg-neutral-600" : "bg-neutral-300";

  return (
    <>
      <p className={`pb italic ${textColor}`}>
        {length}{" "}
        {favorites
          ? length === 1
            ? "favorite"
            : "favorites"
          : length === 1
          ? "result"
          : "results"}
      </p>
      <div className={`w-full h-[1px] mb-8 ${lineColor}`}></div>
    </>
  );
}

export default ResultsInfo;
