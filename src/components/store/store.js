import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
