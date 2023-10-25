import {React, useEffect,useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allContacts } from './index';
import { ContactCard } from './ContactCard/ContactCard'

function ListContact() {
    const token = useSelector((state) => state.auth.token);
    const role = useSelector((state) => state.auth.role);
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState([]);
  
    useEffect(() => {
      const fetchQuestions = async () => {
        try {
          const questionsData = await allContacts(token, role, dispatch);
          setQuestions(questionsData);
          
        } catch (error) {
          console.error('Error al obtener las consultas:', error);
        }
      };
  
      fetchQuestions();
    }, [token, role, dispatch]);
  
    return (
      <div className="container">
        <div className='row'>
          <h1>Consultas </h1>
          {questions.map((consultas, index) => (
            <div key={index} className='col-lg-3 col-md-5 col-sm-12 border rounded-3 mx-1 my-1'>
              <ContactCard questions={consultas} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export {ListContact}
