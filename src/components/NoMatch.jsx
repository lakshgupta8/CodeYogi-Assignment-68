import React from "react";

function NoMatch({ searchQuery, onClearSearch}) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <img
        src="/59563728_9318692.svg"
        alt="No Results"
        className="w-40 h-40 opacity-80"
      />
      <h2 className="text-2xl font-semibold text-gray-700">No Results Found</h2>
      <p className="text-gray-500 mb-4">
        We couldn't find any matches for{" "}
        <span className="font-medium text-gray-800">“{searchQuery}”</span>.
      </p>

      <button
        onClick={onClearSearch}
        className="bg-primary-default hover:bg-primary-medium text-white px-5 py-2 rounded-lg font-medium"
      >
        Clear Search
      </button>
    </div>
  );
}

export default NoMatch;
