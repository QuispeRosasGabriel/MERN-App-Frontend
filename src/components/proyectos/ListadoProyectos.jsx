import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoProyectos = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, handleGetProjects } = proyectosContext;

  useEffect(() => {
    handleGetProjects();
  }, []);

  if (proyectos.length === 0)
    return <p>Empieza a crear tus proyectos y llega al éxito!</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto, i) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
