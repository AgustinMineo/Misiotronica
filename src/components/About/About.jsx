import React from 'react'
import { TeamCard } from './Team/TeamCard';
const teamList = [];
teamList.push(
  {
    fullName:'Agustin Mineo',
    description:'Seller',
    img : require('./src/photo1.png')
});
teamList.push(
    {
      fullName:'Agustin Mineo',
      description:'CEO',
      img : require('./src/photo1.png')
});
teamList.push(
      {
        fullName:'Agustin Mineo',
        description:'CEO',
        img : require('./src/photo1.png')
});
teamList.push(
        {
          fullName:'Agustin Mineo',
          description:'CEO',
          img : require('./src/photo1.png')
});
teamList.push(
          {
            fullName:'Agustin Mineo',
            description:'CEO',
            img : require('./src/photo1.png')
});
teamList.push(
            {
              fullName:'Agustin Mineo',
              description:'CEO',
              img : require('./src/photo1.png')
});

function About() {
  return (
    <>
      <div className="py-4 container mx-0">
        <h1 className='mb-3'>Pasión por la electrónica</h1>
        <h4 className='mb-4'>Con Misiotrónica, la electrónica cobra vida y la tecnología está al alcance de tus manos.</h4>
        <p className='fs-5 text-break'>
          Nosotros comenzamos Misiotrónica con una visión clara: hacer que la electrónica sea accesible para todos.
          Desde cables hasta placas, baterías, luces y sensores,
          nuestra tienda online ofrece productos de alta calidad para entusiastas y profesionales.
          Nos apasiona la tecnología y estamos aquí para ayudarte a llevar tus proyectos al siguiente nivel.<br/>
          <span className='fw-bold'>¡Únete a nuestra comunidad de amantes de la electrónica y descubre un mundo de posibilidades con Misiotrónica!</span>
        </p>
        <div className="mt-5">
          <hr/>
          <h1 className='text-center mb-5'>Nuestro equipo</h1>
          <div className="row">
            <div className='col-lg-12 w-100'>
              <div className='d-flex flex-wrap w-100'>
              {teamList.map(team => (
                <TeamCard
                fullName={team.fullName}
                title={team.description}
                img={team.img}
                />
                ) )}
                </div>
            </div>
          </div>
        </div>
    </div>
  </>
  )
}

export {About}
