import { useParams } from "react-router-dom";
import { useDrinks } from "../contexts/DrinksContext";
import { useEffect } from "react";
import Card from "../components/drinks/Card";
import CardsWrapper from "../components/ui/CardsWrapper";
import ErrorMessage from "../components/ui/ErrorMessage";
import SeeMoreBtn from "../components/buttons/SeeMoreBtn";
import ResultsInfo from "../components/ui/ResultsInfo";

function SearchResults() {
  const { query } = useParams();
  const { getDrinksResults, searchResults, visibleDrinks } = useDrinks();

  useEffect(
    function () {
      getDrinksResults(query);
    },
    [query]
  );

  if (!searchResults)
    return <ErrorMessage>Sorry, no results found for "{query}". </ErrorMessage>;

  return (
    <div className="px-8 pt-8 pb-2 sm:px-28 min-h-[70vh] md:min-h-[75vh]">
      <ResultsInfo length={searchResults.length} />

      <CardsWrapper drinks={true}>
        {searchResults?.slice(0, visibleDrinks).map((result) => (
          <Card
            key={result.idDrink}
            to={`/drink/${result.idDrink}`}
            item={result}
            imageUrl={result.strDrinkThumb}
            title={result.strDrink}
            titleStyle="md:text-lg"
            alignment="items-end"
          />
        ))}
      </CardsWrapper>

      {searchResults.length > visibleDrinks && <SeeMoreBtn />}
    </div>
  );
}

export default SearchResults;
