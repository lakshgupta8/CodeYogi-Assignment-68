import { memo } from "react";
import CartRow from "./CartRow";
function CartList({ items, onRemoveItem, onQuantityChange }) {
  return (
    <div className="bg-white overflow-hidden">
      <div className="divide-y divide-gray-300">
        {items.map(function (item) {
          const qty = item.quantity ?? 1;
          return (
            <CartRow
              key={item.id}
              item={item}
              quantity={qty}
              onQuantityChange={onQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(CartList);
