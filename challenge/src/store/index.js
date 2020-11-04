/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

const encryptor = createEncryptor({
  secretKey: 'luizalabs',
  onError: (error) => {
    console.log(error);
  },
});

const persistConfig = {
  key: 'root',
  timeout: 10000,
  storage,
  whitelist: ['authentication', 'filter'],
  transforms: [encryptor],
  version: 1,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
