import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(100,255,255,.3);
  border-radius: 50%;
  border-top-color: blue;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`;

const Spinner: React.FC = () => {
  return (
    <StyledSpinner />
  );
}

export default Spinner;