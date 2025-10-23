import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <img
        src="/11669671_20943865.svg"
        alt="No Products"
        className="w-40 h-40 opacity-80"
      />
      <h2 className="text-2xl font-semibold text-gray-700">No Results Found</h2>
      <p className="text-gray-500 mb-4">
        Try adding a product to the cart from the product listing or product
        details page.
      </p>

      <Link to="/">
        <button className="bg-primary-default hover:bg-primary-medium text-white px-5 py-2 mt-6 rounded-lg font-medium">
          EXPLORE PRODUCTS
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
