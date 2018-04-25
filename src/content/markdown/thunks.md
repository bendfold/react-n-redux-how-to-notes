## [Thunk example](https://egghead.io/lessons/javascript-redux-dispatching-actions-asynchronously-with-thunks)

### What?
A Thunk is a function that is returned by another function, which allows us to use partial argument application.

### Why?
The dual requestCounters & fetchCounters dispatch calls was a little clumbsy, so I added the Thunk middleware to demo how this call all be wrapped up on one method. Using the previous promise implementation only resolves to a single promise at the end, which forced us to ``requestCounters()`` then ``fetchCounters()`` and ``receiveCounters`` within the resolve of the promise. It would be nice if we could call the ``fetchCounters()`` action and have multiple actions dispatched from within over the period of the ``fetchCounters()`` action.

### How?
Rather than returning a promise, we need to return a function that accepts the dispatch callback argument. Within a Thunk, this is done using Currying. Using this technique, allows the dispatch call to be fired at anytime during the async operation. In our case we can now dispatch the ``requestCounters()`` at the start of the call. Then when the promise resolves we can dispatch the ``receiveCounters`` action to handle the update to the state.

### What changed?
#### Before we did this:
``/scripts/components/mock-data/MockDataCounterListContainer.js``

	fetchData() {
		const {requestCounters, fetchCounters} = this.props;

		requestCounters(reducerName);
		fetchCounters(reducerName); // Promise wrapped dispatch
	}

``/scripts/actions/index.js``

    export const requestCounters = (name) => {
    	return {
    		type: TYPE.FETCH_COUNTERS_REQUEST,
    		name
    	}
    };
    
    const receiveCounters = (payload, name) => {
    	return {
    		type: TYPE.FETCH_COUNTERS_SUCCESS,
    		payload,
    		name
    	}
    };
    
    export const fetchCounters = (reducerName) => {
    	return api.fetchCounterCollection().then((payload) => {
    		return receiveCounters(payload, reducerName);
    	});
    };
    
``/scripts/store/configureStore.js``

    import promiseMiddleware from 'redux-promise'; 
    const middlewares = [promiseMiddleware];
    
    return createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);
    
#### Now we do this:

``/scripts/components/mock-data/MockDataCounterListContainer.js``

    fetchData() {
		const {requestCounters, fetchCounters} = this.props;

		fetchCounters(reducerName); // Thunk based async dispatch calls.
	}

``/scripts/actions/index.js``

    const requestCounters = (name) => {
    	return {
    		type: TYPE.FETCH_COUNTERS_REQUEST,
    		name
    	}
    };
    
    const receiveCounters = (payload, name) => {
    	return {
    		type: TYPE.FETCH_COUNTERS_SUCCESS,
    		payload,
    		name
    	}
    };
    
    export const fetchCounters = (reducerName) => (dispatch, getState) => {
    	dispatch( requestCounters(reducerName) );
    
    	return api.fetchCounterCollection().then((payload) => {
    		dispatch( receiveCounters(payload, reducerName) );
    	});
    };
    
``/scripts/store/configureStore.js``

    import thunk from 'redux-thunk';
    const middlewares = [thunk];
    
    return createStore(
		rootReducer,
		applyMiddleware(...middlewares)
	);






