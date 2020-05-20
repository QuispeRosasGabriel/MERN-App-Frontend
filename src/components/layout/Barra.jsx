import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Gabriel</span>
      </p>
      <div className="nav-principal">
        <a href="#!">Cerrar Sesión</a>
      </div>
    </header>
  );
};

export default Barra;
