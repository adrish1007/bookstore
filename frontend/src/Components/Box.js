/* eslint-disable no-sequences */
import { useState, useEffect } from "react";
import data from "../Fetch/data/books.json";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";
import Pagination from "./Pagination";
import SortFilter from "./SortFilter";
import Carousel from "react-bootstrap/Carousel";
import "../CSS/Box.css"; // Assume you have a separate CSS file for styling

const Box = () => {
  const [state, setState] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const history = useHistory();

  useEffect(() => {
    let sortedBooks = [...data];

    // Sorting logic
    if (sortOption === "price-asc") {
      sortedBooks.sort((a, b) => a.nprice - b.nprice);
    } else if (sortOption === "price-desc") {
      sortedBooks.sort((a, b) => b.nprice - a.nprice);
    } else if (sortOption === "name") {
      sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Filtering logic
    if (filterOption === "discount") {
      sortedBooks = sortedBooks.filter((book) => book.discount > 0);
    }

    setBooks(sortedBooks);
  }, [sortOption, filterOption]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  const handleMoreInfo = (book) => {
    setSelectedBook(book);
    setState(true);
  };

  return (
    <>
      {state && <Modal close={setState} book={selectedBook} />}
      <header className="Box">
        <div className="title-bar">
          <h1>TOP SELLING BOOKS</h1>
        </div>
        <div>
          <a href="/">Home</a>
          <a
            href="/Cart"
            onClick={() => {
              history.push({
                pathname: "/Cart",
                state: cart,
              });
            }}
          >
            Your Cart
          </a>
        </div>
      </header>
      <div className="carousel1">
      <Carousel data-bs-theme="dark">
        {data.slice(0, 10).map((book, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={book.img}
              alt={`${book.name} slide`}
              height="200px"
              width="180px"
            />
            <Carousel.Caption>
              <h5>{book.name}</h5>
              <p>
                Discount: {book.discount}% | Price: Rs. {book.nprice}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
      <SortFilter
        setSortOption={setSortOption}
        setFilterOption={setFilterOption}
      />
      <div className="grid1">
        {currentBooks.map((book, index) => (
          <div className="containers" key={index}>
            <div>
              <img src={book.img} alt="" height="150px" width="100px" />
            </div>
            <div>
              <h2>{book.name}</h2>
            </div>
            <div>
              <h3>
                Rs. <span>{book.price}</span> {book.nprice}
              </h3>
            </div>
            <h3>Discount - {book.discount}%</h3>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
            <button onClick={() => handleMoreInfo(book)}>Click for more</button>
          </div>
        ))}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </>
  );
};

export default Box;
