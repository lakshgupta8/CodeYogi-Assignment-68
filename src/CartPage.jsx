import React from "react";
import CartDetail from "./components/CartDetail";
import EmptyCart from "./components/EmptyCart";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

function CartPage() {
  const location = useLocation();
  const cartItems = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      price: 9.99,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      price: 19.99,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 pb-8 px-8">
      <Link to={location?.state?.from || "/"} className="self-end">
        <HiOutlineArrowNarrowLeft className="text-gray-800 text-3xl md:text-4xl" />
      </Link>
      <div className="flex-1 w-full mx-auto bg-white p-4">
        {cartItems.length > 0 && <CartDetail cartItems={cartItems} />}
        {cartItems.length == 0 && <EmptyCart />}
      </div>
    </div>
  );
}

export default CartPage;
