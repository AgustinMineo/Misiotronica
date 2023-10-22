import {React,useState} from 'react'
import {consultaForm} from './validations.js'
import Swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [captcha, setCaptcha] = useState('');
  const [formOk, setFormOk] = useState(false);
  const handleSentContact = async () => {
    setFormOk(false)
    const result = await Swal.fire({
      title: 'Consulta',
      text: `¿Deseas enviar la consulta?`,
      imageHeight: 300,
      imageWidth: 300,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    })
    

    if(formData.apellido && formData.name && formData.email && formData.nota){
      setFormOk(true)
    }else{
      setFormOk(false)
    }


    if (result.isConfirmed && captcha && formOk ) {

    const response = await consultaForm(formData)
    if (response === 400) {
        Swal.fire({
          title: 'Oops!',
          text: `"Error en el formato de envio. Por favor contactar con soporte tecnico. Code : 400`,
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar'
        })
      } else if (response === 201) {  
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
            setFormData({
        email: '',
        name: '',
        apellido: '',
        direccion: '',
        altura: '',
        nota: '',
      })
    }
  }
  else if (!captcha && result.isConfirmed) {

    Swal.fire({
      title: 'Oops!',
      text: `"Confirma que no eres un robot!`,
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar'
    })
  }else if (!formOk && result.isConfirmed) {
      Swal.fire({
        title: 'Oops!',
        text: `"Debe completar todos los campos antes de enviar el formulario!`,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      })
  }else if(!result.isDenied){
    Swal.fire(
      'Consulta cancelada!',
      'Su consulta fue cancelada',
      'success'
      )
  }else {
    Swal.fire({
      title: 'Oops!',
      text: 'Error al enviar el formulario!',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar'
    });
  }
  };
  const handleCaptchaChange = (value) => {
    setCaptcha(value);
  }

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    apellido: '',
    direccion: '',
    altura: '',
    nota: '',
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

   return (
    <div className='mt-5'>
      <form className='container' onSubmit={handleSentContact}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico *</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre *</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido *</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            required
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="altura" className="form-label">Altura</label>
          <input
            type="text"
            className="form-control"
            id="altura"
            value={formData.altura}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nota" className="form-label">Comentario / Pedido *</label>
          <textarea
            className="form-control"
            id="nota"
            rows={5}
            required
            value={formData.nota}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex flex-wrap align-items-center ">
        <div className="mb-3 mx-5" id='recaptcha'>
            <ReCAPTCHA
              value={captcha}
              sitekey="6LeD9CkoAAAAAGDqpUj_ZaEUHRs1LEmoC5Sw8mvf"
              onChange={handleCaptchaChange}
              /> 
          </div>
        <button type="submit" onClick={handleSentContact} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export {Contact}
