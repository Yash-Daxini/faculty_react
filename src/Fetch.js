import { useState, useEffect } from "react";

const Fetch = () => {
  const [ans, setans] = useState([]);

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setans(data);
      });
  }, []);

  let arr = ans;

  return <>{arr}</>;
};

export default Fetch;
