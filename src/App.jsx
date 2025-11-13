import { useState, useMemo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductDetailPage from "./ProductDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartPage from "./CartPage";
import NotFound from "./components/NotFound";

function App() {
  const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || {};
  const [cartItems, setCartItems] = useState(savedCartItems);

  const handleAddToCart = useCallback(function (productId, count) {
    const currentCount = cartItems[productId] || 0;
    const newCartItems = { ...cartItems, [productId]: currentCount + count };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }, [cartItems]);

  const count = useMemo(function () {
    return Object.keys(cartItems).reduce(function (prev, current) {
      return prev + cartItems[current];
    }, 0);
  }, [cartItems]);

  const handleRemoveFromCart = useCallback(function (productId) {
    const newCartItems = { ...cartItems };
    delete newCartItems[productId];
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }, [cartItems]);

  const handleQuantityChange = useCallback(function (productId, newQty) {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    const newCartItems = { ...cartItems, [productId]: newQty };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }, [cartItems, handleRemoveFromCart]);

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
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemoveItem={handleRemoveFromCart}
                onQuantityChange={handleQuantityChange}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;