import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./logo.png";
import Table from "./Table";
import { GoSettings, GoInfo } from 'react-icons/go';
import { colors } from './globals';

const BoldLogo = styled.div`
  width: 150px;
  height: 60px;
  margin-top: 15px;
  margin-left: 70px;
  background-repeat: no-repeat;
  background-image: url(${Logo});
`;

const HeaderContainer = styled.div`
  width: 50%;
  height: 90px;
`;

const Division = styled.div`
  width: ${(props) => (props.filtros ? "60%" : "40%")};
  margin: 40px 18%;
  &:first-of-type {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-left: 10px;
}
`;

const LinkText = styled.a`
  margin-top: 30px;
  margin-right: 40px;
  color: ${colors.white};
  font-size: 20px;
  float: right;
`;

const Main = styled.div`
  display: flex;
`;

const Card = styled.div`
  display: block;
  height: 220px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const CardTitle = styled.div`
  background: linear-gradient(
    to right,
    rgba(99, 50, 94, 1) 0%,
    rgba(174, 99, 119, 1) 100%
  );
  border-radius: 15px 15px 0 0;
  padding: 20px;
  height: 30px;
`;

const BlueText = styled.p`
  color: ${colors.blue};
  margin: 5px;
  font-size: 16px;
`;
const MediumWhiteText = styled.p`
  color: ${colors.white};
  margin-right: 15px;
  margin-top: 0px;
  font-weight: bold;
  font-size: 20px;
  svg {
    float: right;
  }
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
  color: ${colors.blue};
  font-size: 20px;
`;

const Tiempo = styled.div`
  display: flex;
  background-color: ${colors.white};
  font-weight: bold;
`;
const TimeOption = styled.button`
  padding: 10px 0;
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
  color: ${colors.blue};
  font-size: inherit;
  border: none;
  background: none;
  border-radius: 20px;
`;

const FiltrarButton = styled.button`
  border: none;
  background: ${colors.white};
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
`;

const FilterContainer = styled.div`
  display: inline-block;
  float: right;
`

const FilterOptions = styled.div`

`

const TableContainer = styled.div`
  text-align: -webkit-center;
  margin: 10px 70px;
`;

const TableTitle = styled.div`
  background: linear-gradient(
    to right,
    rgba(18, 34, 104, 1) 70%,
    rgba(128, 57, 91, 1) 100%
  );
  width: 70%;
  color: ${colors.white};
  border-radius: 15px 15px 0 0;
  padding: 20px 0;
  height: 25px;
  font-size: 25px;
  span {
    margin-left: 20px;
    float: left;
  }
`;

const App = () => {
  const filters = useState(false);

  const handleFilter = () => {
    console.log(!filters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HeaderContainer>
          <BoldLogo />
        </HeaderContainer>
        <HeaderContainer>
          <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
            Ayuda ?
          </LinkText>
          <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
            Mi negocio
          </LinkText>
        </HeaderContainer>
      </header>
      <Main>
        <Division className="Test">
          <Card>
            <CardTitle>
              <MediumWhiteText> Total de ventas de septiembre <GoInfo /></MediumWhiteText>
            </CardTitle>
            <MontoVentas>
              <VentasMontoText>$1'560.000</VentasMontoText>
              <BlueText>Septiembre, 2020</BlueText>
            </MontoVentas>
          </Card>
        </Division>
        <Division filtros="true">
          <Filtros>
            <Tiempo>
              <TimeOption>Hoy</TimeOption>
              <TimeOption>Esta semana</TimeOption>
              <TimeOption>Septiembre</TimeOption>
            </Tiempo>
            <FilterContainer>
              <FiltrarButton onClick={handleFilter}>Filtrar <GoSettings/></FiltrarButton>
              <FilterOptions> Pending</FilterOptions>
            </FilterContainer>
          </Filtros>
        </Division>
      </Main>
      <TableContainer>
        <TableTitle>
          <span>Tus ventas de septiembre</span>
        </TableTitle>
        <Table />
      </TableContainer>
    </div>
  );
};

export default App;
