import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  //State del form
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(TareaContext);
  const {
    addTodo,
    validateTodo,
    errorTarea,
    getTodos,
    tareaSeleccionada,
    updateTodo,
  } = tareasContext;

  //Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    tareaSeleccionada !== null
      ? guardarTarea(tareaSeleccionada)
      : guardarTarea({
          nombre: "",
        });
  }, [tareaSeleccionada]);

  //extraer nombre de proyecto
  const { nombre } = tarea;

  //si no hay proyecto seleccionado
  if (!proyecto) {
    return null;
  }

  const [proyectoActual] = proyecto;

  //leer los valores del form
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //Validar
    if (nombre.trim() === "") {
      validateTodo();
      return;
    }
    //pasar validacion
    if (tareaSeleccionada === null) {
      // agregar nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      addTodo(tarea);
    } else {
      updateTodo(tarea);
    }

    //Obtener y filtrar las tareas del proyecto actual
    getTodos(proyectoActual.id);

    //reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form action="" onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
        {errorTarea ? (
          <p className="mensaje error">El nombre de la tarea es obligatorio</p>
        ) : null}
      </form>
    </div>
  );
};

export default FormTarea;
