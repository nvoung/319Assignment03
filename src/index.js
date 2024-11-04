import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowProducts from "./App";
import CartCheckout from './CartCheckout'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from 'react-router-dom';

// import { useLocation } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ShowProducts/>
    <CartCheckout/>
  </div>
);
