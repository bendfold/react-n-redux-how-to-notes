// FRAMEWORK
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// REDUCERS
import rootReducer from '../reducers';

// Initialize the STORE
const configureStore = () => {
	const middlewares = [];
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger()); //createLogger() default config, see docs for more. 
	}

	return createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);
};

export default configureStore;
