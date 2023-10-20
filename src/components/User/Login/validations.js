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

export async function loginUsuario(username, user_password) {
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
      console.log('Token de inicio de sesión:', data.token);
      alert("Usuario logeado correctamente.")
      return { success: true, token: data.token };
    } else {
      const data = await response.json();
      alert("Error al logear el usuario.")
      return { success: false, error: data.error };
    }
  } catch (error) {
    return { success: false, error: 'Error al iniciar sesión' };
  }
}