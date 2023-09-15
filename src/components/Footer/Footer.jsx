import React from 'react'
import { NavLink } from 'react-router-dom';
import { GrPhone,GrMapLocation } from "react-icons/gr";
import { FaEnvelopeOpen } from 'react-icons/fa';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <div className="pb-5 footer mt-4">
      <div className="container">
        <div className="row">
          <hr/>
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Redes Sociales</h2>
            <ul className="m-0 p-0 list-unstyled text-decoration-none">
              <li>
                <a className="text-dark text-decoration-none" href='https://www.whatsapp.com/'>
                  <FaWhatsapp/> 
                  WhatsApp
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href='https://www.linkedin.com/'>
                  <FaLinkedin/>
                  Linkedin
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href='https://www.facebook.com/'>
                  <FaFacebook/> 
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href='https://www.twitter.com/'>
                  <FaTwitter/>
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href='https://www.instagram.com/'>
                  <FaInstagram/> 
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href='https://telegram.org/'>
                  <FaTelegram/> 
                  Telegram
                </a>
              </li>
            </ul>
          </div> 
          <div className="col-lg-3 col-xs-12 mt-1">
            <h4 className="mt-lg-0 mt-sm-3">Secciones</h4>
              <ul className="m-0 p-0 list-unstyled text-decoration-none">
                <li>
                  <NavLink className="text-dark text-decoration-none" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-dark text-decoration-none" to="/contact">
                    Contacto
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-dark text-decoration-none" to="/about">
                    Sobre Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-dark text-decoration-none" to="/products">
                    Ventas
                  </NavLink>
                </li>
              </ul>
          </div>
          <div className="col-lg-4 col-xs-12">
            <h4 className="mt-lg-0 mt-sm-4">Dirección</h4>
            <p> 
              <GrMapLocation/> 
              Calle Falsa 222, Provincia de Buenos Aires
            </p>
            <p className="mb-0">
              <GrPhone/>
              +54 999 999 999
            </p>
            <p className='mt-3'>
              <FaEnvelopeOpen/> 
              info@misotronica.com
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p>
              <small className="text">
                © 2023 - Misiotrónica - All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export {Footer}
