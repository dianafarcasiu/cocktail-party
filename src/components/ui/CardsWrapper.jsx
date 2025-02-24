function CardsWrapper({ children, drinks = false }) {
  return (
    <div
      className={`grid grid-cols-2 mb-6  ${
        drinks
          ? "gap-8 md:grid-cols-3 lg:grid-cols-4"
          : "gap-6 sm:grid-cols-3 lg:grid-cols-5"
      } `}
    >
      {children}
    </div>
  );
}

export default CardsWrapper;
