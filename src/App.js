import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import TopNavBar from "./TopNavBar";
import {useForm} from 'react-hook-form';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
	Link,
} from 'react-router-dom';
import CartCheckout from './CartCheckout';

function ShowProducts() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      setCatalog(data);
      setFilteredCatalog(data);
      const responseCategories = await fetch("/categories.json");
      const dataCategories = await responseCategories.json();
      setCategories(dataCategories);
      console.log(dataCategories);
      console.log(data);
      const total = () => {
        let totalAmount = 0;
        for (let i = 0; i < cart.length; i++) {
          totalAmount += cart[i].price;
        }
        setCartTotal(totalAmount);
        console.log(totalAmount);
      };
      total();
    };

    fetchData();
  }, []);

  useEffect(() => {
    const total = () => {
      let totalAmount = 0;
      for (let i = 0; i < cart.length; i++) {
        totalAmount += cart[i].price;
      }
      setCartTotal(totalAmount);
      console.log(totalAmount);
    };
    total();
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  const handleCheckout=()=>{
    navigate('/checkout', {state:{cart, cartTotal}});
  };

  const removeFromCart = (product) => {
    let itemFound = false;
    const updatedCart = cart.filter((cartItem) => {
      if (cartItem.id === product.id && !itemFound) {
        itemFound = true;
        return false;
      }
      return true;
    });
    if (itemFound) {
      setCart(updatedCart);
    }
  };

  const howManyofThis = (id) => {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  };

  const cartItems = cart.map((product, index) => (
    <div key={index} className="d-flex justify-content-between">
      <img className="img-fluid" src={product.image} width={50} alt={product.title} />
      <div>{product.title}</div>
      <div>${product.price}</div>
      <Button variant="light" onClick={() => removeFromCart(product)}>-</Button>
      <Button variant="light" onClick={() => addToCart(product)}>+</Button>
    </div>
  ));

  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      {/* Left Navigation Bar */}
      <div style={{ width: "100%" }}>
        <TopNavBar
          catalog={catalog}
          setCatalog={setCatalog}
          filteredCatalog={filteredCatalog}
          setFilteredCatalog={setFilteredCatalog}
          categories={categories}
        />
      </div>
      {/* Main Content Area */}
      <div className="flex-grow-1 p-4">
        <h1>Welcome to the Product Page</h1>
        <div className="row">
          {filteredCatalog.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ width: "150px", margin: "auto", paddingTop: "20px" }}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    <strong>Price:</strong> ${product.price} <br />
                    <strong>Category:</strong> {product.category} <br />
                    <strong>Rating:</strong> {product.rating.rate} (
                    {product.rating.count} reviews)
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                  {/* <Button onClick={()=>addToCart(product)}>Add to Cart</Button> */}
                    <Button variant="light" onClick={() => removeFromCart(product)}>
                      -
                    </Button>
                    <span>{howManyofThis(product.id)}</span>
                    <Button variant="light" onClick={() => addToCart(product)}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary Section */}
        <div className="mt-4">
          <h2>Cart Summary</h2>
          <div>{cartItems}</div>
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
          <Button onClick={handleCheckout}>Proceed to Checkout</Button>
            {/* <Routes>

              <Route path='/' element={<ShowProducts cart={cart} cartTotal={cartTotal} addToCart={addToCart} />}/>
              <Route path="/checkout" element={<CartCheckout cart={cart} cartTotal={cartTotal} />} />

            </Routes> */}
         {/* <CartCheckout
         cart={cart}
         setCart={setCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
         /> */}
        </div>
      </div>
    </div>
  );
}

export default ShowProducts;
