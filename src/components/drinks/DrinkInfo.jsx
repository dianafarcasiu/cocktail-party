import Tag from "../ui/Tag";

function DrinkInfo({ currentDrink, activeTab }) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = currentDrink[`strIngredient${i}`];
    const measure = currentDrink[`strMeasure${i}`];
    if (ingredient) ingredients.push({ ingredient, measure: measure || "" });
  }
  const instructions = currentDrink?.strInstructions
    ? currentDrink.strInstructions
        .replace(/\((.*?)\)/g, "$1")
        .split(/\.\s*/)
        .map((sentence) => sentence.replace(/[^\x20-\x7E]/g, ""))
        .filter((instr) => instr.trim() !== "")
        .map((instr) => instr.replace(/^./, (char) => char.toUpperCase()))
    : [];

  const tags = currentDrink?.strTags?.split(",");

  return (
    <div className="flex flex-col items-center justify-center p-16 leading-loose tracking-wide lg:py-24 lg:px-36 lg:text-lg">
      <div className="w-full h-[1px] mb-8 bg-neutral-300"></div>

      {activeTab === "ingredients" && (
        <ul className="space-y-2 sm:space-y-4">
          {ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      )}

      {activeTab === "instructions" && (
        <ol className="space-y-3 list-decimal list-inside lg:space-y-6">
          {instructions.map((item, index) => (
            <li key={index}>{item}.</li>
          ))}
        </ol>
      )}

      {activeTab === "details" && (
        <div className="space-y-6">
          <Tag>{currentDrink.strCategory}</Tag>
          <Tag>{currentDrink.strGlass}</Tag>
          {tags?.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      )}

      <div className="w-full h-[1px] mt-8 bg-neutral-300"></div>
    </div>
  );
}

export default DrinkInfo;
