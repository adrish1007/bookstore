const Container = ({ title, object }) => {

  return (
    <>
      <div className="found">
        <h1>The book you were searching for has been found!!</h1>
        <p><h2>The name is {title}</h2></p>
        <p><h3>It's version is {object.version}</h3></p>
        <p><h3>It's popularity is {object.popularity}</h3></p>
        <p><h3>It's genre is {object.genre}</h3></p>
        <a href="/" className="btn">Add to Cart</a>
      </div>
    </>
  );
}

export default Container;