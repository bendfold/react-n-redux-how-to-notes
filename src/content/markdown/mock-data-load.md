## Mock Data Load

Building upon the "Counter Generator Example", we added in:
- A new reducer helper ``createNamedReducer`` to allow us to:
	- Reuse the existing reducer logic
	- Name our reducers at the point of creation
	- Pass in a name prop to the action to allow us to hit the correct part of the state.
- A new component to handle creating new counter items.
- A new component to handle displaying the list of counters.

### How it works
- We are using the data returned from the API call to populate the part of the state that is consumed by the ``<CounterList />`` component.
- We want to make the call to the API within a life-cycle hook. As a result we converted the component from a stateless functional component into a class based one.
- We fetch the data within the ``componentDidMount`` life-cycle hook.
- Once the data is returned to us we pass it into the ``receiveCounters`` method which is assigned on the ``mapDispatchToProps``.
- This method in turn dispatches the ``receiveCounters`` action, into which we pass the payload.
- The action is picked up in the reducer and the payload is merged into the current state of the counter collection.
- When the state is updated the component re-renders and the new state is passed into the ``<CounterList  {...this.props} />`` via the props.
- Now that we render the ``CounterList`` within the ``CounterListContainer`` Class. Rather than connecting the ``CounterList`` to the ``CounterListContainer``, this time we connect the ``CounterListContainer`` to itself. Thus making the dispatch and state avilible to the props of the ``CounterListContainer``.
- The props are then passed ``CounterList`` via the spread opperator inside the render method on the class.

### Extras
#### Middleware ``redux-logger``.
We added a piece of middleware called ``redux-logger`` to help us track the state as the user interacts with the application. We added it in the ``configureStore.js`` file, and set it to only kick in on the dev in environment so as not to polute the console on production. The steps were as follows:

- Pull in createLogger like this, ``import { createLogger } from 'redux-logger';``
- Within the ``configureStore`` method we create an empty array to hold any middleware we wish to add. ``const middlewares = [];``
- We check the environment var, if it is not production, we push the ``createLogger`` method to the ``middlewares`` array.
- The ``middlewares`` array can now be added to the store using the Redux ``applyMiddleware`` method, within the Redux ``createStore`` method as the last argument, like so: 
	
		return createStore(
			rootReducer,
			applyMiddleware(...middlewares)
		);
