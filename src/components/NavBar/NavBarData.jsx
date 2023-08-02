import { IoPerson,IoHomeSharp } from "react-icons/io5";
import { MdGroup } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';

const routes = [
    {
      to:'/',
      text:'Home',
      icon: <IoHomeSharp/>,
    },
    {
      to:'/contact',
      text:'Contacto',
      icon:<IoPerson/>
    },
    {
      to:'/about',
      text:'Sobre Nosotros',
      icon:<MdGroup/>
    },
    {
      to:'/products',
      text:'Ventas',
      icon:<FaShoppingCart/>
    },
  ];

  /*
  Se podria agregar logica para poder agregar o mostrar opciones dependiendo del perfil de un usuario, entre otras cosas. 
  (Tal vez modificando la estructura y agregando una propiedad de profile que sea un (boolean true o false) o un valor entero
  por si se da el caso de tener mas de 1 perfil el cual tendria un valor constante para diferenciar el perfil
  (1 usuario),(2 administrador),(3 vendedor),etc )
  */
export { routes }
