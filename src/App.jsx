import './App.css';
import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Example} from './logoBold.svg';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a>1</a>
          <a>2</a>
        </div>
      </header>
      <div>
        <div>-----Total ventas-----</div>
        <div>+++++Filtros+++++</div>
      </div>
      <div>
        Tabla de ventas
      </div>
    </div>
  );
}

export default App;