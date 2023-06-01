import { Link } from "react-router-dom";
const Genres = () => {
  return (
    <div className="Grid">
      <div className="Container">
        <Link to="/Box"><h2>Romance</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>Action</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>Mystery</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>History</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>Children's</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>Adult</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>Fantasy</h2></Link>
      </div>
      <div className="Container">
        <Link to="/Box"><h2>Historical Fiction</h2></Link>
      </div>
    </div>

  );
}

export default Genres;