import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function CartDetail({ cartItems }) {
  const [quantities, setQuantities] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(function() {
    setQuantities(function(prev) {
      const q = {};
      cartItems.forEach(function(item) {
        q[item.id] = prev[item.id] ?? 1;
      });
      return q;
    });
  }, [cartItems]);

  function handleQuantityChange(itemId, newQty) {
    setQuantities(function(prev) { return { ...prev, [itemId]: newQty }; });
  }

  function handleUpdateCart() {
    let sum = 0;
    cartItems.forEach(function(item) {
      const q = quantities[item.id] ?? 1;
      sum += item.price * Number(q);
    });
    setSubtotal(sum);
  }

  return (
    <div className="flex flex-col">
      <div className="border border-gray-300 divide-y divide-gray-300">
        <div className="bg-gray-50 py-2 grid grid-cols-12 text-sm sm:text-lg text-center text-black font-semibold">
          <div className="m-auto col-span-6">
            <h2>Product</h2>
          </div>
          <h2 className="sm:col-span-2 hidden md:block">Price</h2>
          <h2 className="col-span-3 sm:col-span-2 md:block">Quantity</h2>
          <h2 className="col-span-3 sm:col-span-2 md:block">Subtotal</h2>
        </div>
        <CartList items={cartItems} quantities={quantities} onQuantityChange={handleQuantityChange} />
        <div className="flex flex-col md:flex-row justify-between py-2 px-4 gap-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Coupon code"
              className="border border-gray-300 text-black px-4 py-2 text-sm w-full md:w-auto"
            />
            <button className="bg-primary-dark hover:bg-primary-extradark text-white px-6 py-2 rounded font-medium text-sm">
              APPLY COUPON
            </button>
          </div>
          <button onClick={handleUpdateCart} className="bg-primary-light hover:bg-primary-default text-white px-6 py-2 rounded font-medium text-sm w-full md:w-auto">
            UPDATE CART
          </button>
        </div>
      </div>
      <div className="self-end w-full mt-2 md:mt-6">
        <CartTotals subtotal={subtotal} />
      </div>
    </div>
  );
}

export default CartDetail;
