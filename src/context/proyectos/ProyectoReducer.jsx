import { FORMULARIO_PROYECTO, LISTAR_PROYECTOS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case LISTAR_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    default:
      return state;
  }
};
