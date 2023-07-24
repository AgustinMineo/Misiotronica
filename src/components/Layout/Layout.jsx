import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Header } from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
        <div className="container-fluid">
            <div className="row mx-0">
                <Header/>
                <aside className="col-md-2 col-lg-2">
                    <NavBar/>
                </aside>
            <main className="col-lg-10">
                <Outlet />
            </main>
            </div>
        </div>
    </>
  )
}

export {Layout}
