import React, { useEffect, useState } from "react";
import AddToCart from "./components/AddToCart";
import { useParams, useLocation, Link } from "react-router-dom";
import { getProduct } from "./api";
import {
  HiArrowSmLeft,
  HiArrowSmRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

function ProductDetailPage() {
  const id = +useParams().id;
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      getProduct(id).then(function (response) {
        setProduct(response.data);
        setLoading(false);
      });
    },
    [id]
  );

  const title = product?.title;
  const images = product?.images || [];
  const price = product?.price;
  const image = images[0];
  const description = product?.description;
  const category = product?.category;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col px-4 pb-8">
      <Link
        to={location?.state?.from === "cart" ? "/cart" : "/"}
        className="self-end"
      >
        <HiOutlineArrowNarrowLeft className="text-gray-800 text-3xl md:text-4xl" />
      </Link>

      <div className="bg-white flex flex-col md:flex-row flex-1 py-6 px-4 md:px-8 gap-3">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 h-full">
          {loading ? (
            <div className="w-full h-full bg-gray-200 rounded-md animate-pulse" />
          ) : (
            <img
              className="w-full h-full object-contain bg-gray-100"
              src={image}
              alt={title}
            />
          )}
        </div>

        <div className="w-full md:w-1/2 px-2 md:px-8 overflow-auto flex flex-col">
          <div className="flex-1">
            {loading ? (
              <div className="h-8 md:h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-6 md:mb-10" />
            ) : (
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-500 mb-6 md:mb-10">
                {title}
              </h1>
            )}

            {loading ? (
              <div className="h-6 md:h-8 w-1/4 bg-gray-200 rounded animate-pulse mb-4" />
            ) : (
              <p className="text-xl md:text-3xl font-bold text-gray-600 mb-4">
                ${price !== null ? price.toFixed(2) : "-"}
              </p>
            )}

            {loading ? (
              <>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse mb-6" />
              </>
            ) : (
              <p className="text-gray-500 mb-6 md:mb-8 font-semibold text-base md:text-2xl">
                {description}
              </p>
            )}

            {!loading && <AddToCart />}
            <p className="text-base text-gray-500  mt-6">
              Category:
              <span className="text-primary-default"> {category}</span>
            </p>
          </div>

          {loading ? (
            <div className="flex justify-between mt-6 md:mt-10">
              <div className="flex flex-col items-center gap-1">
                <div className="h-8 md:h-10 w-8 md:w-10 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 md:h-5 w-16 md:w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-8 md:h-10 w-8 md:w-10 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 md:h-5 w-16 md:w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ) : (
            <div className="flex justify-between mt-6 md:mt-10">
              <div>
                {id > 1 && (
                  <Link
                    to={"/product/" + (id - 1)}
                    className="flex flex-col items-center"
                  >
                    <HiArrowSmLeft className="text-gray-800 text-3xl md:text-4xl" />
                    <p className="text-gray-800 text-sm md:text-xl">Previous</p>
                  </Link>
                )}
              </div>
              <div>
                {id < 30 && (
                  <Link
                    to={"/product/" + (id + 1)}
                    className="flex flex-col items-center"
                  >
                    <HiArrowSmRight className="text-gray-800 text-3xl md:text-4xl" />
                    <p className="text-gray-800 text-sm md:text-xl">Next</p>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
