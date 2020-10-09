import React from 'react';
import styled, { css } from 'styled-components';
import Header from './Header';

type RowsT = { [key: string]: { component?: any; } };

interface TableProps {
   columns: {
    id: string;
    title: string;
  }[]; 
  rows?: RowsT[];
  width?: string;
}

const StyledContainerTable = styled.div<{ width?: string; }>`
  display: grid;
  width: ${({ width }) => width};
  height: 100%;
  margin: 0 auto;
  align-items: top;
  border-radius: 10px;
`;

const StyledContainerRow = styled.div<{ countColumn?: number; }>`
  ${({ countColumn }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(${countColumn},  minmax(0, 1fr));
      padding: 20px 30px;
      font-size: 16px;
      grid-auto-flow: row;
      border: 1px solid #ddd;

      :nth-child(odd) {
        background-color: #ffffff;
      }
    `;
  }}
`;

const StyledContainerCell = styled.div`
  ${() => {
    return css`
      word-break: break-word;
      display: flex;
      justify-content: flex-start;
    `;
  }}
`;

const Table: React.FC<TableProps> = ({ columns, rows, width = '100%' }) => {
  return (
    <StyledContainerTable width={width}>
      <Header columns={columns} />
      <>
        {rows && rows.length > 0 && rows.map((row, index) => {
          return (
            <StyledContainerRow countColumn={columns.length} key={`key-${index}`}>
              {columns && columns.length > 0 && columns.map((column) => {
                const renderComponent = 
                  typeof row[column.id] === 'object' && row[column.id].component;

                return (
                  <StyledContainerCell key={column.id}>
                    {renderComponent}
                  </StyledContainerCell> 
                );
              })}
            </StyledContainerRow>
          );
        })}
      </>
    </StyledContainerTable>
  );
}

export default Table;