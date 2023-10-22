export async function consultaForm (data) {
  try {
    const formData = {
      correo: data.email,
      nombre: data.name,
      apellido: data.apellido,
      direccion: data.direccion,
      altura: data.altura,
      nota: data.nota,
    };

    const response = await fetch('https://misiotronica.up.railway.app/crearConsulta/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    return response.status
   
  } catch (error) {
    console.log('Error al enviar los datos', error);
  }
};

