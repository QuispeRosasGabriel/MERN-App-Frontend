import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(ProyectoContext);
  const { handleCurrentProject } = proyectosContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => handleCurrentProject(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
