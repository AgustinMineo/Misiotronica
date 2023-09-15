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