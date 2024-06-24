import React from "react";

const Modal = ({ close, book }) => {
  return (
    <div className="Background">
      <div className="MContainer">
        <div>
          <img
            src={book.img}
            width="200px"
            alt=""
            height="250px"
          />
        </div>
        <h2>{book.name}</h2>
        <h4>Product-Code: 110234533</h4>
        <h4>Publisher: Picasos</h4>
        <h2>Rs.{book.nprice} (including shipping charges)</h2>
        <h4>Warranty-6 months</h4>
        <button onClick={() => close(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
