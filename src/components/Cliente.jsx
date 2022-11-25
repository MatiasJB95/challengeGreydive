import React, { useState, useEffect } from "react";
import data from "../db.json";
import { useParams } from "react-router-dom";
import '../styles/cliente.css'
let num = 1;

const Contador = () => {
var total = num++;
return total;
};

const Cliente = () => {
const params = useParams();
const [loading, setLoading] = useState(true);
const [cliente, setCliente] = useState({});
useEffect(() => {
    const aux = data.find((element) => element.cliente == params.cliente);
    console.log("aux", params.cliente, aux);
    setCliente(aux);
    setLoading(false);
}, [params.cliente]);

if (loading) {
    return <div>Cargando informacion ...</div>;
} else {
    return (
<div>
<div className="header"> 
<div className="haedercontainer">
    <div className="menucontainer">
        <img className="imgcss" src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"  />
    </div>
</div>
</div>
    <div className="fondo">
        <h2>{cliente.cliente}</h2>
        <video width="auto" height="auto" controls>
<source src={cliente.linkVideo} type="video/mp4" />
        </video>
        <p>{cliente.transcripcion}</p>
        <p>{cliente.escenario}</p>
        <div>
{cliente.preguntas.map((item, i) => (
            <div key={i}>
<p>Tarea {Contador()}: </p>
{item.texto}
<p>{item.tiempo}</p>

<br />
            </div>
))}
        </div>
</div>
</div>
    );
}
};

export default Cliente;
