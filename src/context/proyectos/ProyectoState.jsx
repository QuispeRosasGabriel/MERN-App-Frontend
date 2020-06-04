import React, { useReducer } from "react";
import proyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import { FORMULARIO_PROYECTO, LISTAR_PROYECTOS } from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "tienda virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "diseño de sitio web" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  //serie de funciones para el crud
  const handleShowForm = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const handleGetProjects = (proyecos) => {
    dispatch({
      type: LISTAR_PROYECTOS,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        handleShowForm,
        handleGetProjects,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
