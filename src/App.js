import 'babel-polyfill';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '@Styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <Routes/>
            <GlobalStyle />
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
