import React, { useState, useEffect } from "react";
import data from "../db.json";
import { useParams } from "react-router-dom";
import "../styles/styles.css";
let num = 1;

function validadRespuesta(respuesta) {
  if (respuesta !== "respuesta verbal") return "Respuesta " + respuesta;
}

const Contador = () => {
  var total = num++;
  return total;
};

const Cliente = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [cliente, setCliente] = useState({});
  useEffect(() => {
    const aux = data.find((element) => element.cliente === params.cliente);
    setCliente(aux);
    setLoading(false);
  }, [params.cliente]);

  if (loading) {
    return (
      <div className="fondo">
        <p className="Cargando">Cargando informacion ...</p>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header">
          <div className="haedercontainer">
            <div className="menucontainer">
              <img
                className="imgcss"
                src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"
              />
            </div>
          </div>
        </div>
        <div className="fondo">
          <div className="contenedorabajo">
            <h1 className="NombreC">{cliente.cliente}</h1>
            <h1 className="test">Test: Test de usabilidad en el sitio web</h1>
            <h2 className="testeador">Testeador 1</h2>
            <video width="100%" height="825px" controls>
              <source src={cliente.linkVideo} type="video/mp4" />
            </video>
            <div>
              <h1 className="transcr">Transcripción</h1>
              <div className="oveflow">
                <p className="ptranscr">{cliente.transcripcion}</p>
              </div>
              <h1 className="transcr">Tareas</h1>
              <p className="esce">{cliente.escenario}</p>

              <div>
                {cliente.preguntas.map((item, i) => (
                  <div key={i}>
                    <div className="tareas" >
                      <p className="subtarea">
                        <strong>
                          <span>Tarea {Contador()}: </span>
                        </strong>{" "}
                      </p>
                      <p className="subtareaw">
                        <strong>
                          <br />
                          <span>{item.texto}</span>
                        </strong>
                      </p>
                      <p className="respuesta">
                        {validadRespuesta(item.respuesta)}
                      </p>
                    </div>
                    <p className="duraciontarea">
                      {" "}
                      Duración de la tarea: {item.tiempo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cliente;
