import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowProducts from "./App";
import CartCheckout from "./CartCheckout";
import PurchaseInfo from "./PurchaseInfo";

function RoutingApp() {
  return (
    <Routes>
      <Route path="/" element={<ShowProducts />} />
      <Route path="/checkout" element={<CartCheckout />} />
      <Route path="/purchase" element={<PurchaseInfo />} />
    </Routes>
  );
}

export default RoutingApp;
