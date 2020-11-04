import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styleGlobal';
import Routes from './routes';
import { store } from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
};
export default App;
