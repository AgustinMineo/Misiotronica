import React from 'react'
import img404 from './Scarecrow.png';
function NotFound() {
  return (
    <div className="d-flex flex-wrap align-items-center mt-5">
        <main>
            <div className="row mb-5">
                <div className="col-lg-7 col-sm-12 text-center col-md-8">
                    <img src={img404} alt="404 NOT FOUND" width="539.22px" height="447.43px" className="img-fluid"  srcset=""/>
                </div>
                <section className="col-lg-5 col-sm-12 font-monospace col-md-4 justify-content-center align-items-center">
                    <p className="fs-1 text-bold w-75 text-center text-md-sm">Tenemos malas noticias!</p>
                    <div className="mb-5">
                        <p className="fs-5 w-75">La pagina que estas buscando fue removida o no se encuentra disponible actualmente</p>
                    </div>
                </section>
            </div>
        </main>
    </div>
  )
}

export {NotFound}
