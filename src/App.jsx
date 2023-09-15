//import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ProductContainer } from './components/Venta/ProductContainer';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { NotFound } from './components/NotFound/NotFound';
import { Home } from './components/Home/Home';
import { Login } from './components/User/Login/Login';
import { Register } from './components/User/Register/Register';
function App() {
  return (
    <>
      <HashRouter>{/* */}
        <Routes>{/* Este caso se utiliza para la sección de codigo que cambia en base a la ruta.*/}
          <Route path="/" element={<Layout/>} >
            <Route path="/" element={<Home/>} /> {/* Para generar las rutas, en este caso tendria que vincularlo con un home */}
            <Route path="/about" element={<About/>} /> {/* Route to about */}
            <Route path="/contact" element={<Contact/>} /> {/* Route to Contact  */}
            <Route path="/products" element={<ProductContainer/>} /> {/* Route to products */}
            <Route path="/login" element={<Login/>} /> {/* Route to products */}
            <Route path="/register" element={<Register/>} /> {/* Route to products */}
            <Route path="*" element={<NotFound/>} />{/* Este caso se utiliza para el 404, not found . Cuando se hace refernecia al *, 
            significa que funciona para cualquier ruta que no sea alguna de las previamente definidas. 
            Si lo subimos al principio, nos va a dar 404 en todas las rutas*/}
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
