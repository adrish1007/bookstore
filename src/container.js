const Container = ({ title, object }) => {
  
  return (
    <>
      <div className="found">
        <h2>The book you were searching for has been found!!</h2>
        <p><h3>The name is {title}</h3></p>
        <p><h4>It's version is {object.version}</h4></p>
        <p><h4>It's popularity is {object.popularity}</h4></p>
        <p><h4>It's genre is {object.genre}</h4></p>
        <a href="/Home"><h4>Add to Cart</h4></a>
      </div>
    </>
  );
}

export default Container;