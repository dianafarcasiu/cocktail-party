import { Link } from "react-router-dom";
import { useState } from "react";
import BackgroundOverlay from "../ui/BackgroundOverlay";
import FavoritesBtn from "../buttons/FavoritesBtn";

function Card({
  to,
  item,
  type = "drink",
  imageUrl,
  title,
  titleStyle = "uppercase md:text-xl",
  alignment = "items-center",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative transition-all duration-200 ease-in shadow-xl cursor-pointer hover:scale-105 rounded-xl">
        <BackgroundOverlay />

        {isHovered && (
          <div className="absolute z-10 flex justify-end w-full p-6 text-white">
            <FavoritesBtn item={item} type={type} />
          </div>
        )}

        <div
          className={`flex ${alignment} justify-center p-6 text-white bg-cover h-80 rounded-xl mb-4 text-center`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <h3 className={`z-10 font-extrabold ${titleStyle}`}>{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
