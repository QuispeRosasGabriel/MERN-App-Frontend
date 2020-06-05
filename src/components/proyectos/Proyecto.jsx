import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";
const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(ProyectoContext);
  const { handleCurrentProject } = proyectosContext;

  const tareasContext = useContext(TareaContext);
  const { getTodos } = tareasContext;
  //funcion para agregar el proyecto actual
  const selectProject = (id) => {
    handleCurrentProject(id);
    getTodos(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
