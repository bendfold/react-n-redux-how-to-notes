## Mock Data Load

Building upon the "Counter Generator Example", we added in:
- A new reducer helper ``createNamedReducer`` to allow us to:
	- Reuse the existing reducer logic
	- Name our reducers at the point of creation
	- Pass in a name prop to the action to allow us to hit the correct part of the state.
- A new component to handle creating new counter items.
- A new component to handle displaying the list of counters.

### What changed?
- We want to make the call to the API within a life-cycle hook. As a result we converted the component from a stateless functional component into a class based one.
- We export a new action called ``fetchCounters`` which just takes the reducer name the correct reducer is effected, this returns a promise into which we pass the ``receiveCounters`` method.
- We made an internal action named ``receiveCounters`` which handles adding the payload to the state.
- We replaced the ``mapDispatchToProps`` with the ``actions`` export as the ``mapDispatchToProps`` was only passing through the action to the component.
- As we replaced the ``mapDispatchToProps`` with actions in the ``connect`` method, I now destructure the actions from the props and pass them in as props on the ``<CounterList />``.
- We pass the reducerName in as a prop so that the method on the display component can pass it into its methods.
- We added a loading counter, but the explination of this is [over here](/selectors).
- We added a ``fetchData`` method within the ``CounterListContainer`` class.
- Now that we render the ``CounterList`` within the ``CounterListContainer`` Class. Rather than connecting the ``CounterList`` to the ``CounterListContainer``, this time we connect the ``CounterListContainer`` to itself. Thus making the dispatch and state availible to the props of the ``CounterListContainer``.


### How it works
- Within the ``componentDidMount`` method of ``CounterListContainer`` class we call ``fetchData`` which makes the call to the ``fetchCounters`` action;
- The ``fetchCounters`` action makes an async call to the API which returns a promise.
- Within the ``.then`` of the promise the ``receiveCounters`` action takes in the payload and reducerName and dispatches these out to the reducers.
- The ``receiveCounters`` action is picked up in the reducer and the payload is merged into the current state of the counter collection.
- When the state is updated the component re-renders and the new state is passed into the ``<CounterList  {...this.props} />`` via the props.
- The received payload is now the counterCollection on the state, and we can add to this using the UI.

### Extras // Middleware 

#### ``redux-logger``:
We added a piece of middleware called ``redux-logger`` to help us track the state as the user interacts with the application. We added it in the ``configureStore.js`` file, and set it to only kick in on the dev in environment so as not to polute the console on production. The steps were as follows:

- Pull in createLogger like this, ``import { createLogger } from 'redux-logger';``
- Within the ``configureStore`` method we create an empty array to hold any middleware we wish to add. ``const middlewares = [];``
- We check the environment var, if it is not production, we push the ``createLogger`` method to the ``middlewares`` array.
- The ``middlewares`` array can now be added to the store using the Redux ``applyMiddleware`` method, within the Redux ``createStore`` method as the last argument, like so: 

		return createStore(
			rootReducer,
			applyMiddleware(...middlewares)
		);

- Note that ``applyMiddleware`` is known as an enhancer and must be supplied as the final argument. ``createStore`` can also take a persited state, so if you want that in there too then you must supply it before the ``applyMiddleware`` method.

#### ``redux-thunk``:
The dual requestCounters & fetchCounters dispatch calls was a little clumbsy, so I added the thunk middleware to demo how this call all be wrapped up on one method.
See [here](/thunks) for details.

#### ``redux-promise``:
##### NO LONGER DOING THIS BUT LEAVING IT HERE FOR REFERENCE AS THUNKS CAN SOMETIMES BE OVERKILL
Due to the fact that we now make the async call from within the actions file we needed to enable the dispatch to handle async promise behaviour. To do this I added a piece of middleware called ``redux-promise``. What is under the hood of this middleware is explained [here](https://egghead.io/lessons/javascript-redux-wrapping-dispatch-to-recognize-promises).



