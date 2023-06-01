import './App.css';
import { useState, useEffect } from 'react';
import Results from './results';
import Fetch from './usefetch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Box from './Box';
import Cart from './Cart';

function App() {
  const { map } = Fetch();
  const [title, setTitle] = useState();
  const [obj, setObj] = useState();
  const [change, setChange] = useState('');
  const [click, setClick] = useState(true);

  const handle = (nam, e) => {
    e.preventDefault();
    if (nam !== '')
      setClick(false);
    map.forEach((m) => {
      if (m.title === nam) {
        setTitle(m.title);
        setObj(m);
      }
    })
  }

  return (
    <Router>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="App">
        <Switch>
          <Route path="/Home">
            <header className="Navbar">
              <div className="flex">
                <img src="https://www.freeiconspng.com/thumbs/bookstore-icon/book-store-icon-31.png" alt="" height="70px" width="65px" />
                <h1>Roy's Book Store</h1>
                <p><input type="text" placeholder='Search by title,author or keyword' onChange={(e) => setChange(e.target.value)} /><button onClick={(e) => handle(change, e)}><i class="fa fa-search"></i></button></p>
                <a href="/Home" className='Link1'><h3>Log in</h3></a>
                <a href="/Cart" className='Link2'><h3>Your Cart</h3></a>
              </div>
              <div className='F'>
                <h1>Lots of E-Books </h1>
                <h3>Welcome to our friendly neighbourhood Library. We have more than 50,000 ebooks and books waiting to be discovered</h3>
              </div>
            </header>
            {
              map.filter(post => {
                if (change === '') {
                  return;
                }
                else if (post.title.toLowerCase().includes(change.toLowerCase())) { return post; }
              }).map((post, index) => (
                <div className="box" key={index}>
                  <h3>{post.title}</h3>
                </div>
              ))
            }

            <Results click={click} title={title} obj={obj} />
          </Route>
          <Route path="/Box">
            <Box />
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