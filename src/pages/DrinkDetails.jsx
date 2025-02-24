import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDrinks } from "../contexts/DrinksContext";

import BackgroundOverlay from "../components/ui/BackgroundOverlay";
import DrinkTabs from "../components/drinks/DrinkTabs";
import DrinkInfo from "../components/drinks/DrinkInfo";
import Spinner from "../components/ui/Spinner";
import FavoritesBtn from "../components/buttons/FavoritesBtn";
import GoBackBtn from "../components/buttons/GoBackBtn";

function DrinkDetails() {
  const { drinkId } = useParams();
  const { currentDrink, getCurrentDrinkDetails, status } = useDrinks();
  const [activeTab, setActiveTab] = useState("ingredients");

  useEffect(
    function () {
      getCurrentDrinkDetails(drinkId);
    },
    [drinkId]
  );

  if (status === "loading") return <Spinner />;

  return (
    <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-[auto_1fr] mt-4 md:mt-8">
      <div className="relative mx-auto w-fit h-fit">
        <BackgroundOverlay opacity={false} rounded={"rounded-b-lg"} />

        <div className="absolute z-10 flex justify-between w-full p-6 text-white">
          <GoBackBtn />
          <FavoritesBtn item={currentDrink} type="drink" />
        </div>

        <img
          className="rounded-b-lg lg:h-[39rem]"
          src={currentDrink.strDrinkThumb}
        ></img>
        <h1 className="absolute inset-0 flex items-end justify-center pb-10 text-xl font-extrabold tracking-wider text-center text-white md:text-2xl lg:text-4xl">
          {currentDrink.strDrink}
        </h1>
      </div>

      <div className="lg:h-[80vh] overflow-y-scroll">
        <DrinkTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <DrinkInfo currentDrink={currentDrink} activeTab={activeTab} />
      </div>
    </div>
  );
}

export default DrinkDetails;
