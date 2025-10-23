import React from "react";
import { Link } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const CartRow = function ({
  item,
  quantity = 1,
  onQuantityChange = function () {},
}) {
  const subtotal = item.price * Number(quantity);

  function handleChange(event) {
    const val = event.target.value;
    const num = Math.max(1, Number(val || 1));
    onQuantityChange(num);
  }

  return (
    <div className="px-4 py-3 grid grid-cols-12 gap-4 text-center items-center text-gray-800 font-medium text-sm md:text-base">
      <button className="col-span-1 text-2xl text-gray-400 hover:text-gray-600">
        <TiDeleteOutline />
      </button>

      <div className="col-span-5 flex gap-2 md:gap-6 items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-10 h-10 md:w-20 md:h-20 object-contain"
        />
        <div>
          <Link to={"/product/" + item.id} state={{ from: "cart" }}>
            <span className="text-primary-default block md:inline">
              {item.title}
            </span>
          </Link>
        </div>
      </div>

      <div className="col-span-2 hidden sm:block">${item.price.toFixed(2)}</div>

      <div className="col-span-3 sm:col-span-2">
        <input
          type="number"
          min="1"
          value={quantity}
          className="border border-gray-300 px-2 py-1 w-8 sm:w-16 text-center"
          onChange={handleChange}
        />
      </div>

      <div className="col-span-3 sm:col-span-2">${subtotal.toFixed(2)}</div>
    </div>
  );
};

export default CartRow;
