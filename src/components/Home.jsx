import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

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
    <div className="fondo" >
      <div className="header">
        <div className="haedercontainer">
          <div className="menucontainer">
            <img alt="Logo"
              className="imgcss"
              src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"
            />
          </div>
        </div>
      </div>
      <div className="contenedorabajo">
      <h1 className="NombreC"> Lista de Clientes: </h1>
      <div className="bordecliente"> </div>
      {data.map((item) => (
        <Link key={item.cliente} to={`/cliente/${item.cliente}`}>
          <h2 className="clientes"> {item.cliente}</h2>
        </Link>
        
      ))}
      </div>
      </div>
  );
};

export default Home;
