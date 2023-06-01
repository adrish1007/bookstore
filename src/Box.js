import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Modal from "./Components/Modal";
const Box = () => {
  const [state, setState] = useState(false);
  return (
    <>
      {state && <Modal close={setState} />}
      <header className="Box">
        <div>
          <h1>Top-Selling Books</h1>
          <h3>For this Genre</h3>
        </div>
        <div><Link to="/Home">Home</Link></div>
      </header>
      <div className="grid">
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRn7EPaFqHrCZuASm0p3hf9kLSngcVGzk-A&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>General Knowledge</h3></div>
          <div><h3>Rs. <span>499</span> 439</h3></div>
          <h3>Discount-12%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pFad1ryET1b_3shMTN0uLCbQbzL2GLmGTA&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>Brain Games</h3></div>
          <div><h3>Rs. <span>487</span> 439</h3></div>
          <h3>Discount-10%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisitsXflFwqG47SkOEtvlULKIfBdLus0v3Q&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>Kindred</h3></div>
          <div><h3>Rs. <span>1099</span> 857</h3></div>
          <h3>Discount-22%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhr7RuQ0l6aSH8tDeEeuFpl7KAnx4eoR4OQ&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>What a Wonderful World</h3></div>
          <div><h3>Rs. <span>399</span> 259</h3></div>
          <h3>Discount-35%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7R7T24Jm3AuOLMRyw4y4YCieJXO1TlcAM1g&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>Your Mental Health</h3></div>
          <div><h3>Rs. <span>1699</span> 1257</h3></div>
          <h3>Discount-26%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrrAwldhVPUdhrrjFa8zQACk-7nYikC6Xazg&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>Mog's Birthday</h3></div>
          <div><h3>Rs. <span>499</span> 439</h3></div>
          <h3>Discount-12%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSaJ_j2p8rqdlxXjv0nUXAcUWg8G2NGobyA&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>The Ambassadors</h3></div>
          <div><h3>Rs. <span>499</span> 439</h3></div>
          <h3>Discount-12%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_t13M1he-JOp3l8rTBJ8UGypoReL2z1Gxw&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>Sicilian</h3></div>
          <div><h3>Rs. <span>499</span> 439</h3></div>
          <h3>Discount-12%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCs9MibYfVIbkFSeaHdbwCGaL8PK1n5qx3vQ&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>The Crusader's Cross</h3></div>
          <div><h3>Rs. <span>499</span> 439</h3></div>
          <h3>Discount-12%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQ6WIe_tP_y8RGD2W8IitY9rDoWPv9jeqZQ&usqp=CAU" alt="" height="150px" width="100px" /></div>
          <div><h3>The Confidence Solution</h3></div>
          <div><h3>Rs. <span>499</span> 439</h3></div>
          <h3>Discount-12%</h3>
          <a href="/Cart"><h3>Add to Cart</h3></a>
          <button onClick={() => setState(true)}>Click for more</button>
        </div>
      </div>
    </>
  );
}

export default Box;