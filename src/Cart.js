import { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(1);
  return (
    <>
    <div className="Cart">
      <h1>My Cart</h1>
      <h3>For some reasons I was unable to import data from json file and I was forced to use this technique</h3>
      <Link to="/Home">Home</Link>
      </div>
      <div className="Group">
        <div className="Container-1">
          <div className="grid-1">
            <h2 className="P">Product</h2>
            <h2 className="P1">Quantity</h2>
            <h2 className="P1">Total</h2>
          </div>
          <div className="grid-1">
            <h2 className="P3">Sherlock-Holmes</h2>
            <div className="quantity">
              <button onClick={() => setState1((prev) => (prev <= 0) ? 0 : prev - 1)}>-</button>
              <h2 className="B">{state1}</h2>
              <button onClick={() => setState1(prev => prev + 1)}>+</button>
            </div>
            <h2 className="P2">Rs. 500</h2>
          </div>
          <div className="grid-1">
            <h2 className="P4">Harry-Potter</h2>
            <div className="quantity">
              <button onClick={() => setState2((prev) => (prev <= 0) ? 0 : prev - 1)}>-</button>
              <h2 className="B">{state2}</h2>
              <button onClick={() => setState2(prev => prev + 1)}>+</button>
            </div>
            <h2 className="P2">Rs. 500</h2>
          </div>
          <div className="grid-1">
            <h2 className="P3">Queen's Gambit</h2>
            <div className="quantity">
              <button onClick={() => setState3((prev) => (prev <= 0) ? 0 : prev - 1)}>-</button>
              <h2 className="B">{state3}</h2>
              <button onClick={() => setState3(prev => prev + 1)}>+</button>
            </div>
            <h2 className="P2">Rs. 500</h2>
          </div>
        </div>
        <div className="Container-2">
          <div className="flex-1">
            <h2>Total</h2>
            <h2>{((state1 + state2 + state3) * 500) * 0.85}</h2>
            <h3>You saved Rs. {((state1 + state2 + state3) * 500) * 0.15}!!</h3>
            <h3>Order Instructions</h3>
            <select>
              <option>Cash On Delivery</option>
              <option >Debit/Credit Card</option>
            </select>
            <h4>Tax included. <span>Shipping</span> calculated at checkout</h4>
            <button><a href="/Home">Checkout</a></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;