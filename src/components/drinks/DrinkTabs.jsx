import { useTheme } from "../../contexts/ThemeContext";

function DrinkTabs({ activeTab, setActiveTab }) {
  const { theme } = useTheme();
  const tabs = [
    { key: "ingredients", label: "Ingredients" },
    { key: "instructions", label: "Step By Step" },
    { key: "details", label: "More Info" },
  ];
  return (
    <ul
      className={`sticky top-0 bg-neutral-300 flex items-center justify-around cursor-pointer lg:text-lg ${
        theme === "light" ? "" : "text-teal-950"
      }`}
    >
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`py-5 ${
            activeTab === tab.key
              ? `border-b-2 border-teal-950 font-bold`
              : "hover:border-b-2 border-neutral-400"
          }`}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
}

export default DrinkTabs;
