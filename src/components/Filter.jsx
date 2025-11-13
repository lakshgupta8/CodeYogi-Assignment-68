import { memo } from "react";

function Filter({ query, sort, onSearch, onSort }) {
  function handleSearch(event) {
    onSearch(event.target.value);
  }

  function handleSort(event) {
    onSort(event.target.value);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
      <input
        value={query}
        type="text"
        placeholder="Search"
        className="border text-xs w-full sm:w-64 md:w-48 py-2 px-2 bg-gray-100 text-gray-600"
        onChange={handleSearch}
      />
      <select
        value={sort}
        className="border text-xs w-full sm:w-64 md:w-48 py-2 bg-gray-100 text-gray-600"
        onChange={handleSort}
      >
        <option value="default">Default Sort</option>
        <option value="title">Sort by title</option>
        <option value="price-asc">Sort by price: low to high</option>
        <option value="price-desc">Sort by price: high to low</option>
      </select>
    </div>
  );
}

export default memo(Filter);
