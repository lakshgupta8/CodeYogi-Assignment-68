import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <AiOutlineLoading3Quarters className="opacity-75 text-3xl text-yellow-500" />
      <p className="mt-3 text-sm text-gray-600">Loading products…</p>
    </div>
  );
}

export default Loading;
