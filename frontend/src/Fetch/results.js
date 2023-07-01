import React from "react";
import Container from "../Components/container";
import Genres from "../Components/Genres";

const Results = ({ click, title, obj }) => {
  const myFunction = () => {
    return (
      <>
        <div className="genres">
          <h1>Genres Available</h1>
          <h4>
            <a href="/Box">(Click here to view all)</a>
          </h4>
        </div>
        <Genres />
      </>
    );
  };
  return (
    <>
      {click && myFunction()}
      {title && <Container title={title} object={obj} />}
    </>
  );
};

export default Results;
