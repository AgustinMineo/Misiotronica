//import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Products } from './components/Products/Products';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <HashRouter>{/* */}
      <Layout/>
        <Routes>{/* Este caso se utiliza para la sección de codigo que cambia en base a la ruta.*/}
          <Route path="/" element={<Home/>} /> {/* Para generar las rutas, en este caso tendria que vincularlo con un home */}
          <Route path="/about" element={<About/>} /> {/* Route to about */}
          <Route path="/contact" element={<Contact/>} /> {/* Route to Contact  */}
          <Route path="/products" element={<Products/>} /> {/* Route to products */}
          <Route path="*" element={<NotFound/>} />{/* Este caso se utiliza para el 404, not found . Cuando se hace refernecia al *, 
          significa que funciona para cualquier ruta que no sea alguna de las previamente definidas. 
          Si lo subimos al principio, nos va a dar 404 en todas las rutas*/}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
