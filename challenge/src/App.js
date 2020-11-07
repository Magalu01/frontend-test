import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styleGlobal';
import Routes from './routes';
import { store, persistor } from './store/index';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};
export default App;
