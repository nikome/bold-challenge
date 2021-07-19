import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import makeData from "./makeData";
import { RiMastercardFill } from 'react-icons/ri';

const Styles = styled.div`
  height: 300px;
  overflow: auto;
  width: 70%;
  table {
    width: 100%;
    background: white;
    border-spacing: 0;
    thead {
      tr:nth-child(2) {
      }
      font-weight: 100;
      span {
        float: left;
      }
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      :last-child {
        border-right: 0;
      }
    }
    .transaccion,
    .monto {
      color: #111e6c;
    }
    .date,
    .metodo,
    .idBold {
      color: #969696;
      text-transform: uppercase;
    }
  }
`;

const columns = [
  {
    Header: "Transacción",
    accessor: "transaccion",
  },
  {
    Header: "Fecha y hora",
    accessor: "date",
  },
  {
    Header: "Método de pago",
    accessor: "metodo",
  },
  {
    Header: "ID transsacción Bold",
    accessor: "idBold",
  },
  {
    Header: "Monto",
    accessor: "monto",
  },
];

const data = makeData(10);
const Table = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <span>{column.render("Header")}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className={cell.column.id} {...cell.getCellProps()}>
                      {cell.column.id === 'metodo'? <RiMastercardFill />: <></>}
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default Table;
