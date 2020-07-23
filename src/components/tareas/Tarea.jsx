import React, { useContext } from "react";
import TareaContext from "../../context/tareas/TareaContext";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const Tarea = ({ tarea }) => {
  // Extraer un proyecto si esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //llamando context
  const tareasContext = useContext(TareaContext);
  const { deleteTodo, getTodos } = tareasContext;

  //EXtraer proyecto
  const [proyectoActual] = proyecto;

  //funcion que se ejecuta cuando usuario presiona boton de eliminar tarea
  const todoDelete = (id) => {
    deleteTodo(id);
    getTodos(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => todoDelete(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
