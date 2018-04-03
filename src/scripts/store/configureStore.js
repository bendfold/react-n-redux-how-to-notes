// FRAMEWORK
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise'; // Wraps dispatch in a promise chains so that we can have async dispatch functions.
// REDUCERS
import rootReducer from '../reducers';

// Initialize the STORE
const configureStore = () => {
	const middlewares = [promiseMiddleware];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger()); //createLogger() default config, see docs for more. 
	}

	return createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;
