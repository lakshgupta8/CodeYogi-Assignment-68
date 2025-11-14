import { Link, useLocation } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";

function Navbar({ count }) {
  const location = useLocation();
  return (
    <div className="bg-white py-4 px-2">
      <div className="flex items-center justify-between mx-auto max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
        <Link to="/">
          <img
            src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg"
            alt="Logo"
            className="h-12 md:h-16"
          />
        </Link>
        <div className="flex items-center">
          <ul>
            <li className="inline-block mx-4 text-xs md:text-sm text-primary-light hover:text-primary-default">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block mx-4 text-xs md:text-sm text-primary-light hover:text-primary-default">
              <Link to="/products">Products</Link>
            </li>
            <li className="inline-block mx-4 text-xs md:text-sm text-primary-light hover:text-primary-default">
              <Link to="/about">About</Link>
            </li>
            <li className="inline-block mx-4 text-xs md:text-sm text-primary-light hover:text-primary-default">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="inline-block mx-4 text-xs md:text-sm text-primary-light hover:text-primary-default">
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Link
            to="/cart"
            state={{ from: location?.pathname }}
            className="flex flex-col items-center relative"
          >
            <RiShoppingBagLine className="text-primary-default text-3xl md:text-4xl" />
            <span className="absolute top-3 right-[10] md:top-4 md:right-[14] text-[10px] md:text-xs text-primary-default">
              {count}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
