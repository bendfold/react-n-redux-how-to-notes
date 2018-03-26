## Mock Data Load

Building upon the "Counter Generator Example", we added in:
- A new reducer helper ``createNamedReducer`` to allow us to:
	- Reuse the existing reducer logic
	- Name our reducers at the point of creation
	- Pass in a name prop to the action to allow us to hit the correct part of the state.
- A new component to handle creating new counter items.
- A new component to handle displaying the list of counters.