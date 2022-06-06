// import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'; //before and after action logs will be shown
// import { rootReducer } from './root-reducer';

// const middleWares = [logger];
// console.log("logger",compose(applyMiddleware(...middleWares)))
// const composedEnhancers = compose(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, {}, composedEnhancers);


import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
