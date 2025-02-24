import { categories, glasses, alcoholic } from "../data/filterCategories";
import Hero from "../components/ui/Hero";
import Title from "../components/ui/Title";
import CardsWrapper from "../components/ui/CardsWrapper";
import Card from "../components/drinks/Card";

function Home() {
  return (
    <>
      <Hero />

      <div className="px-8 py-8 sm:px-14">
        <div className="py-10 text-lg font-bold leading-9 tracking-wide text-center sm:px-32 lg:text-xl">
          <span className="inline-block pb-6 font-extrabold uppercase sm:text-xl lg:text-2xl">
            Discover the best drinks.
          </span>{" "}
          <br></br>
          <p className="text-sm sm:leading-9 sm:text-base">
            Your ultimate destination for discovering exciting cocktails,
            classic drinks, and everything in between. <br></br>Whether you're
            looking for the perfect mix for a gathering or exploring new
            flavors, we have the recipes and inspiration to elevate your next
            drink. Dive into our curated categories and find your new favorite
            cocktail today!
          </p>
        </div>

        <Title>Explore by Category</Title>

        <CardsWrapper>
          {categories.map((category) => (
            <Card
              key={category.name}
              to={`explore/category/${encodeURIComponent(category.name)}`}
              item={{ idCollection: category.name, ...category }}
              type="category"
              imageUrl={category.picUrl}
              title={category.name}
            />
          ))}
        </CardsWrapper>

        <Title>Explore by Glass</Title>

        <CardsWrapper>
          {glasses.map((glass) => (
            <Card
              key={glass.name}
              to={`explore/glass/${encodeURIComponent(glass.name)}`}
              item={{ idCollection: glass.name, ...glass }}
              type="glass"
              imageUrl={glass.picUrl}
              title={glass.name}
            />
          ))}
        </CardsWrapper>

        <Title>Explore by Alcohol</Title>

        <CardsWrapper>
          {alcoholic.map((alcoholic) => (
            <Card
              key={alcoholic.name}
              to={`explore/alcoholic/${encodeURIComponent(alcoholic.name)}`}
              item={{ idCollection: alcoholic.name, ...alcoholic }}
              type="alcoholic"
              imageUrl={alcoholic.picUrl}
              title={alcoholic.name}
            />
          ))}
        </CardsWrapper>
      </div>
    </>
  );
}

export default Home;
