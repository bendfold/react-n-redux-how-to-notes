// FRAMEWORK
import { createStore } from 'redux';
// REDUCERS
import rootReducer from '../reducers';

// Initialze the STORE
const configureStore = () => createStore(rootReducer);

export default configureStore;
