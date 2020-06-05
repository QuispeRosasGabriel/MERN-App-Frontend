import React, { useReducer } from "react";
import proyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import {
  FORMULARIO_PROYECTO,
  LISTAR_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";
import { v4 as uuid } from "uuid";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "tienda virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "diseño de sitio web" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorFormulario: false,
    proyecto: null,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  //serie de funciones para el crud
  const handleShowForm = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const handleGetProjects = () => {
    dispatch({
      type: LISTAR_PROYECTOS,
      payload: proyectos,
    });
  };

  const handleAddNewProject = (proyecto) => {
    proyecto.id = uuid;
    //insertar proyecto en el state
    dispatch({ type: AGREGAR_PROYECTO, payload: proyecto });
  };

  //VALIDA EL FORMULARIO POR SI HAY ERRORES
  const handleShowError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  //seleccionar un proyecto
  const handleCurrentProject = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  //elimina proyecto
  const handleDeleteProject = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        proyecto: state.proyecto,
        handleShowError,
        handleShowForm,
        handleGetProjects,
        handleAddNewProject,
        handleCurrentProject,
        handleDeleteProject,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
