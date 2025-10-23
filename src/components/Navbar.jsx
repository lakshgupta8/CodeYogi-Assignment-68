import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";

function Navbar() {
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
        <Link
          to="/cart"
          state={{ from: location?.pathname }}
          className="self-center px-2 md:px-0"
        >
          <RiShoppingBagLine className="text-primary-default text-2xl md:text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
