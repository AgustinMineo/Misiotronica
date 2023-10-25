import React, { useEffect,useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allUsers } from './index';
import {ClientCard} from './ClientCard'

function UsersView() {
    const token = useSelector((state) => state.auth.token);
    const role = useSelector((state) => state.auth.role);
    const dispatch = useDispatch();
    const [clients, setClients] = useState([]);
  
    useEffect(() => {
      const fetchClients = async () => {
        try {
          const clientsData = await allUsers(token, role, dispatch);
          setClients(clientsData);
          
        } catch (error) {
          console.error('Error al obtener clientes:', error);
        }
      };
  
      fetchClients();
    }, [token, role, dispatch]);
  
    return (
      <div className='row'>
        <h1>Clientes</h1>
        {clients.map((client, index) => (
          <div key={index} className='col-lg-3 col-md-5 col-sm-12 border rounded-3'>
            <ClientCard client={client} />
          </div>
        ))}
      </div>
    );
  }
  
  export { UsersView };