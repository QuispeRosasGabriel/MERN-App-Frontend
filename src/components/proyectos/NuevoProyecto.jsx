import React, { Fragment, useState, useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
const NuevoProyecto = () => {
  //obtener el state del formulario
  const proyectosContext = useContext(ProyectoContext);
  const { formulario, handleShowForm } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  //Capturando contenido del input
  const handleAddProyect = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //envio del formulario
  const handleSendForm = (e) => {
    e.preventDefault();
    //validar el proyecto

    //agregar al state

    //reiniciar el form
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => handleShowForm()}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form
          action=""
          className="formulario-nuevo-proyecto"
          onSubmit={handleSendForm}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del proyecto"
            name="nombre"
            value={nombre}
            onChange={handleAddProyect}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
