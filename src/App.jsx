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

const Division = styled.div`
  width: ${(props) => (props.filtros ? '65%' : '35%')};
  margin: 40px 70px;
`;

const LinkText = styled.a`
  margin-top: 30px;
  margin-right: 40px;
  float: right;
`;

const Main = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: block;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
const CardTitle = styled.div`
  background: linear-gradient(
    to right,
    rgba(99, 50, 94, 1) 0%,
    rgba(174, 99, 119, 1) 100%
  );
  border-radius: 5px 5px 0 0;
  padding: 20px;
  height: 30px;
`;

const BlueText = styled.p`
  color: #111e6c;
  margin: 5px;
  font-size: 16px;
`;
const MediumWhiteText = styled.p`
  color: white;
  position: absolute;
  margin-right: 15px;
  margin-top: 5px;
  font-weight: bold;
  font-size: 24px;
`;

const VentasMontoText = styled.h1`
  background: linear-gradient(
    to right,
    rgba(99, 50, 94, 1) 0%,
    rgba(174, 99, 119, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 35px;
  margin-bottom: 0;
`;

const MontoVentas = styled.div`
  height: 100px;
  text-align: center;
`;
const Filtros = styled.div`
  color: #111e6c;
  font-size: 20px;
`;

const Tiempo = styled.div`
  display: flex;
  background-color: white;
  font-weight: bold;
`;
const TimeOption = styled.button`
  margin: 10px 0;
  &:first-of-type {
    margin-left: 10px;
  }
  &:last-of-type {
    margin-right: 10px;
  }
  flex: 1 1 0px;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  font-weight: inherit;
  color: #111e6c;
  font-size: inherit;
  border: none;
  background: none;
  border-radius: 20px;
`;

const FiltrarButton = styled.button`
  border: none;
  background: white;
  border-radius: 10px;
  text-transform: uppercase;
  float: right;
  margin-top: 15px;
  color: inherit;
  font-size: inherit;
  padding: 10px 50px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

const App = () => {
  return (
    <body className="App">
      <header className="App-header">
        <ImageContainer>
          <BoldLogo />
        </ImageContainer>
        <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
          Mi negocio
        </LinkText>
        <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
          Ayuda ?
        </LinkText>
      </header>
      <Main>
        <Division className="Test">
          <Card>
            <CardTitle>
              <MediumWhiteText> Total de ventas de septiembre </MediumWhiteText>
            </CardTitle>
            <MontoVentas>
              <VentasMontoText>$1'560.000</VentasMontoText>
              <BlueText>Septiembre, 2020</BlueText>
            </MontoVentas>
          </Card>
        </Division>
        <Division filtros='true'>
          <Filtros>
            <Tiempo>
              <TimeOption>Hoy</TimeOption>
              <TimeOption>Esta semana</TimeOption>
              <TimeOption>Septiembre</TimeOption>
            </Tiempo>
            <FiltrarButton>Filtrar</FiltrarButton>
          </Filtros>
        </Division>
      </Main>

      <div>Tabla de ventas</div>
    </body>
  );
};

export default App;
