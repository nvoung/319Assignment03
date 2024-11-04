import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowProducts from "./App";
import CartCheckout from "./CartCheckout";

function RoutingApp() {
  return (
    <Routes>
      <Route path="/" element={<ShowProducts />} />
      <Route path="/checkout" element={<CartCheckout />} />
    </Routes>
  );
}

export default RoutingApp;
