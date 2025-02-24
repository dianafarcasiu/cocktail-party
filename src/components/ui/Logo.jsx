import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img className="h-16" src="/public/cocktail-logo-2.png" />
    </Link>
  );
}

export default Logo;
