function FavoriteTabs({ activeFav, setActiveFav }) {
  return (
    <div className="flex items-center justify-around w-full mb-10 bg-amber-700 md:text-xl text-neutral-100">
      {["drinks", "collections"].map((type) => (
        <button
          key={type}
          className={`p-6  ${
            activeFav === type
              ? "border-b-2 border-neutral-200"
              : "hover:border-b-2 border-neutral-400"
          }`}
          onClick={() => setActiveFav(type)}
        >
          {type.charAt(0).toLocaleUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FavoriteTabs;
