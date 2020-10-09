import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyle from '../global/styles';
import IndexPage from '../pages/IndexPage';
import store from '../store';

const theme = {};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IndexPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;