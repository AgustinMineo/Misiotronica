import React from 'react'
import img4 from './src/404 Error Page not Found.gif'
import 'animate.css';
function NotFound() {
  return (
    <>
    <div className="d-flex flex-wrap align-items-center mt-5">
        <main>
            <div className="row">
                <div className="col-lg-7 col-sm-12 text-center col-md-8 ">
                    <div className='animate__animated animate__fadeIn fs-5 d-flex flex-wrap align-items-center justify-content-center'>
                        <h1 className='animate__animated animate__fadeInLeftBig'>4</h1>
                        <h1 className='animate__animated animate__fadeInUpBig'>0</h1>
                        <h1 className='animate__animated animate__fadeInRightBig'>4</h1>
                    </div>
                    <img src={img4} alt="404 NOT FOUND" width="539.22px" height="447.43px" className="img-fluid animate__animated animate__zoomInRight" />
                </div>
                <section className="col-lg-5 col-sm-12 font-monospace col-md-4 justify-content-center align-items-center animate__animated animate__fadeInDownBig">
                    <p className="fs-1 text-bold w-75 text-center text-md-sm">Tenemos malas noticias!</p>
                    <div className=" text-center">
                        <p className="fs-5 w-75">La pagina que estas buscando fue removida o no se encuentra disponible actualmente.</p>
                    </div>
                </section>
            </div>
        </main>
    </div>
    </>
  )
}

export {NotFound}
