import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Fetch from "../Fetch/fetch";

const Navbar = ({sidebar, setSidebar}) => {
  const { data } = Fetch();
  const [change, setChange] = useState("");
  const [close, setClose] = useState(true); // eslint-disable-next-line
  const [title, setTitle] = useState(""); // eslint-disable-next-line
  const [obj, setObj] = useState(); // eslint-disable-next-line
  const [click, setClick] = useState(true); 
  const [user, setUser] = useState();
  const handleLogout = () => {
    setUser({});
    localStorage.clear();
    window.location.href = "https://main--relaxed-torrone-590e0d.netlify.app/";
  };

  const showSidebar = () => setSidebar(!sidebar);

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

  const handleBox = () => {
    window.location.reload();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="flex">
            <img
              src="https://www.freeiconspng.com/thumbs/bookstore-icon/book-store-icon-31.png"
              alt=""
              height="55px"
              width="50px"
            />
            <a href="/" className="bookly">
              <h1>Bookly</h1>
            </a>
            <p className="input">
              <input
                type="text"
                placeholder="Search here..."
                className="searchbar"
                onChange={(e) => setChange(e.target.value)}
                value={change}
              />
              <button onClick={(e) => handle(e, change)} className="click">
                <i class="fa fa-search"></i>
              </button>
            </p>
            <div className={close ? "searchbox" : "closed"}>
              {data // eslint-disable-next-line
                .filter((post) => {
                  if (change === "") {
                    // eslint-disable-next-line
                    return;
                  } else if (
                    post.title.toLowerCase().includes(change.toLowerCase())
                  ) {
                    return post;
                  }
                })
                .map((post, index) => (
                  <div className="box" key={index}>
                    <h3 onClick={handleBox}>{post.title}</h3>
                  </div>
                ))}
            </div>
          </div>
          {user && (
            <div className="Logged">
              <h3>{user}</h3>
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
              <div className="Log">
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
            </a>
          )}
          <a href="/Cart" className="Link2">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
