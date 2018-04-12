import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import httpMiddleware from './middleware/http';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const middlewares = [
  thunkMiddleware,
  loggerMiddleware,
  httpMiddleware,
];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export default () => {
  const store = createStore(reducers, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};
