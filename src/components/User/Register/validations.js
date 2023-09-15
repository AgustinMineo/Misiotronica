export function validateEmail(email) {
    if (!email) {
      return 'El campo de correo electrónico no puede estar vacío.';
    }
  
    const validEmailDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com'];
    const emailDomain = email.split('@')[1];
    if (!emailDomain) {
        return 'El correo tiene que tener una extensión válida.';
    }else if(!validEmailDomains.includes(emailDomain.toLowerCase())){
        return 'La extensión del correo electrónico no es válida.';
    }
    return true;
  }
  
  export function validateUsuario(usuario) {
    if (!usuario) {
      return 'El campo de usuario no puede estar vacío.';
    } else if (usuario.length < 3) {
      return 'El campo de usuario no puede tener menos de 3 caracteres.';
    }else{
        return true; 
    }
  }
  
  export function validatePassword(password, repeatPassword) {
    if (!password) {
      return 'El campo de contraseña no puede estar vacío.';
    } else if (password !== repeatPassword) {
      return 'Las contraseñas no coinciden.';
    } else if (password.length <= 6) {
      return 'Las contraseñas deben tener al menos 7 caracteres.';
    }else{
        return true; 
    }
  
  }