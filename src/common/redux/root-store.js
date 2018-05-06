// Library
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Redux
import { rootReducer } from './root-reducer';
import { Middlewares } from './root-middleware';

const enhancers = [
  applyMiddleware(...Middlewares)
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* tslint-disable no-undef */
const composeEnhancers = composeWithDevTools({});
/* tslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
export const store = createStore(
  rootReducer,
  enhancer
);
