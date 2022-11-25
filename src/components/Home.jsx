import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Home">
      <div>
        {" "}
        <h1>Header</h1>
      </div>
      <h1> Lista de Clientes</h1>
      {data.map((item) => (
        <Link key={item.cliente} to={`/cliente/${item.cliente}`}>
          {" "}
          <p> {item.cliente}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
