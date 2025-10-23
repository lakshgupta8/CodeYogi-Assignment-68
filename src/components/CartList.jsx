import React from "react";
import CartRow from "./CartRow";

function CartList({ items, quantities, onQuantityChange }) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="divide-y divide-gray-300">
        {items.map(function (item) {
          const qty = quantities?.[item.id] ?? 1;
          return (
            <CartRow
              key={item.id}
              item={item}
              quantity={qty}
              onQuantityChange={function(newQty) {onQuantityChange(item.id, newQty)}}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CartList;
