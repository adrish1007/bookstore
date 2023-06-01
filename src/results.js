import React from "react";
import { useState, useEffect } from "react";
import Box from "./Box";
import Container from "./container";
import Genres from "./Genres";
import Fetch from "./usefetch";

const Results = ({ click, title, obj }) => {

  const { map } = Fetch();

  const myFunction = () => {
    return (
      <>
        <div className="genres">
          <h1>Browse Genres </h1>
          <h4>(View all)</h4>
        </div>
        <Genres />
      </>
    );
  }
  return (
    <>
      {click && myFunction()}
      {title && <Container title={title} object={obj} />}
    </>
  );
}

export default Results;