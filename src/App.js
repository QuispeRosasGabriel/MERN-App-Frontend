import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          {/* Switch es como el router outlet y todo lo que este afuera se vera en todas las páginas como por ejemplo el navbar */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
