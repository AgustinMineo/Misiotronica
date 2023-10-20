import {React,useState} from 'react'
import {consultaForm} from './validations.js'

function Contact() {

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
  
  const handleSubmit = async (e) => {
   
    consultaForm(formData)
  };

   return (
    <div className='mt-5'>
      <form className='container' onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export {Contact}
