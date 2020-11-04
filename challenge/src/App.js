import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from './styleGlobal';
import Header from './components/Header';
import Routes from './routes';
import { store } from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyle />
      <Routes />
    </Provider>
  );
};
export default App;
