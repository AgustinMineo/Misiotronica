import React from 'react'

function Contact() {
  return (
    <div className='mt-5'>
      <form className='container'>
        <div className="mb-3">
          <label htmlFor="emailText" className="form-label">Correo electrónico *</label>
          <input type="email" className="form-control"  id="email" aria-describedby="email" required/>
          <div id="emailHelp" className="form-text">¡Nosotros nunca vamos a compartir tu correo con nadie!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="Nombre" className="form-label">Nombre *</label>
          <input type="text" className="form-control" id="name" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="Apellido" className="form-label">Apellido *</label>
          <input type="text" className="form-control" id="apellido" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="Direccion" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="direccion" />
        </div>
        <div className="mb-3">
          <label htmlFor="Altura" className="form-label">Altura</label>
          <input type="text" className="form-control" id="altura"/>
        </div>
        <div className="mb-3">
          <label htmlFor="Nota" className="form-label">Comentario / Pedido *</label>
          <textarea type="textarea" className="form-control" id="nota" rows={5} cols={50} required/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="nov&ofertas"/>
          <label className="form-check-label" htmlFor="nov&ofertas">¿Desea recibir novedades y ofertas?</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export {Contact}
