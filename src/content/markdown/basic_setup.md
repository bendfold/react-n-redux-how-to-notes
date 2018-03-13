## Basic Set Up

The very bare minimum directory and file set up you will need for a simple React and Redux application is as follows.


### How it works

#### Initialisation:
*   The application creates an initial STORE, using Redux's `createStore` method.
*   The STORE takes in a `rootReducer` object
*   The rootReducer object, is an object which contains all of the app's REDUCERS in one place. This is created using the `combineReducers()` method from Redux.
*   The inidividual REDUCERS take in an initial STATE for the components to use.

#### Data Flow:

*   The user interacts with an `eventHandler` on a component.
*   The `eventHandler` DISPATCHES an ACTION using the `store.dispatch` method.
*   When the dispatch is fired, the REDUCERS are run and if the ACTION passed into the REDUCER matches, then the REDUCER runs it's code against the STATE and the STORE is updated.
*   The render that is subscribed to the store changes will fire off and the application will get the new state.

### Things to note

*   The name of the prop on the state you are working with is defined in the reducer. In this case count. When you try to access this prop from within a component you must use the same name as the reduce it is tied to.
*   The props are availible to all the components via `context` the `Provider` element.
*   To access this data deep within the component heirachy, we need use `connect` in combination with `mapStateToProps` and `mapDispatchToProps` to hook the context up to the components
*   The `connect` function generates a wrapper component that subscribes to the store. When an action is dispatched, the wrapper component's callback is notified. It then runs your mapState function, and shallow-compares the result object from this time vs the result object from last time. If the results are different, then it passes the results to your "real" component" as props.

### NPM Packages:
- React
- Redux

### Component Parts:
- React Component / Components
- Redux - STORE - Contains:
	*   Application STATE.
	*   DISPATCH method to allow components to communicate with the STORE, via ACTIONS > REDUCERS.
	*   SUBSCRIBE method to allow components to listen for changes to the STATE, which lives in the STORE.
- Redux - ACTION / ACTIONS
- Redux - REDUCER / REDUCERS

### Folder Structure

		+-- index.js
		+-- scripts
		|	+-- actions
		|	|	+-- index.js
		|	+-- store
		|	|	+-- configureStore.js
		|	+-- reducers
		|	|	+-- index.js
		|	|	+-- count.js
		|	+-- components
		|	|	+-- App.js
		|	|	+-- Root.js
		|	|	+-- counter
		|	|	|	+-- CounterContainer.js
		|____|____|____+-- Counter.js