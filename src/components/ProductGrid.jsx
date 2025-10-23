import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-4">
      {products.map(function (item) {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ProductGrid;
