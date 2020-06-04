import React, { useReducer } from "react";
import proyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  //serie de funciones para el crud
  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
