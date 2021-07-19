import React, { useState } from "react";
import Table from "./Table";
import Checkbox from "./Checkbox";
import { GoSettings, GoInfo, GoX } from 'react-icons/go';
import {
  AppContainer,
  AppHeader,
  BoldLogo,
  HeaderContainer,
  Division,
  LinkText,
  Main,
  Card,
  CardTitle,
  BlueText,
  MediumWhiteText,
  VentasMontoText,
  MontoVentas,
  Filtros,
  Tiempo,
  TimeOption,
  FiltrarButton,
  FilterContainer,
  FilterOptions,
  TableContainer,
  TableTitle,
  CheckLabel,
  ApplyButton
} from './app-styles'


const App = () => {
  const [filters, setFilters] = useState(false);
  const [checked, setChecked] = useState({datafono: false, link: false, todo: false})

  const handleFilter = () => {
    setFilters(!filters);
  }

  const handleCheck = name => e => setChecked({ ...checked, [name]: e.target.checked });

  return (
    <AppContainer className="App">
      <AppHeader>
        <HeaderContainer>
          <BoldLogo />
        </HeaderContainer>
        <HeaderContainer></HeaderContainer>
        {
        <HeaderContainer>
          <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
            Ayuda ?
          </LinkText>
          <LinkText target="_BLANK" rel="noopener noreferrer" href="*">
            Mi negocio
          </LinkText>
        </HeaderContainer>
        }
      </AppHeader>
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
              <FiltrarButton isOpen={filters} onClick={handleFilter}>
                <span>Filtrar</span> 
                {filters ? <GoX /> : <GoSettings/>}
              </FiltrarButton>
              {filters?
              <FilterOptions>
              <CheckLabel>
                <Checkbox
                  checked={checked['datafono']}
                  handleCheck={handleCheck('datafono')}
                />
                <span style={{ marginLeft: 8 }}>Cobro</span>
              </CheckLabel>
              <CheckLabel>
                <Checkbox
                  checked={checked['link']}
                  handleCheck={handleCheck('link')}
                />
                <span style={{ marginLeft: 8 }}>Cobros con link de pago</span>
              </CheckLabel>
              <CheckLabel>
                <Checkbox
                  checked={checked['todo']}
                  handleCheck={handleCheck('todo')}
                />
                <span style={{ marginLeft: 8 }}>Ver todos</span>
              </CheckLabel>
              <ApplyButton>Aplicar</ApplyButton>
              </FilterOptions>
              : <></>}
            </FilterContainer>
          </Filtros>
        </Division>
      </Main>
      {
      <TableContainer>
        <TableTitle>
          <span>Tus ventas de septiembre</span>
        </TableTitle>
        <Table />
      </TableContainer>
      }
    </AppContainer>
  );
};

export default App;
