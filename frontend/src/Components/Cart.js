import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/Cart.css";

const Cart = () => {
  const location = useLocation();
  const data = location.state;
  const [quant, setQuant] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    if (data) {
      setQuant(new Array(data.length).fill(1));
    }
  }, [data]);

  const plus = (index) => {
    setQuant((prev) => {
      const newState = prev.map((res, ind) => {
        if (ind === index) {
          res += 1;
        }
        return res;
      });
      return newState;
    });
  };

  const minus = (index) => {
    setQuant((prev) => {
      const newState = prev.map((res, ind) => {
        if (ind === index) {
          res = res === 0 ? 0 : res - 1;
        }
        return res;
      });
      return newState;
    });
  };

  const removeItem = (index) => {
    setQuant((prev) => prev.filter((_, ind) => ind !== index));
    data.splice(index, 1);
  };

  const saveForLater = (index) => {
    setSavedItems([...savedItems, data[index]]);
    removeItem(index);
  };

  let total = 0;
  if (data) {
    total = data.reduce(
      (acc, item, index) => acc + item.price * quant[index],
      0
    );
  }

  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1>Shopping Cart</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/Box">View All</a>
        </nav>
      </header>
      <main className="cart-main">
        <div className="cart-container">
          <div className="cart-items">
            {data && data.length > 0 ? (
              <div className="cart-content">
                <div className="cart-grid-head">
                  <h2 className="product-title">Product</h2>
                  <h2 className="quantity-title">Quantity</h2>
                  <h2 className="total-title">Total</h2>
                </div>
                {data.map((res, index) => (
                  <div className="cart-item" key={index}>
                    <div className="cart-product">
                      <img
                        src={res.image}
                        alt={res.name}
                        className="product-image"
                      />
                      <div>
                        <h2 className="product-name">{res.name}</h2>
                        <p className="product-description">{res.description}</p>
                        <button
                          className="action-button"
                          onClick={() => saveForLater(index)}
                        >
                          Save for Later
                        </button>
                        <button
                          className="action-button"
                          onClick={() => removeItem(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-quantity">
                      <button
                        className="quantity-button"
                        onClick={() => minus(index)}
                      >
                        -
                      </button>
                      <h2 className="quantity-value">{quant[index]}</h2>
                      <button
                        className="quantity-button"
                        onClick={() => plus(index)}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      <h2 className="product-price">
                        Rs. {res.price * quant[index]}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <a href="/Box" className="shop-now">
                  Shop Now
                </a>
              </div>
            )}
            {savedItems.length > 0 && (
              <div className="saved-items">
                <h2>Saved for Later</h2>
                {savedItems.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <div className="cart-product">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                      <div>
                        <h2 className="product-name">{item.name}</h2>
                        <p className="product-description">
                          {item.description}
                        </p>
                        <button
                          className="action-button"
                          onClick={() => {
                            setQuant([...quant, 1]);
                            data.push(item);
                            setSavedItems(
                              savedItems.filter((_, i) => i !== index)
                            );
                          }}
                        >
                          Move to Cart
                        </button>
                        <button
                          className="action-button"
                          onClick={() =>
                            setSavedItems(
                              savedItems.filter((_, i) => i !== index)
                            )
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="cart-summary">
            <div className="summary-content">
              <h1>
                Subtotal ({data ? data.length : 0} items): Rs.{" "}
                {(total * 0.85).toFixed(2)}
              </h1>
              <h2>You saved Rs. {(total * 0.15).toFixed(2)}!!</h2>
              <h4>Order Instructions</h4>
              <select>
                <option>Cash On Delivery</option>
                <option>Debit/Credit Card</option>
              </select>
              <h4>
                Tax included. <span>Shipping</span> calculated at checkout
              </h4>
              <button className="checkout-button">
                <a href="/">Checkout</a>
              </button>
            </div>
            <div className="promo-offers">
              <h2>Special Offers</h2>
              <ul>
                <li>10% off on orders above Rs. 5000</li>
                <li>Free shipping on orders above Rs. 2000</li>
                <li>Buy 2 get 1 free on select items</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
