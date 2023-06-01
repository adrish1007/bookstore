import { useState } from "react";

const Modal = ({close}) => {
  return ( 
    <div className="Background">
      <div className="MContainer">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zRxeg-beEyQkDMy48FoJ4-w1dlLjZ_FRfA&usqp=CAU" width="300px" height="300px"/>
        </div>
        <h3>Product-Code: 110234533</h3>
        <h3>Publisher: Picasos</h3>
        <h2>Rs.499 (including shipping charges)</h2>
        <h4>Warranty-6 months</h4>
        <a href="/Cart"><h3>Add to Cart</h3></a>
        <button onClick={()=>close(false)}>Cancel</button>
      </div>
    </div>
   );
}
 
export default Modal;