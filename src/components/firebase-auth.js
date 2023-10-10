
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const registrarConEmailYContraseña = async (email, contraseña) => {
  try {
    await createUserWithEmailAndPassword(auth, email, contraseña);
   
  } catch (error) {
    console.error('Error de registro:', error);
    
  }
};

const iniciarSesiónConEmailYContraseña = async (email, contraseña) => {
  try {
    await signInWithEmailAndPassword(auth, email, contraseña);
    
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    
  }
};

export { registrarConEmailYContraseña, iniciarSesiónConEmailYContraseña };
