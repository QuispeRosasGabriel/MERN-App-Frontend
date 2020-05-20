import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "tienda virtual" },
    { nombre: "Intranet" },
    { nombre: "diseño de sitio web" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto, i) => (
        <Proyecto proyecto={proyecto} key={i} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
