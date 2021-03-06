import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import swal from "sweetalert";
import TareaContext from "../../context/tareas/TareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, handleDeleteProject } = proyectosContext;

  //Obtener las tareas del context
  const tareasContext = useContext(TareaContext);
  const { tareasProyecto } = tareasContext;

  //si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto para empezar</h2>;
  }

  const [proyectoActual] = proyecto;

  const deleteProject = () => {
    swal({
      title: `Estas seguro de borrar el proyecto ${proyectoActual.nombre} ?`,
      text: "Si lo borras no podras recuperarlo",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("El proyecto ha sido eliminado!", {
          icon: "success",
        });
        handleDeleteProject(proyectoActual.id);
      } else {
        swal("No se ha eliminado tu proyecto!");
      }
    });
  };

  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasProyecto.map((tarea, i) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={deleteProject}
        >
          Eliminar proyecto &times;
        </button>
      </ul>
    </>
  );
};

export default ListadoTareas;
