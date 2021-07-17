import './App.css';
import React from 'react';
import styled from 'styled-components';
import Logo from './logo.png';

const BoldLogo = styled.div`
  width: 150px;
  height: 60px;
  background-image: url(${Logo});
`;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BoldLogo />
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