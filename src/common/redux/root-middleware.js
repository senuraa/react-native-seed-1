// Library
import { createEpicMiddleware } from 'redux-observable';

// Epics
import { rootEpic } from './root-epic';

const epicMiddleware = createEpicMiddleware(rootEpic);

// define store middlewares as an array
export const Middlewares = [
  epicMiddleware
];
