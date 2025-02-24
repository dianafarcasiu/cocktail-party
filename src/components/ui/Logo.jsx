import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        className="h-16"
        src={`${import.meta.env.BASE_URL}cocktail-logo-2.png`}
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
