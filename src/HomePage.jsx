import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import ProductGrid from "./components/ProductGrid";
import Pagination from "./components/Pagination";
import { getProductList } from "./api";
import NoMatch from "./components/NoMatch.jsx";
import Loading from "./components/Loading";

function HomePage() {
  const [productList, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const p = getProductList();
    p.then(function (response) {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  let filteredProducts = productList.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  if (sort === "title") {
    filteredProducts = filteredProducts.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sort === "price-asc") {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
  }

  function handleSort(sortType) {
    setSort(sortType);
  }

  return (
    <div className="my-8 md:my-16 bg-white py-8 px-9 max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-xs text-gray-400">Home / Shop</p>
          <h1 className="text-4xl text-primary-light mb-4">Shop</h1>
          <Filter
            query={query}
            sort={sort}
            onSearch={handleSearch}
            onSort={handleSort}
          />
        </div>
        {loading && <Loading />}
        {!loading && filteredProducts.length > 0 && (
          <ProductGrid products={filteredProducts} />
        )}
        {!loading && filteredProducts.length === 0 && (
          <NoMatch
            searchQuery={query}
            onClearSearch={function () {
              setQuery("");
            }}
          />
        )}
        <Pagination />
    </div>
  );
}

export default HomePage;
