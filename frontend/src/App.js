import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from "./Fetch/results";
import Fetch from "./Fetch/fetch";
import Box from "./Components/Box";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import "./CSS/App.css";

function App() {
  const { data } = Fetch();
  const [title, setTitle] = useState("");
  const [obj, setObj] = useState();
  const [close, setClose] = useState(true);
  const [change, setChange] = useState("");
  const [user, setUser] = useState();
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    window.location.href = "http://localhost:3000/";
  };
  const [click, setClick] = useState(true);

  const handle = (e, val) => {
    e.preventDefault();
    if (val !== "") setClick(false);
    data.forEach((obj) => {
      if (obj.title === val) {
        setTitle(obj.title);
        setObj(obj);
        setClose(false);
        setChange("");
      }
    });
  };
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <header className="Navbar">
              <div className="flex">
                <img
                  src="https://www.freeiconspng.com/thumbs/bookstore-icon/book-store-icon-31.png"
                  alt=""
                  height="70px"
                  width="65px"
                />
                <h1>Bookly</h1>
                <p>
                  <input
                    type="text"
                    placeholder="Search here..."
                    onChange={(e) => setChange(e.target.value)}
                    value={change}
                  />
                  <button onClick={(e) => handle(e, change)} className="click">
                    <i class="fa fa-search"></i>
                  </button>
                </p>
                {user && (
                  <div className="Logged">
                    <h3>Logout</h3>
                    <button onClick={handleLogout} className="LogButton">
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                  </div>
                )}
                {!user && (
                  <a href="/Login" className="Link1">
                    <div className="heart">
                      <i class="fa fa-heart-o"></i>
                    </div>
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </a>
                )}
                <a href="/Cart" className="Link2">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </div>
              <div className="header-2">
                <nav className="navbar">
                  <a href="/">Home</a>
                  <a href="/">Featured</a>
                  <a href="/">Arrivals</a>
                  <a href="/">Reviews</a>
                  <a href="/">Contact</a>
                </nav>
              </div>
            </header>
            <Results click={click} title={title} obj={obj} />
            <section className="home" id="home">
              <div className="row">
                <div className="content">
                  <h3>Upto 75% off</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a href="/Box" className="btn">Shop Now</a>
                </div>
                <div className="books-slider">
                  <div className="wrapper">
                    <a href="/">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSaJ_j2p8rqdlxXjv0nUXAcUWg8G2NGobyA&usqp=CAU"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pFad1ryET1b_3shMTN0uLCbQbzL2GLmGTA&usqp=CAU"
                        alt=""
                      />
                    </a>
                    <a href="/">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisitsXflFwqG47SkOEtvlULKIfBdLus0v3Q&usqp=CAU"
                        alt=""
                      />
                    </a>
                  </div>
                  <img
                    src="https://img.freepik.com/premium-photo/blank-shelf_92242-444.jpg?size=626&ext=jpg"
                    alt="" className="stand"
                  />
                </div>
              </div>
            </section>
            <section className="icons-container">
              <div className="icons">
                <i className="fa fa-plane"></i>
                <h3>free shipping</h3>
                <p>order above Rs.100</p>
              </div>
              <div className="icons">
                <i className="fa fa-lock"></i>
                <h3>secure payment</h3>
                <p>100% secure payment</p>
              </div>
              <div className="icons">
                <i className="fa fa-rotate-right"></i>
                <h3>easy returns</h3>
                <p>10 days returns</p>
              </div>
              <div className="icons">
                <i className="fa fa-headphones"></i>
                <h3>24/7 support</h3>
                <p>call us anytime</p>
              </div>
            </section>
            <div className={close ? "searchbox" : "closed"}>
              {data// eslint-disable-next-line
                .filter((post) => {
                  if (change === "") {// eslint-disable-next-line
                    return;
                  } else if (
                    post.title.toLowerCase().includes(change.toLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((post, index) => (
                  <div className="box" key={index}>
                    <h3>{post.title}</h3>
                  </div>
                ))}
            </div>

            <Footer />
          </Route>
          <Route path="/Box">
            <Box />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
