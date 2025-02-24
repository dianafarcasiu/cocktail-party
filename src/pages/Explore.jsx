import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDrinks } from "../contexts/DrinksContext";

import BackgroundOverlay from "../components/ui/BackgroundOverlay";
import CardsWrapper from "../components/ui/CardsWrapper";
import Spinner from "../components/ui/Spinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import Card from "../components/drinks/Card";
import SeeMoreBtn from "../components/buttons/SeeMoreBtn";
import ResultsInfo from "../components/ui/ResultsInfo";

function Explore() {
  const { drinks, getDrinks, status, visibleDrinks } = useDrinks();
  const { type, value } = useParams();

  const typeMapping = {
    category: "c",
    glass: "g",
    alcoholic: "a",
  };
  const filterType = typeMapping[type];
  const filterValue = encodeURIComponent(value);

  useEffect(
    function () {
      getDrinks(filterType, filterValue);
    },
    [filterType, filterValue]
  );

  if (status === "loading") return <Spinner />;
  if (status === "error")
    return (
      <ErrorMessage>
        Failed to load drinks, please try again later.
      </ErrorMessage>
    );

  return (
    <>
      <div className="relative bg-[url('/public/explore-collections.jpeg')] h-60 bg-center bg-cover flex items-center justify-center mb-14">
        <BackgroundOverlay />

        <h1 className="z-10 text-lg font-bold uppercase text-slate-100 sm:text-xl md:text-2xl">
          {value} Collection
        </h1>
      </div>

      <div className="px-8 sm:px-28">
        <ResultsInfo length={drinks.length} />

        <CardsWrapper drinks={true}>
          {Array.isArray(drinks) &&
            drinks
              ?.slice(0, visibleDrinks)
              .map((drink) => (
                <Card
                  key={drink.idDrink}
                  to={`/drink/${drink.idDrink}`}
                  item={drink}
                  imageUrl={drink.strDrinkThumb}
                  title={drink.strDrink}
                  titleStyle="md:text-lg"
                  alignment="items-end"
                />
              ))}
        </CardsWrapper>

        {drinks.length > visibleDrinks && <SeeMoreBtn />}
        <Outlet />
      </div>
    </>
  );
}

export default Explore;
