import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className="h-16" src="/cocktail-logo-2.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
