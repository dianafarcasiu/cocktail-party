import BackgroundOverlay from "../ui/BackgroundOverlay";

function Hero() {
  return (
    <div className="relative">
      <div className="h-[36rem] w-full bg-[url('/public/cocktail-hero.webp')] bg-cover bg-center"></div>
      <BackgroundOverlay rounded="" />

      <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2 text-white text-center">
        <h1 className="text-lg font-extrabold tracking-wider text-left uppercase sm:text-2xl lg:text-3xl">
          <span className="inline-block pb-6">Sip, Sip, Hooray!</span>
          <br></br>
          <span>Welcome to Cocktail Party.</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
