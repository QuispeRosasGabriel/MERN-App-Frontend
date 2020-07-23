import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(TareaContext);
  const { addTodo } = tareasContext;

  //State del form
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

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

    //pasar validacion

    //agregar nueva tarea al state de tareas
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    addTodo(tarea);
    //reiniciar el form
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
            value="Agregar Tarea"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
