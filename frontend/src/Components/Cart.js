import { useState } from "react";
import { useLocation } from "react-router-dom";
const Cart = () => {
  const location = useLocation();
  const data = location.state;
  const [quant, setQuant] = useState([]);
  const prices = [];
  let total = 0;
  if (data)
    for (let i = 0; i < data.length; i++) {
      quant.push(1);
      prices.push(data[i].price);
    }
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
  return (
    <>
      <div className="Cart">
        <h1>MY CART</h1>
        <a href="/">HOME</a>
        <a href="/Box">VIEW ALL</a>
      </div>
      <div className="Group">
        <div className="Container-1">
          <div className={data && data.length >= 1 ? "grid-head" : "off"}>
            <div>
              <h2 className="P">Product</h2>
            </div>
            <div>
              <h2 className="P">Quantity</h2>
            </div>
            <div>
              <h2 className="P">Total</h2>
            </div>
          </div>
          {data &&
            data.map((res, index) => (
              <div className="grid-1" key={index}>
                <div>
                  <h2 className="P3">{res.name}</h2>
                </div>
                <div className="quantity">
                  <button onClick={() => minus(index)}>-</button>
                  <h2 className="B">{quant[index]}</h2>
                  <button onClick={() => plus(index)}>+</button>
                </div>
                <div>
                  <h2 className="P2">Rs. {res.price}</h2>
                </div>
              </div>
            ))}
        </div>
        <div className="Container-2">
          <div className="flex-1">
            <h1>Total</h1>
            {data &&
              data.forEach((res, index) => {
                total += prices[index] * quant[index];
              })}
            <h1>{total * 0.85}</h1>
            <h2>You saved Rs. {total * 0.15}!!</h2>
            <h4>Order Instructions</h4>
            <select>
              <option>Cash On Delivery</option>
              <option>Debit/Credit Card</option>
            </select>
            <h4>
              Tax included. <span>Shipping</span> calculated at checkout
            </h4>
            <button>
              <a href="/">Checkout</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
