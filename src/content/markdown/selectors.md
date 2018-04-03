
## Loading Indicator
In order to demonstrate how selectors work I added a check to see if the application is fetching data and show a loading message while this is happening. This can be seen on the ["Loading data from an API"](/mock-data-load) page. But there was quite a bit of change so to make the info easier to read I moved the selector part to this route.

#### What?
- A selector is a function that takes in a state object and returns some data that can be used with a component.
- This could be a simple boolean or something more complex like a filtered set of data from a larger collection.
- As Dan Abramov put it:
	- Reducer: “How does my state change over time”?
	- Selectors: “How do other modules make sense of my state?”

#### Why?
- It avoid duplicating data in the store and therefore simplifies maintaince of parts of the state.
- They off load data transformations from the component so that the component remains decoupled from the data thus keeping the component generic and re-usable.

#### How?
- It selectors should live with the reducer that they are checking for [these reasons](https://twitter.com/dan_abramov/status/730933179511640064?lang=de) from Dan Abramov:
	- Colocating reducers with selectors turns out to be a much more important topic in my new course than I previously realized.
	- It is the only reason I manage to change the state shape drastically over the lessons without touching the components even once.
	- As soon as I move reducer into its own file, no code outside of that file may depend on its state shape. Works wonders for refactorings.
	- Even selectors that operate on the parent state shouldn’t depend on the child state shape. Selector composition mirrors reducer composition.
	- Selectors are not just a perf thing. They don’t *have to* be memoized like Reselect. They can be regular functions calling each other.
	- Reducer: “How does my state change over time”? Selectors: “How do other modules make sense of my state?”


#### Extra Info
- Using selectors calls ``mapStateToProps`` a fair bit, which could be a performance hit. So in a larger app it would make sense to look at using something like [reselect](https://github.com/reactjs/reselect).
- Redux docs on [Selectors](https://redux.js.org/docs/recipes/ComputingDerivedData).
- Useful articles on Selectors:
	- [saltycrane](https://www.saltycrane.com/blog/2017/05/what-are-redux-selectors-why-use-them/)

#### What changes were made?
- The shape of the ``multiCounter.js`` file changed quite a bit to enable us to add the new selector, whilst keeping the reducers within testable.
- ``multiCounter.js`` now looks like this
	- A parent wrapper function called ``multiCounter``, this bundles up the sub-reducers using Redux ``combineReducers`` and returns the result.
	- There are two sub-reducers ``counterCollection`` (The list of counters) & ``isFetching`` a boolean which is toggled based on the state of the API call.
	- ``getMultiCounterReducers`` is a method what we use to:
		- Pull the sub-reducers into the ``combineReducers`` method.
		- Expose the sub-reducers to the test suite.
	- I co-located the selector ``getIsFetching`` within this file for all the reason mentioned in the intro.

- As we changed the shape of the multiCounter reducer to include the selector functionality above, we needed to alter the tests and display level component to work with the new shape of the state object.

- We now also fire off two actions as the component loads up.
	- First we fire off the ``REQUEST_COUNTERS`` action, which triggers the isFetching flag on the state to true.
	- Then, once the request returns the data, we fire the ``RECEIVE_COUNTERS`` action. This action is picked up in two different reducers within the parent ``multiCounter`` reducer.
		- In the ``counterCollection`` reducer it adds the payload to the current state.
		- In the ``isFetching`` reducer it.

#### How does this example work?
- The ``isFetching`` flag is toggled using the action sequence mentioned in the last section. To make this happen, within async callback inside of ``MockDataCounterListContainer.js``'s ``fetchData`` method, we do the following.
		
		this.props.requestCounters(reducerName);
		this.props.receiveCounters(payload, reducerName);

- Within the ``render`` function of ``MockDataCounterListContainer.js`` we perform a check for the ``isFetching`` state, this determines whether or not we show the loading message.
- The ``isFetching`` flag is set in the ``mapStateToProps`` via the selector ``isFetching: getIsFetching(state.counterCollectionB)``.
