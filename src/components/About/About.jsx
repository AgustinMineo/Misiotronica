import {React,useState,useEffect} from 'react'
import { TeamCard } from './Team/TeamCard';

function About() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/teamData.json');
        const data = await response.json();
        setTeamData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del equipo:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="py-4 container mx-0">
        <div className="container mt-5">
          <h1 className='mb-3'>Pasión por la electrónica</h1>
          <h4 className='mb-4'>Con Misiotrónica, la electrónica cobra vida y 
          la tecnología está al alcance de tus manos.</h4>
          <p>
            ¡Bienvenidos a Misiotrónica, tu socio de confianza en el apasionante mundo 
            de la electrónica y variedad! En Misiotrónica, estamos dedicados a 
            ofrecerte una experiencia de compra única y satisfactoria.
          </p>
          <p>
            Nuestro equipo de ventas está formado por expertos apasionados por la 
            tecnología. Cada miembro de nuestro equipo está altamente 
            capacitado y siempre está al tanto de las últimas novedades y avances 
            en el mundo de la electrónica. 
            ¿Buscas el último smartphone de vanguardia, una computadora de alto 
            rendimiento u otros dispositivos electrónicos innovadores?
            ¡Estamos aquí para asesorarte! Comprendemos que cada cliente es único, 
            y nuestro objetivo es recomendarte las mejores 
            opciones personalizadas para satisfacer tus necesidades y superar tus 
            expectativas.
          </p>
          <p>
            En Misiotrónica, nuestra prioridad es brindarte una experiencia de 
            atención al cliente sobresaliente. 
            Nuestro equipo está disponible para ayudarte con cualquier consulta 
            o problema que puedas tener. 
            Desde responder preguntas técnicas hasta brindarte soporte posventa, 
            estamos comprometidos a proporcionarte respuestas rápidas, 
            precisas y amigables. Tu satisfacción es nuestra mayor recompensa.
          </p>
          <p>
            Nos enorgullecemos de contar con un equipo de atención al cliente 
            cálido y accesible. 
            No solo somos expertos en tecnología, sino que también valoramos la 
            importancia de escuchar tus inquietudes y 
            proporcionarte soluciones efectivas. Ya sea que necesites ayuda para 
            configurar un dispositivo, 
            resolver problemas técnicos o hacer seguimiento de tu pedido, estamos 
            aquí para brindarte una asistencia 
            personalizada en cada paso del proceso.
          </p>
          <p>
            En Misiotrónica, apreciamos tus opiniones y sugerencias. Creemos que 
            tu feedback es esencial para mejorar constantemente 
            nuestros servicios y productos. Siempre estamos en busca de maneras 
            de superar tus expectativas y 
            brindarte una experiencia de compra inigualable.
          </p>
          <p>
            Gracias por elegir a Misiotrónica como tu destino tecnológico. <br/><br/>
            <span className='fw-bold'>¡Únete a nuestra comunidad de amantes de 
            la electrónica y descubre un mundo de posibilidades 
            con Misiotrónica!</span>
          </p>
          </div>
        <div className="mt-5">
          <hr />
          <h1 className='text-center mb-5'>Nuestro equipo</h1>
          <hr />
          {loading ? (
            <p>Cargando datos del equipo...</p>
          ) : (
            <>
              {Object.keys(teamData).map(category => (
                <div key={category}>
                  <h2 className='text-center'>{category}</h2>
                  
                  <div className="row">
                    <div className='col-lg-12 w-100'>
                      <div className='d-flex flex-wrap w-100'>
                        {teamData[category].map(team => (
                          <TeamCard
                            key={team.id}
                            fullName={team.fullName}
                            description={team.description}
                            img={team.imagen}
                            email={team.email}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
  </>
  )
}

export {About}
