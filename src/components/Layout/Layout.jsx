import React from 'react';
import { NavBar } from '../NavBar/NavBar'
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';
import {Footer} from '../Footer/Footer';
function Layout() {
  return (
    <>
        <div className="container-fluid">
            <div className="row mx-0">
                <Header/>
                <aside className="col-xl-2 col-lg-12 col-md-12 col-sm-12 z-0 ">
                    <NavBar/>
                </aside>
            <main className=" col-xl-10 col-lg-12 col-md-12 col-sm-12">
                <Outlet />
            </main>
            </div>
        <Footer/>
        </div>
    </>
  )
}

export {Layout}
