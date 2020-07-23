import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { id: 2, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      {
        id: 3,
        nombre: "Elegir Pasarelas de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 4, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 5,
        nombre: "Elegir Pasarelas de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 6, nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      {
        id: 7,
        nombre: "Elegir Pasarelas de pago",
        estado: false,
        proyectoId: 3,
      },
      { id: 8, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      {
        id: 9,
        nombre: "Elegir Pasarelas de pago",
        estado: false,
        proyectoId: 4,
      },
    ],
    tareasProyecto: null,
    errorTarea: false,
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

  //valida y muestra un error
  const validateTodo = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //ELIMINAR TAREA POR ID
  const deleteTodo = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //cambia el estado de una tarea
  const changeTodoState = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        getTodos,
        addTodo,
        validateTodo,
        deleteTodo,
        changeTodoState,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
