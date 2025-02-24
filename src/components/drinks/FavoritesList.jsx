import CardsWrapper from "../ui/CardsWrapper";
import ResultsInfo from "../ui/ResultsInfo";
import Card from "./Card";

function FavoritesList({ type, items, emptyMessage }) {
  console.log("FavoritesList type:", type); // Debug type in FavoritesList
  if (items.length === 0)
    return (
      <div className="flex items-center justify-center p-6 py-16 text-center">
        <p className="font-medium md:text-xl">{emptyMessage}</p>
      </div>
    );

  return (
    <div className="px-8 sm:px-28">
      <ResultsInfo length={items.length} favorites={true} />
      <CardsWrapper drinks={true}>
        {items.map((fav) => (
          <Card
            key={fav.idDrink || fav.name}
            to={
              type === "drink"
                ? `/drink/${fav.idDrink}`
                : `/explore/${fav.type}/${encodeURIComponent(fav.name)}`
            }
            item={type === "drink" ? fav : { idCollection: fav.name, ...fav }}
            imageUrl={type === "drink" ? fav.strDrinkThumb : fav.picUrl}
            title={type === "drink" ? fav.strDrink : fav.name}
            titleStyle="md:text-lg"
            alignment="items-end"
            type={type}
          />
        ))}
      </CardsWrapper>
    </div>
  );
}

export default FavoritesList;
