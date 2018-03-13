## Counter Generator

Building upon the "Basic Setup Example", we added in:
- A new reducer to handle:
	- The creation of multiple counters
	- Increment and Decrement of each counter independantly of one another.
- A new component to handle creating new counter items.
- A new component to handle displaying the list of counters.

### How it works
- Inside ``CounterGeneratorControlsContainer`` we ``connect`` the ``CounterGeneratorControls`` to the ``dispatch`` so that it can publish the ``CREATE_COUNTER`` action type.
- This is picked up by the ``multiCounter`` reducer which creates a new counter item with an ID and count value. This object is then added to the ``multiCounter`` state.
- The ``multiCounter`` is registered in the store as ``counterCollection`` when we combineReducers. As a result the object created in the previous step is now available on the state as the ``counterCollection``.

### Things to note
- Initially I had the increment/decrement reducer seperate to the counterCollection. However this did not work as the state in the increment/decrement reducer could not see the state in the counterCollection. So I had to combine them. I believe this should be possible using HOC's to combine reducer states. For the purposes of these notes this is a bit much though, as the focus is to keep it simple.
- The testing is very much component based, I need to look at DUCKS as a more comprehensive pattern for handling end to end testing.

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
		|	|	+-- multiCounter.js
		|	+-- components
		|	|	+-- App.js
		|	|	+-- Root.js
		|	|	+-- counter
		|	|	|	+-- CounterContainer.js
		|	|	|	+-- Counter.js
		|	|	+-- *counter-generator*
		|	|	|	+-- *CounterGeneratorContainer.js*
		|	|	|	+-- *CounterGeneratorControls.js*
		|	|	|	+-- *CounterGeneratorControlsContainer.js*
		|	|	|	+-- *CounterList.js*
		|____|____|____+-- *CounterListContainer.js*
		