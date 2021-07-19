import { colors, desktopBreakpoint } from './globals';
import styled from "styled-components";
import Logo from "./logo.png";

export const AppContainer = styled.div`
    font-family: Helvetica, sans-serif;
    background-color: ${colors.whiteBackgound};
    height: 100vh;
`

export const AppHeader = styled.header`
  background: linear-gradient(
    to right,
    rgba(18, 34, 104, 1) 30%,
    rgba(128, 57, 91, 1) 100%
  );
  height: 100px;
  display: flex;
  color: ${colors.white}; 
`

export const BoldLogo = styled.div`
  width: 150px;
  height: 60px;
  margin-top: 15px;
  margin-left: 70px;
  background-repeat: no-repeat;
  background-image: url(${Logo});
`;

export const HeaderContainer = styled.div`
  width: 50%;
  height: 90px;
  @media (max-width: ${desktopBreakpoint}) {
    display: grid;
  }
`;

export const Division = styled.div`
  width: ${(props) => (props.filtros ? "60%" : "40%")};
  margin: 40px 18%;
  &:first-of-type {
    margin-right: 10px;
  }
  &:last-of-type {
    margin-left: 10px;
  }
  @media (max-width: ${desktopBreakpoint}) {
    width: 100%;
    display: initial;
  }
`;

export const LinkText = styled.a`
  margin-top: 30px;
  margin-right: 40px;
  color: ${colors.white};
  font-size: 20px;
  float: right;
  @media (max-width: ${desktopBreakpoint}) {
    margin: 5px 0;
  }
`;

export const Main = styled.div`
  display: flex;
  @media (max-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export const Card = styled.div`
  display: block;
  height: 230px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  @media (max-width: ${desktopBreakpoint}) {
    width: 300px;
    margin: 0 10%;
  }
`;

export const CardTitle = styled.div`
  background: linear-gradient(
    to right,
    rgba(99, 50, 94, 1) 0%,
    rgba(174, 99, 119, 1) 100%
  );
  border-radius: 15px 15px 0 0;
  padding: 20px;
  height: 30px;
`;

export const BlueText = styled.p`
  color: ${colors.blue};
  margin: 5px;
  font-size: 16px;
`;
export const MediumWhiteText = styled.p`
  color: ${colors.white};
  margin-right: 15px;
  margin-top: 0px;
  font-weight: bold;
  font-size: 20px;
  svg {
    float: right;
  }
`;

export const VentasMontoText = styled.h1`
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

export const MontoVentas = styled.div`
  height: 100px;
  text-align: center;
`;
export const Filtros = styled.div`
  color: ${colors.blue};
  font-size: 20px;
  @media (max-width: ${desktopBreakpoint}) {
    width: 100%;
  }
`;

export const Tiempo = styled.div`
  display: flex;
  background-color: ${colors.white};
  font-weight: bold;
`;
export const TimeOption = styled.button`
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

export const FiltrarButton = styled.button`
  border: none;
  background: ${colors.white};
  border-radius: 10px;
  text-transform: uppercase;
  float: right;
  margin-top: 15px;
  color: inherit;
  font-size: 15px;
  padding: ${(props) => (props.isOpen ? "10px 80px" : "10px 50px")};
  &:hover {
    background: ${(props) => (props.isOpen ? "none" : "rgba(0, 0, 0, 0.2)")};
  }
`;

export const FilterContainer = styled.div`
  display: inline-block;
  float: right;
`

export const FilterOptions = styled.div`
  margin-top: 15px;
  background: ${colors.white};
`

export const TableContainer = styled.div`
  text-align: -webkit-center;
  margin: 10px 70px;
  @media (max-width: ${desktopBreakpoint}) {
    width: 100%;
    margin: 10px 0;
    display: grid;
  }
`;

export const TableTitle = styled.div`
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
  @media (max-width: ${desktopBreakpoint}) {
    width: 100%;
  }
`;

export const CheckLabel = styled.label`
  display: block;
  &:first-of-type {
    display: inline-block;
  }
`

export const ApplyButton = styled.button`
  border-radius: 20px;
  margin: 10px 25%;
  padding: 10px 40px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
  background: rgb(233, 163, 166);
  &:hover {
    background: ${colors.red};
  }
`