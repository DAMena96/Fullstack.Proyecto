// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Registro from './Registro';
import InicioSesion from './InicioSesion';
import CrearEquipo from './CrearEquipo';
import Jugador from './Jugador';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/registro" component={Registro} />
        <Route path="/inicio-sesion" component={InicioSesion} />
        <Route path="/crear-equipo" component={CrearEquipo} />
        <Route path="/jugador/:id" component={Jugador} />
      </Switch>
    </Router>
  );
}

export default Routes;
