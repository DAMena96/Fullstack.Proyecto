// Login.js
import React from 'react';

function Login() {
  return (
    <div className="inicio-sesion-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <input type="email" placeholder="Correo Electrónico" className="form-input" />
        <input type="password" placeholder="Contraseña" className="form-input" />
        <button type="submit" className="form-button">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
