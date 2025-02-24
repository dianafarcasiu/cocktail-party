import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import { NavLink } from "react-router-dom";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-5 mt-10 ${
        theme === "light" ? " bg-teal-950 text-neutral-200" : "bg-neutral-900"
      }`}
    >
      <div className="flex flex-col items-center justify-between max-w-6xl gap-2 px-4 mx-auto md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="font-semibold text-white">Cocktail Party 🍸</h2>
          <p className="text-sm text-gray-400">Sip, Shake, Enjoy.</p>
        </div>

        <nav className="my-4 text-sm md:my-0">
          <ul className="flex gap-6">
            <li>
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorites" className="hover:text-white">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter size={18} />
          </a>
        </div>
      </div>

      <p className="mt-4 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} Cocktail Party. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
