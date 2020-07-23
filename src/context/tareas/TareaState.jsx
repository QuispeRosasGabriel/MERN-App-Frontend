import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Pasarelas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Pasarelas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir Pasarelas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Pasarelas de pago", estado: false, proyectoId: 4 },
    ],
    tareasProyecto: null,
  };

  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear las funciones
  //obtener las tareas de un proyecto
  const getTodos = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //agregar tarea al proyecto seleccionado
  const addTodo = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        getTodos,
        addTodo,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
