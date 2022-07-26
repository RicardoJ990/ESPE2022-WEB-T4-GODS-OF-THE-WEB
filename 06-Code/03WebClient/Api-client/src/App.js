import './App.css';
import React, {useEffect, useState} from 'react'; 

function App() {
  const url = 'https://httpbin.org/get'
  const [todos, setTodos] = useState(null)
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className='App'>
          TUS DATOS SON
      <ul>
        { todos != null ? (
          todos ( todo => {
            return <li key={todo.origin}>{todo.origin}</li>
          })
        ) : ('Cargando....')
        }
      </ul>
    </div>
  );
};

export default App;
