import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, handleGetProjects } = proyectosContext;

  useEffect(() => {
    handleGetProjects();
  }, []);

  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto, i) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} key={i} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
