import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto para empezar</h2>;
  }

  const [proyectoActual] = proyecto;
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Pasarelas de pago", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea, i) => <Tarea tarea={tarea} key={i} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Eliminar proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
