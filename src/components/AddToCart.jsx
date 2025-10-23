import React from "react";

function AddToCart() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3">
      <input
        type="number"
        defaultValue={1}
        min={1}
        className="text-gray-600 w-24 sm:w-16 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary-dark"
      />
      <button className="bg-primary-default hover:bg-primary-dark text-white font-medium px-8 sm:px-12 py-2 rounded-md w-full sm:w-auto">
        ADD TO CART
      </button>
    </div>
  );
}

export default AddToCart;
