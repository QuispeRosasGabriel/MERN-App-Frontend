import React, { useContext } from "react";
import TareaContext from "../../context/tareas/TareaContext";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const Tarea = ({ tarea }) => {
  // Extraer un proyecto si esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //llamando context
  const tareasContext = useContext(TareaContext);
  const {
    deleteTodo,
    getTodos,
    changeTodoState,
    saveActualTodo,
  } = tareasContext;

  //EXtraer proyecto
  const [proyectoActual] = proyecto;

  //funcion que se ejecuta cuando usuario presiona boton de eliminar tarea
  const todoDelete = (id) => {
    deleteTodo(id);
    getTodos(proyectoActual.id);
  };

  //funcion que modifica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    changeTodoState(tarea);
  };

  //agrega una tarea actual cuando el usuario desea editarla
  const selecTodo = () => {};

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            onClick={() => cambiarEstado(tarea)}
            type="button"
            className="completo"
          >
            Completo
          </button>
        ) : (
          <button
            onClick={() => cambiarEstado(tarea)}
            type="button"
            className="incompleto"
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          onClick={() => selectTodo(tarea)}
          className="btn btn-primario"
        >
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
