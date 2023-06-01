import { useState, useEffect } from "react";
const Fetch = () => {
  const [map, setMap] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/body')
      .then(res => res.json())
      .then(data => setMap(data))
  }, [])
  return { map };
}

export default Fetch;