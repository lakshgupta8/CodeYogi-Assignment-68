import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailPage from "./ProductDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartPage from "./CartPage";
import NotFound from "./components/NotFound";

function App() {
  const [cartItems, setCartItems] = useState({});

  function handleAddToCart(productId, count) {
    const currentCount = cartItems[productId] || 0;
    setCartItems({
      ...cartItems,
      [productId]: currentCount + count,
    });
  }

  const count = Object.keys(cartItems).reduce(function (prev, current) {
    return prev + cartItems[current];
  }, 0);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar count={count} />
      <div className="flex-1">
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/product/:id"
            element={<ProductDetailPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
