// Register.js
import React from 'react';

function Register() {
  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form>
        <input type="text" placeholder="Nombre" className="form-input" />
        <input type="email" placeholder="Correo Electrónico" className="form-input" />
        <input type="password" placeholder="Contraseña" className="form-input" />
        <button type="submit" className="form-button">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
