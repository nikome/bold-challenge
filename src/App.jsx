import "./App.css";
import React from "react";
import styled from "styled-components";
import Logo from "./logo.png";

const BoldLogo = styled.div`
  width: 150px;
  height: 60px;
  margin-top: 15px;
  background-repeat: no-repeat;
  background-image: url(${Logo});
`;

const ImageContainer = styled.div`
  flex: 0 1 50%;
  width: 200px;
  height: 90px;
`;

const TextEl = styled.div`
  flex: 0 1 50%;
`;

const LinkText = styled.a`
  margin-top: 30px;
  margin-right: 40px;
  float: right;
`

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ImageContainer>
          <BoldLogo />
        </ImageContainer>
        <TextEl>
          <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
            Mi negocio
          </LinkText>
          <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
            Ayuda ?
          </LinkText>
        </TextEl>
      </header>
      <div>
        <div>-----Total ventas-----</div>
        <div>+++++Filtros+++++</div>
      </div>
      <div>Tabla de ventas</div>
    </div>
  );
};

export default App;
