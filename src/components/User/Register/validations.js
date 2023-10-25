import Swal from 'sweetalert2';

import {loginUsuario} from '../Login/validations.js'
export function validateEmail(email) {
    if (!email) {
      return 'El campo de correo electrónico no puede estar vacío.';
    }
  
    const validEmailDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com','misiotronica.com'];
    const emailDomain = email.split('@')[1];
    if (!emailDomain) {
        return 'El correo tiene que tener una extensión válida.';
    }else if(!validEmailDomains.includes(emailDomain.toLowerCase())){
        return 'La extensión del correo electrónico no es válida.';
    }
    return true;
  }

  export function validateCuit(cuit){
    if(!cuit){
      return 'El cuit es requerido';
    }else{
      return true;
    }
  }
  
  export function validateCaptcha(captcha){
    if(!captcha){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifica que no eres un robot!',
      })
    }else{
      return true;
    }
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

  
  export function validateAdress(adress){
    if(!adress){
      return 'La dirección es requerida';
    }else{
      return true;
    }
  }
  export function validateLastname(lastName){
    if(!lastName){
      return 'El apellido es requerido';
    }else{
      return true;
    }
  }
  
  export function validateFirstname(firstName){
    if(!firstName){
      return 'El nombre es requerido';
    }else{
      return true;
    }
  }
  
  export function validateBlock(altura){
    if(!altura){
      return 'La altura es requerida';
    }
     if(parseInt(altura)>=0){
      return true
    }else{
      return 'La altura es tiene que ser un numero positivo';
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

  export async function registerUser(userData,dispatch){
    try{
      const response = await fetch('https://misiotronica.up.railway.app/register/New/', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(userData),  
      });

      if(response.status === 200){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario creado correctamente!',
          showConfirmButton: false,
          timer: 1500
        })
        const status = await loginUsuario(userData.username, userData.user_password,dispatch);
        
        return status.success
        

      }else if(response.status === 400){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Error el usuario, correo o cuit ya existen.`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    }catch (e){
      alert(`${e}`)
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Error al crear el usuario, el error es ${e}`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  export function obtenerFechaActual() {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
  const dia = String(fecha.getDate()).padStart(2, '0');

  const fechaFormateada = `${año}-${mes}-${dia}`;
  
    return fechaFormateada;
  }