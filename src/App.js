// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gestión de Equipos de Fútbol</h1>
        </header>
        <main>
          <div className="form-container">
            <nav>
              <ul>
                <li>
                  <Link to="/registro" className="nav-link">Registro</Link>
                </li>
                <li>
                  <Link to="/inicio-sesion" className="nav-link">Inicio de Sesión</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/registro" element={<Register />} />
              <Route path="/inicio-sesion" element={<Login />} />
            </Routes>
          </div>
        </main>
        <footer>
          <p>Andres Mena © 2023</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
