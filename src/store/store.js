// import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'; //before and after action logs will be shown
// import { rootReducer } from './root-reducer';

// const middleWares = [logger];
// console.log("logger",compose(applyMiddleware(...middleWares)))
// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, {}, composedEnhancers);

import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
//import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
