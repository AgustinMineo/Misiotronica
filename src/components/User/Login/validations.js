import { setToken, setRole } from '../../../store/actions.js';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
export function validateUsuario(usuario) {
    if (!usuario) {
      return 'El campo de usuario no puede estar vacío.';
    } else if (usuario.length < 3) {
      return 'El campo de usuario no puede tener menos de 3 caracteres.';
    }else{
        return true; 
    }
  }
  
  export function validatePassword(password) {
    if (!password) {
      return 'El campo de contraseña no puede estar vacío.';
    } else if (password.length <= 6) {
      return 'Las contraseñas deben tener al menos 7 caracteres.';
    }else{
        return true; 
    }
}

export async function loginUsuario(username, user_password,dispatch) {

  try {
    const response = await fetch('https://misiotronica.up.railway.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, user_password }),
    });

    if (response.status === 200) {
      const data = await response.json();
      dispatch(setToken(data.token))
      dispatch(setRole(data.rol))
      return { success: true, token: data.token };
    } else {
      const data = await response.json();
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error, el usuario o la contraseña no existen.',
        showConfirmButton: false,
        timer: 1500
      })
      return { success: false, error: data.error };
    }
  } catch (error) {
    return { success: false, error: 'Error al iniciar sesión' };
  }
}