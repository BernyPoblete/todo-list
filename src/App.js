import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [lista, setLista] = useState([]);
  const [valorInput, setValorInput] = useState('');

  const ingresarValor = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      let copia = lista.slice();
      copia.push(event.target.value);
      setLista(copia);
      setValorInput('');
    }
  }

  const eliminarTarea = (index) => {
    let copia = lista.slice();
    copia.splice(index, 1);
    setLista(copia);
  }

  return (
    <div className="App">
      <h1>todos</h1>
      <div className="contenedorLista">
        <input 
          type="text"
          className="input" 
          onKeyUp={ingresarValor}
          value={valorInput}
          placeholder="¿Que necesitas hacer?"
          onChange={(event) => setValorInput(event.target.value)}
        />
        {lista.map((tarea, index) => {
          return (
            <div className="contenedorTarea">
              <p key={'tarea-' + index} className="tarea">
                {tarea}
                <FontAwesomeIcon
                  onClick={() => eliminarTarea(index)}
                  icon={faTrashAlt}
                  className="icono"
                />
              </p>
            </div>
          )
        })}
        <p className="contador">Total de tareas: {lista.length}</p>
      </div>
      <div className="paginaDos"></div>
      <div className="paginaTres"></div>
    </div>
  );
}

export default App;
