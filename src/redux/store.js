import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';
import api from './middleware/api';
import reducer from './reducer';

// const enhancer = applyMiddleware(logger, api);

export default createStore(reducer, applyMiddleware(logger, api));