import React from 'react'

function Contact() {
  return (
    <div className='mt-5'>
      <form className='container'>
        <div class="mb-3">
          <label for="emailText" class="form-label">Correo electronico *</label>
          <input type="email" class="form-control"  id="email" aria-describedby="email" required/>
          <div id="emailHelp" class="form-text">Nosotros nunca vamos a compartir tu correo con nadie!</div>
        </div>
        <div class="mb-3">
          <label for="Nombre" class="form-label">Nombre *</label>
          <input type="text" class="form-control" id="name" required/>
        </div>
        <div class="mb-3">
          <label for="Apellido" class="form-label">Apellido *</label>
          <input type="text" class="form-control" id="apellido" required/>
        </div>
        <div class="mb-3">
          <label for="Direccion" class="form-label">Dirección</label>
          <input type="text" class="form-control" id="direccion" />
        </div>
        <div class="mb-3">
          <label for="Altura" class="form-label">Altura</label>
          <input type="text" class="form-control" id="altura"/>
        </div>
        <div class="mb-3">
          <label for="Nota" class="form-label">Comentario / Pedido *</label>
          <textarea type="textarea" class="form-control" id="nota" rows={5} cols={50} required/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="nov&ofertas"/>
          <label class="form-check-label" for="nov&ofertas">Desea recibir novedades y ofertas?</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export {Contact}
