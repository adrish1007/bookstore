/* eslint-disable no-sequences */
import { useState } from "react";
import data from "../Fetch/data/books.json";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
const Box = () => {
  const [state, setState] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();
  let cart = [];
  return (
    <>
      {state && <Modal close={setState} name={name} img={img} price={price} />}
      <header className="Box">
        <div>
          <h1>TOP SELLING BOOKS</h1>
        </div>
        <div>
          <a href="/" >
            Home
          </a>
          <a
            href="/Cart"
            onClick={() => {
              history.push({
                pathname: "/Cart",
                repalce: true,
                state: cart,
              });
            }}
          >
            Your Cart
          </a>
        </div>
      </header>
      <div className="grid">
        {data &&
          data.map((res, index) => (
            <div className="containers" key={index}>
              <div>
                <img src={res.img} alt="" height="150px" width="100px" />
              </div>
              <div>
                <h2>{res.name}</h2>
              </div>
              <div>
                <h3>
                  Rs. <span>{res.price}</span> {res.nprice}
                </h3>
              </div>
              <h3>Discount - {res.discount}%</h3>
              <button
                onClick={() => cart.push({ name: res.name, price: res.nprice })}
              >
                Add to Cart
              </button>
              <button
                onClick={() => (
                  setImg(res.img),
                  setName(res.name),
                  setPrice(res.nprice),
                  setState(true)
                )}
              >
                Click for more
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Box;
