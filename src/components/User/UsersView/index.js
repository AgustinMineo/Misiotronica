

export async function allUsers (token,role){

    try {
      const response = await fetch('https://misiotronica.up.railway.app/usuarios/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'X-Rol': role.toString(), 
          },
      });
      if (response.status === 200) {
        const data = await response.json();
        return data;
      } 

    } catch (error) {
      return { success: false, error: 'Error al iniciar sesión' };
    }
  }