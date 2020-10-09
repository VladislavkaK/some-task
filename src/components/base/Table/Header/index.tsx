import React from 'react';
import styled, { css } from 'styled-components';

interface HeaderProps {
  columns: {
    id: string;
    title: string;
  }[]; 
}

const StyledContainerRowHeader = styled.div<{ countColumns?: number; }>`
  ${({ countColumns }) => {
    return css`
      display: grid;
      grid-template-columns: repeat(${countColumns}, 1fr);
      padding: 20px 30px;
      font-size: 16px;
      border: 1px solid #ddd;
      background: #fafafa;

      :first-child {
        border-radius: 0.5rem 0.5rem 0 0;
        font-weight: bold;
        text-shadow: 0 2px 1px #fff;
      }
    `;
  }}
`;

const StyledHeaderCell = styled.div`
  ${() => {
    return css`
      word-break: break-word;
      display: flex;
      justify-content: flex-start;
    `;
  }}
`;

const Header: React.FC<HeaderProps> = ({ columns }) => {
  const renderHeader = () => {
    return (
      <>
        {columns.map((column) => (
          <StyledHeaderCell key={column.id}>
            {column.title}
          </StyledHeaderCell>
        ))}
      </>
    );
  }

  return (
    <StyledContainerRowHeader countColumns={columns.length}>
      {renderHeader()}
    </StyledContainerRowHeader>
  );
}

export default Header;