import React from "react";

function Pagination() {
  return (
    <div className="flex mt-8 gap-1">
      <button className="bg-white text-center text-primary-dark border-primary-dark border h-8 w-8 focus:text-white focus:bg-primary-dark hover:bg-primary-dark hover:text-white">
        1
      </button>
      <button className="bg-white text-center text-primary-dark border-primary-dark border h-8 w-8 focus:text-white focus:bg-primary-dark hover:bg-primary-dark hover:text-white">
        2
      </button>
      <button className="bg-white text-center text-primary-dark border-primary-dark border h-8 w-8 focus:text-white focus:bg-primary-dark hover:bg-primary-dark hover:text-white">
        {"\u2192"}
      </button>
    </div>
  );
}

export default Pagination;
